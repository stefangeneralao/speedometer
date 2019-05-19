import React, { useState } from 'react';
import './App.scss';
import RollingMeter from './RollingMeter/RollingMeter';
import Error from './Error/Error';
import { watchPosition } from './utils/geolocation';

const App = () => {
  const [speed, setSpeed] = useState(null);
  const [error, setError] = useState(null);

  watchPosition((err, position) => {
    if (err) {
      setError(err);
      return;
    }

    if (!position) {
      setError('"position" N/A');
      return;
    }

    const { speed } = position;
    
    setError(null);
    setSpeed(speed);
  });

  return (
    <div className="app">
      <Error value={ error } />
      <RollingMeter value={ speed } />
    </div>
  );
}

export default App;
