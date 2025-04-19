import React, { useState } from 'react';
import '../styles/styles.css';

const DateSelector = () => {
  const [date, setDate] = useState('');

  return (
    <div className="date-selector">
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button>Submit</button>
      <button>5 Mins</button>
      <button>Hour</button>
      <button>Day</button>
    </div>
  );
};

export default DateSelector;
