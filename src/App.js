import React, { useState } from 'react';
import './App.scss';
import Speedometer from './Speedometer';
import Error from './Error';

const watchPos = callback => {
  const success = pos => {
    const { coords: { speed, accuracy }, timestamp } = pos;
    const speedKPH = (speed * 3.6).toFixed(1);
    callback(null, { speed: speedKPH, accuracy, timestamp });
  };

  const error = err => {
    const { message } = err;
    callback(message);
  };

  const config = {
    maximumAge: 0,
    timeout: 3000,
    enableHighAccuracy: true,
  };
  
  navigator.geolocation.watchPosition(success, error, config);
}

const App = () => {
  const [speed, setSpeed] = useState(null);
  const [timestamp, setTimestamp] = useState(0);
  const [error, setError] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  watchPos((err, pos) => {
    if (err) {
      setError(err);
      return;
    }

    if (!pos) {
      setError('"pos" N/A');
      return;
    }

    const { speed, accuracy, timestamp } = pos;
    
    setError(null);
    setSpeed(speed);
    setAccuracy(accuracy);
    setTimestamp(timestamp);
  });

  return (
    <div className="app">
      <Error value={ error } />
      <Speedometer value={ speed } />
    </div>
  );
}

export default App;
