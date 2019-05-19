export const watchPosition = callback => {
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