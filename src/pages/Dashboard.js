// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WeatherDetails from '../components/WeatherDetails';
import DateSelector from '../components/DateSelector';
import Graph from '../components/Graph';
import { fetchThingSpeakData } from '../api/thingspeak'; // new import

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchThingSpeakData();
      setSensorData(data);
    };

    getData();
    const interval = setInterval(getData, 10000); // fetch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          {/* pass live data to WeatherDetails */}
          <WeatherDetails data={sensorData} />
          <div className="graph-section">
            <DateSelector />
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
