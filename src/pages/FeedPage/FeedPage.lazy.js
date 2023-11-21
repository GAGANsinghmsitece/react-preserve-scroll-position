import React, { lazy, Suspense } from 'react';

const LazyFeedPage = lazy(() => import('./FeedPage'));

const FeedPage = props => (
  <Suspense fallback={null}>
    <LazyFeedPage {...props} />
  </Suspense>
);

export default FeedPage;
