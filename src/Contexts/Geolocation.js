import React, { useState, createContext } from 'react';
import { watchPosition } from '../utils/geolocation';

const GeolocationContext = createContext();

const GeolocationProvider = ({ children }) => {
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

  const value = { speed, setSpeed, error, setError };
  
  return (
    <GeolocationContext.Provider value={ value }>
      { children }
    </GeolocationContext.Provider>
  );
}

const GeolocationConsumer = GeolocationContext.Consumer;

export { GeolocationProvider, GeolocationConsumer };