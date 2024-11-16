import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './index';
import Spinner from '../components/common/Spinner';

export const RouterProvider = () => (
  <Suspense
    fallback={
      <Spinner />
    }
  >
    <RouterProvider router={createBrowserRouter(routes)} />
  </Suspense>
);


export default RouterProvider;