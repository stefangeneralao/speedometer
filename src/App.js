import React from 'react';
import './App.scss';
import RollingMeter from './RollingMeter/RollingMeter';
import Error from './Error/Error';
import { GeolocationConsumer } from './Contexts/Geolocation';

const App = ({ error, speed }) => (
  <div className="app">
    <Error value={ error } />
    <RollingMeter value={ speed } />
  </div>
);

const AppContainer = () => (
  <GeolocationConsumer>
    { App }
  </GeolocationConsumer>
);

export default AppContainer;