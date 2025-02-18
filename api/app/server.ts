import Router from "koa-router";
import Query, {SQLExecuteError} from "./core/Query";
import {TiDBQueryExecutor} from "./core/TiDBQueryExecutor";
import {DefaultState} from "koa";
import type {ContextExtends} from "../index";
import GhExecutor from "./core/GhExecutor";
import {register} from "prom-client";
import {measureRequests} from "./middlewares/measureRequests";
import CollectionService from "./services/CollectionService";
import GHEventService from "./services/GHEventService";
import CacheBuilder from "./core/cache/CacheBuilder";

const COMPARE_QUERIES = [
  'stars-total',
  'stars-map',
  'stars-top-50-company',
  'stars-max-by-week',
  'stars-map',
  'stars-average-by-week',
  'stars-common-company',
  'stars-common-stargazer-total',
  'pushes-total',
  'pushers-total',
  'pull-requests-total',
  'pull-request-reviews-total',
  'pull-request-reviewers-total',
  'pull-request-creators-total',
  'pull-request-creators-map',
  'pull-request-creators-top-50-company',
  'issues-total',
  'issue-creators-total',
  'issue-comments-total',
  'issue-commenters-total',
  'issue-creators-map',
  'issue-creators-top-50-company',
  'forkers-total',
  'committers-total',
  'commits-total',
  'commit-commenters-total',
  'commits-time-distribution',
  'pull-requests-history',
  'pull-request-creators-per-month',
  'stars-history',
];

