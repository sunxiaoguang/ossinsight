"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[3352],{71119:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return p},contentTitle:function(){return g},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),i=o(20407),s=["components"],p={title:"Deep Insights into Programming Languages",image:"/img/language.png",try_it_yourself:{campaign:"insight_Language"}},g=void 0,l={unversionedId:"language/deep-insight-into-programming-languages-2021",id:"language/deep-insight-into-programming-languages-2021",title:"Deep Insights into Programming Languages",description:"In this chapter, we will share with you some of the top programming language repos (PL repos) on GitHub in 2021 measured by different metrics including the number of stars, PRs, contributors, countries, regions and so on.",source:"@site/docs/language/01-deep-insight-into-programming-languages-2021.mdx",sourceDirName:"language",slug:"/language/deep-insight-into-programming-languages-2021",permalink:"/language/deep-insight-into-programming-languages-2021",editUrl:"https://github.com/pingcap/ossinsight/edit/main/docs/language/01-deep-insight-into-programming-languages-2021.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Deep Insights into Programming Languages",image:"/img/language.png",try_it_yourself:{campaign:"insight_Language"}},sidebar:"tutorialSidebar",previous:{title:"Programming Languages",permalink:"/language/"},next:{title:"Real-time Insights",permalink:"/language/realtime"}},h=[{value:"Star history of top PL repos since 2011",id:"star-history-of-top-pl-repos-since-2011",children:[],level:2},{value:"Top 10 most starred PL repos in 2021",id:"top-10-most-starred-pl-repos-in-2021",children:[],level:2},{value:"Top 10 PL repos with the most PRs in 2021",id:"top-10-pl-repos-with-the-most-prs-in-2021",children:[],level:2},{value:"Top 10 PL repos with the most contributors in 2021",id:"top-10-pl-repos-with-the-most-contributors-in-2021",children:[],level:2},{value:"Top 20 developers contributed the most PRs to PL repos in 2021",id:"top-20-developers-contributed-the-most-prs-to-pl-repos-in-2021",children:[],level:2},{value:"Top 9 PL repos with the highest YoY growth rate of stars in 2021",id:"top-9-pl-repos-with-the-highest-yoy-growth-rate-of-stars-in-2021",children:[],level:2},{value:"Top 10 PL repos with the lowest YoY growth rate of stars in 2021",id:"top-10-pl-repos-with-the-lowest-yoy-growth-rate-of-stars-in-2021",children:[],level:2},{value:"Top 20 companies contributing the most to PL repos in 2021",id:"top-20-companies-contributing-the-most-to-pl-repos-in-2021",children:[],level:2},{value:"Top countries or regions contributing to OSS programming languages",id:"top-countries-or-regions-contributing-to-oss-programming-languages",children:[],level:2},{value:"The rankings of PL repos measured by Z-score in 2021",id:"the-rankings-of-pl-repos-measured-by-z-score-in-2021",children:[],level:2}],m={toc:h};function u(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this chapter, we will share with you some of ",(0,a.kt)("strong",{parentName:"p"},"the top programming language repos (PL repos) on GitHub in 2021")," measured by different metrics including the number of stars, PRs, contributors, countries, regions and so on. "),(0,a.kt)("p",null,"Note: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You can move your cursor onto any of the repository bars/lines on the chart and get the exact number. "),(0,a.kt)("li",{parentName:"ol"},"The SQL commands above each chart are what we use on TiDB Cloud to get the analytical results. Try those SQL commands by yourselves on TiDB Cloud with this ",(0,a.kt)("a",{parentName:"li",href:"/blog/try-it-yourself/"},"5-minute tutorial"),".")),(0,a.kt)("h2",{id:"star-history-of-top-pl-repos-since-2011"},"Star history of top PL repos since 2011"),(0,a.kt)(i.h,{chart:"dynamic-stars",category:"archive-2021-top10-star-racing",formatSql:!1,repo:"programming_language_repos",mdxType:"CommonChart"}),(0,a.kt)("h2",{id:"top-10-most-starred-pl-repos-in-2021"},"Top 10 most starred PL repos in 2021"),(0,a.kt)(i.h,{chart:"barchart",category:"archive-2021-top10-by-stars",n:10,formatSql:!1,categoryIndex:"repo_name",valueIndex:"stars",seriesName:"Stars",repo:"programming_language_repos",mdxType:"CommonChart"}),(0,a.kt)("h2",{id:"top-10-pl-repos-with-the-most-prs-in-2021"},"Top 10 PL repos with the most PRs in 2021"),(0,a.kt)(i.h,{chart:"barchart",category:"archive-2021-top10-by-prs",n:20,formatSql:!1,categoryIndex:"repo_name",valueIndex:"num",seriesName:"PRs",repo:"programming_language_repos",mdxType:"CommonChart"}),(0,a.kt)("h2",{id:"top-10-pl-repos-with-the-most-contributors-in-2021"},"Top 10 PL repos with the most contributors in 2021"),(0,a.kt)(i.h,{chart:"barchart",category:"archive-2021-top20-by-developers",formatSql:!1,categoryIndex:"actor_login",valueIndex:"pr_count",categoryType:"owner",seriesName:"PRs",repo:"programming_language_repos",mdxType:"CommonChart"}),(0,a.kt)("h2",{id:"top-20-developers-contributed-the-most-prs-to-pl-repos-in-2021"},"Top 20 developers contributed the most PRs to PL repos in 2021"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click here to expand SQL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT actor_login, count(*) as pr_count\n    FROM github_events\n         JOIN programming_language_repos wf ON wf.id = github_events.repo_id\n   WHERE event_year = 2021 \n         AND type = 'PullRequestEvent' \n         AND action = 'opened' \n         AND actor_login not like '%bot%'\nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 20\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+-----------------+----------+\n| actor_login     | pr_count |\n+-----------------+----------+\n| miss-islington  | 1586     |\n| yuyi98          | 564      |\n| timotheecour    | 418      |\n| Trott           | 399      |\n| CyrusNajmabadi  | 384      |\n| pancakevirus    | 366      |\n| xflywind        | 365      |\n| DougGregor      | 357      |\n| GuillaumeGomez  | 324      |\n| WalterBright    | 316      |\n| slavapestov     | 294      |\n| MarcusDenker    | 283      |\n| astares         | 267      |\n| ibuclaw         | 265      |\n| Youssef1313     | 256      |\n| pablogsal       | 252      |\n| JohnTitor       | 252      |\n| straight-shoota | 243      |\n| vstinner        | 243      |\n| erlend-aasland  | 229      |\n+-----------------+----------+\n")),(0,a.kt)("h2",{id:"top-9-pl-repos-with-the-highest-yoy-growth-rate-of-stars-in-2021"},"Top 9 PL repos with the highest YoY growth rate of stars in 2021"),(0,a.kt)(i.h,{chart:"yoychart",category:"archive-2021-top20-by-stars-yoy",formatSql:!1,repo:"programming_language_repos",mdxType:"CommonChart"}),(0,a.kt)("h2",{id:"top-10-pl-repos-with-the-lowest-yoy-growth-rate-of-stars-in-2021"},"Top 10 PL repos with the lowest YoY growth rate of stars in 2021"),(0,a.kt)(i.h,{chart:"yoychart",category:"archive-2021-bottom10-by-yoy",formatSql:!1,repo:"programming_language_repos",mdxType:"CommonChart"}),(0,a.kt)("h2",{id:"top-20-companies-contributing-the-most-to-pl-repos-in-2021"},"Top 20 companies contributing the most to PL repos in 2021"),(0,a.kt)(i.h,{chart:"barchart",category:"archive-2021-top20-by-companies",formatSql:!1,categoryIndex:"company",valueIndex:"users_count",seriesName:"Contributors",categoryType:!1,repo:"programming_language_repos",mdxType:"CommonChart"}),(0,a.kt)("h2",{id:"top-countries-or-regions-contributing-to-oss-programming-languages"},"Top countries or regions contributing to OSS programming languages"),(0,a.kt)(i.h,{chart:"worldmapchart",category:"archive-2021-top10-by-regions",formatSql:!1,categoryIndex:"country_code",valueIndex:"users_count",seriesName:"Contributors",repo:"programming_language_repos",mdxType:"CommonChart"}),(0,a.kt)("h2",{id:"the-rankings-of-pl-repos-measured-by-z-score-in-2021"},"The rankings of PL repos measured by Z-score in 2021"),(0,a.kt)("p",null,"The analytical results displayed above are generated based on just one single metric of these three: stars, PRs, or contributors. Now, we will use the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Standard_score"},"Z-score")," method to rank PL repos on GitHub."),(0,a.kt)("p",null,"This is the comprehensive ranking calculated by z-score:"),(0,a.kt)(i.h,{chart:"zscorechart",category:"archive-2021-archive-ranking",formatSql:!1,repo:"programming_language_repos",mdxType:"CommonChart"}))}u.isMDXComponent=!0}}]);