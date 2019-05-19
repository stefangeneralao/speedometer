import React, { useState } from 'react';
import './App.scss';
import RollingMeter from './RollingMeter/RollingMeter';
import Error from './Error';
import { watchPosition } from './utils/geolocation';

const App = () => {
  const [speed, setSpeed] = useState(null);
  const [error, setError] = useState(null);

  watchPosition((err, pos) => {
    if (err) {
      setError(err);
      return;
    }

    if (!pos) {
      setError('"pos" N/A');
      return;
    }

    const { speed } = pos;
    
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
