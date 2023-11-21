import React, { lazy, Suspense } from 'react';

const LazyPostDetailsPage = lazy(() => import('./PostDetailsPage'));

const PostDetailsPage = props => (
  <Suspense fallback={null}>
    <LazyPostDetailsPage {...props} />
  </Suspense>
);

export default PostDetailsPage;
