import React, { useState } from 'react';
import { FaBell, FaTimes } from 'react-icons/fa';

const Announcements = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="announcement-popup">
          <div className="announcement-content">
            <p>This is an announcement message. You can customize this text.</p>
            <button className="dismiss-button" onClick={handleDismiss}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      <div className="widget hidden-widget">
        <div className="widget-icon">
          <FaBell />
        </div>
        <div className="widget-content">
          <h2>Announcements</h2>
          <p>Check out the latest announcements here!</p>
        </div>
      </div>
    </>
  );
};

export default Announcements;
