import React from 'react';
import useAutoUpdate from '../hooks/useAutoUpdate'; // adjust path
import "../styles/styles.css";
import co2 from "../images/co2.png";
import co from "../images/co.png";
import pm25 from "../images/pm25.png";
import temperature from "../images/temperature.png";
import humidity from "../images/humidity.png";

const Header = () => {
  const { data, lastUpdated } = useAutoUpdate();

  return (
    <div className="header">
      <div className="header-item">
        <img src={co2} alt="CO₂" className="sensor-icon" />
        <span>CO₂ extreme <br /> <strong>{data?.field4 || 'Loading...'} ppm</strong></span>
      </div>
      <div className="header-item">
        <img src={co} alt="CO" className="sensor-icon" />
        <span>CO average <br /> <strong>{data?.field3 || 'Loading...'} ppm</strong></span>
      </div>
      <div className="header-item">
        <img src={pm25} alt="PM2.5" className="sensor-icon" />
        <span>PM2.5 Good <br /> <strong>{data?.field5 || 'Loading...'} µm/m³</strong></span>
      </div>
      <div className="header-item">
        <img src={temperature} alt="Temperature" className="sensor-icon" />
        <span>Temperature <br /> <strong>{data?.field1 || 'Loading...'}°C</strong></span>
      </div>
      <div className="header-item">
        <img src={humidity} alt="Humidity" className="sensor-icon" />
        <span>Humidity <br /> <strong>{data?.field2 || 'Loading...'}%</strong></span>
      </div>
      
      {lastUpdated && (
        <div className="last-updated" style={{ marginTop: '10px', fontSize: '14px', color: '#777' }}>
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
};

export default Header;
