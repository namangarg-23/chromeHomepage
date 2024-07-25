import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { FaHeart } from 'react-icons/fa6';

const HealthTracker = () => {
  const [steps, setSteps] = useState(null);

  useEffect(() => {
    // Initialize Google Fit API client
    const initGoogleFit = () => {
      // Your initialization code here (e.g., load Google's API library)
    };

    const fetchStepsData = async () => {
      // Implement authentication and fetch data from Google Fit API
      try {
        // Example API request - replace with actual implementation
        const response = await fetch('/api/fit-data'); // Custom endpoint to get data from Google Fit
        const data = await response.json();
        setSteps(data.steps);
      } catch (error) {
        console.error('Error fetching steps data:', error);
      }
    };

    initGoogleFit();
    fetchStepsData();
  }, []);

  return (
    <Draggable>
    <div className="widget health-tracker">
      <div className="widget-icon">
        <FaHeart />
      </div>
      <div className="widget-content">
        <p>Total Steps Today: {steps !== null ? steps : 'Loading...'}</p>
      </div>
    </div>
    </Draggable>
  );
};

export default HealthTracker;
