import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider } from './routes/RouterProvider';
import { PrimeReactProvider } from 'primereact/api';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <PrimeReactProvider value={{ unstyled: true}}>
<Provider store={appStore}>
  <RouterProvider/>
  </Provider>
  </PrimeReactProvider>);
