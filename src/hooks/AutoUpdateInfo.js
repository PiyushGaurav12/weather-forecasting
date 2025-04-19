// created to manage the update but not yet implemented

import React from 'react';
import useAutoUpdate from '../hooks/useAutoUpdate';

const AutoUpdateInfo = () => {
  const { data, lastUpdated, fetchData, loading } = useAutoUpdate(3600000); // 1 hr interval

  return (
    <div className="auto-update-info">
      <p><strong>Last Updated:</strong> {lastUpdated ? lastUpdated.toLocaleString() : "Loading..."}</p>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh Now"}
      </button>

      {data && (
        <div className="sensor-values">
          <p><strong>Temperature:</strong> {data.field1} °C</p>
          <p><strong>Humidity:</strong> {data.field2} %</p>
          <p><strong>CO:</strong> {data.field3} ppm</p>
          <p><strong>CO₂:</strong> {data.field4} ppm</p>
        </div>
      )}
    </div>
  );
};

export default AutoUpdateInfo;
