import React from 'react';
import { registerThemeDark } from '../../components/BasicCharts';
import { Collection } from './hooks/useCollection';
import CollectionsPageLayout from './layout';
import MonthRankSection from './sections/month-rank';
import HistoryRankSection from './sections/history-rank';

registerThemeDark();

const getTitle = (collection?: Collection) => collection?.name ? `${collection.name} - Ranking` : 'Loading - Ranking';
const description = 'Monthly ranking of repos in this collection by stars, pull requests, issues. Historical Ranking by Popularity.'
const keywords = 'monthly ranking,github,gitHub repositories,github collection,github metrics, Month-on-Month Ranking,Historical Ranking'.split(',')

function CollectionsPage() {
  return (
    <CollectionsPageLayout title={getTitle} description={description} keywords={keywords}>
      <MonthRankSection />
      <HistoryRankSection />
    </CollectionsPageLayout>
  );
}

export default CollectionsPage;
