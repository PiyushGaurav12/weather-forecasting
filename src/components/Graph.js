import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/styles.css';

const data = [
  { time: '13:51', value: 1060 },
  { time: '13:56', value: 1080 },
  { time: '14:01', value: 1085 },
  { time: '14:06', value: 1040 },
  { time: '14:12', value: 1100 },
  { time: '14:17', value: 1150 },
];

const Graph = () => {
  return (
    <div className="graph-container">
      <h3>Today's Data</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
