import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

const WeatherDetails = ({ data }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Get the latest sensor reading (last item in the array)
  const latestData = data && data.length > 0 ? data[data.length - 1] : null;

  return (
    <div className="weather-details">
      <h2>Bhubaneswar, Odisha</h2>
      <p>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      <p>{currentTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', weekday: 'long' })}</p>

      {latestData ? (
        <>
          <h1>{latestData.field1}°C</h1>
          <ul>
            <li>Humidity: {latestData.field2} %</li>
            <li>CO: {latestData.field3}</li>
            <li>CO₂: {latestData.field4}</li>
          </ul>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default WeatherDetails;