export default async function server(router: Router<DefaultState, ContextExtends>) {
  // Init MySQL Executor. 
  const queryExecutor = new TiDBQueryExecutor({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: parseInt(process.env.CONNECTION_LIMIT || '10'),
    queueLimit: parseInt(process.env.QUEUE_LIMIT || '20'),
    decimalNumbers: true
  })

  // Init Cache Builder; 
  const enableCache = process.env.ENABLE_CACHE === '1' ? true : false;
  const cacheBuilder = new CacheBuilder(queryExecutor, enableCache);

  // Init GitHub Executor.
  const tokens = (process.env.GH_TOKENS || '').split(',').map(s => s.trim()).filter(Boolean);
  const ghExecutor = new GhExecutor(tokens, cacheBuilder);

  // Init Services.
  const collectionService = new CollectionService(queryExecutor, cacheBuilder);
  const ghEventService = new GHEventService(queryExecutor);

  router.get('/q/:query', measureRequests({ urlLabel: 'path' }), async ctx => {
    try {
      const query = new Query(ctx.params.query, cacheBuilder, queryExecutor, ghEventService, collectionService)
      const res = await query.run(ctx.query, false, null, ctx.request.ip)
      ctx.response.status = 200
      ctx.response.body = res
    } catch (e) {
      ctx.logger.error('Failed to request %s: ', ctx.request.originalUrl, e)
      ctx.response.status = 500
      ctx.response.body = e
    }
  })

  router.get('/q/explain/:query', measureRequests({ urlLabel: 'path' }), async ctx => {
    try {
      const query = new Query(ctx.params.query, cacheBuilder, queryExecutor, ghEventService, collectionService)
      const res = await query.explain(ctx.query)
      ctx.response.status = 200
      ctx.response.body = res
    } catch (e) {
      ctx.logger.error('Failed to request %s: ', ctx.request.originalUrl, e)
      ctx.response.status = 500
      ctx.response.body = e
    }
  })

  router.get('/collections', measureRequests({ urlLabel: 'path' }), async ctx => {
    try {
      const res = await collectionService.getCollections();
      ctx.response.status = 200
      ctx.response.body = res
    } catch (e) {
      ctx.logger.error('Failed to request %s: ', ctx.request.originalUrl, e)
      ctx.response.status = 500
      ctx.response.body = e
    }
  })

  router.get('/collections/:collectionId', measureRequests({ urlLabel: 'path' }), async ctx => {
    const { collectionId } = ctx.params
    try {
      const res = await collectionService.getCollectionRepos(parseInt(collectionId));
      ctx.response.status = 200
      ctx.response.body = res
    } catch (e) {
      ctx.logger.error('Failed to request %s: ', ctx.request.originalUrl, e)
      ctx.response.status = 500
      ctx.response.body = e
    }
  })

  // qo means query options.
  router.get('/qo/repos/groups/osdb', measureRequests({ urlLabel: 'path' }), async ctx => {
    try {
      const res = await collectionService.getOSDBRepoGroups();

      ctx.response.status = 200
      if (ctx.query.format === 'global_variable') {
        ctx.type = 'text/javascript'
        ctx.response.body = `var osdbgroup = (${JSON.stringify(res)});`
      } else {
        ctx.response.body = res
      }
    } catch (e: any) {
      ctx.logger.error('request failed %s', ctx.request.originalUrl, e)
      ctx.response.status = e?.response?.status ?? e?.status ?? 500
      ctx.response.body = e?.response?.data ?? e?.message ?? String(e)
    }
  })

  router.get('/qc', measureRequests({ urlLabel: 'path' }), async ctx => {
    const conn = await queryExecutor.getConnection();

    // If the queryNames parameter is provided, the query that needs to be queried is filtered.
    let queryNames = COMPARE_QUERIES;
    const needsQueryNames = ctx.query.queryNames;
    if (Array.isArray(needsQueryNames)) {
      queryNames = COMPARE_QUERIES.filter((queryName) => {
        return needsQueryNames.find((needQueryName) => {
          return needQueryName === queryName;
        }) !== undefined
      })
    }

    try {
      const resultMap: Record<string, any> = {};

      for (let queryName of queryNames) {
        const query = new Query(queryName, cacheBuilder, queryExecutor, ghEventService, collectionService)

        try {
          resultMap[queryName] = await query.run(ctx.query, false, conn)
        } catch (err) {
          ctx.logger.error('Failed to query for %s: ', queryName, err)
          resultMap[queryName] = {
            msg: `Failed to query for ${queryName}.`,
            rawSQL: (err as SQLExecuteError).sql
          }
        }
      }

      ctx.response.status = 200
      ctx.response.body = resultMap
    } catch (e) {
      ctx.logger.error('Failed to request %s: ', ctx.request.originalUrl, e)
      ctx.response.status = 500
      ctx.response.body = e
    } finally {
      conn.release();
    }
  })


  router.get('/gh/repo/:owner/:repo', measureRequests({ urlLabel: 'route' }), async ctx => {
    const { owner, repo } = ctx.params
    try {
      const res = await ghExecutor.getRepo(owner, repo)

      ctx.response.status = 200
      ctx.response.body = res
    } catch (e: any) {

      ctx.logger.error('request failed %s', ctx.request.originalUrl, e)
      ctx.response.status = e?.response?.status ?? e?.status ?? 500
      ctx.response.body = e?.response?.data ?? e?.message ?? String(e)
    }
  })

  router.get('/gh/repos/search', measureRequests({ urlLabel: 'path' }), async ctx => {
    const { keyword } = ctx.query;

    try {
      if (keyword == null || keyword.length === 0) {
        ctx.response.status = 400;
        ctx.response.body = "keyword can not be empty.";
        return
      }

      const res = await ghExecutor.searchRepos(String(keyword))

      ctx.response.status = 200
      ctx.response.body = res
    } catch (e: any) {
      ctx.logger.error('request failed %s', ctx.request.originalUrl, e)
      ctx.response.status = e?.response?.status ?? e?.status ?? 500
      ctx.response.body = e?.response?.data ?? e?.message ?? String(e)
    }
  })

  router.get('/gh/users/search', measureRequests({ urlLabel: 'path' }), async ctx => {
    const { keyword, type } = ctx.query as any;

    try {
      if (keyword == null || keyword.length === 0) {
        ctx.response.status = 400;
        ctx.response.body = "keyword can not be empty.";
        return
      }

      const res = await ghExecutor.searchUsers(String(keyword), type)

      ctx.response.status = 200
      ctx.response.body = res
    } catch (e: any) {
      ctx.logger.error('request failed %s', ctx.request.originalUrl, e)
      ctx.response.status = e?.response?.status ?? e?.status ?? 500
      ctx.response.body = e?.response?.data ?? e?.message ?? String(e)
    }
  })

  router.get('/metrics', async ctx => {
    ctx.body = await register.metrics()
  })

  router.get('/metrics/:name', async ctx => {
    ctx.body = await register.getSingleMetricAsString(ctx.params.name)
  })
}
