import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Settings } from './const';
import { offers } from './mocks/offer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App proposalsCount={Settings.ProposalsCount} offers={offers}/>
  </React.StrictMode>
);
