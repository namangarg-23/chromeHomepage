import React, { useState, useEffect } from 'react';
import '../index.css'; // Import CSS for styling

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const updateDateTime = () => {
      setDateTime(new Date());
    };

    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const formatDateTime = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="datetime-display">
      <p>{formatDateTime(dateTime)}</p>
    </div>
  );
};

export default DateTimeDisplay;
