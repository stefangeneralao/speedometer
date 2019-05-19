import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GeolocationProvider } from './Contexts/Geolocation';

ReactDOM.render(
  <GeolocationProvider>
    <App />
  </GeolocationProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
