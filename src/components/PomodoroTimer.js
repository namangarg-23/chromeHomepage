import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../index.css'; // Import CSS for styling
import { FaTimeline } from 'react-icons/fa6';

const PomodoroTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsBreak(!isBreak);
            setTime(isBreak ? 25 * 60 : 5 * 60); // Reset to 25 minutes if in break, otherwise 5 minutes
            setIsActive(false);
            return isBreak ? 25 * 60 : 5 * 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Draggable>
    <div className="widget pomodoro-timer">
      <div className="widget-icon">
        <FaTimeline />
      </div>
      <div className="widget-content">
        <div className="timer-display">
          {formatTime(time)}
        </div>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => { setIsActive(false); setTime(25 * 60); }}>
          Reset
        </button>
        <div className="status">
          {isBreak ? 'Break Time' : 'Work Time'}
        </div>
      </div>
    </div>
    </Draggable>
  );
};

export default PomodoroTimer;
