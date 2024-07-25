import React from 'react';
import meetings from '../meetings'; // Import the meetings data
import Draggable from 'react-draggable';
import '../index.css'; // Import the CSS file for styles
import { FaMeetup } from 'react-icons/fa';

const GoogleMeet = () => {
  return (
    <Draggable>
    <div className="widget google-meet">
      <div className="widget-icon">
        <FaMeetup />
      </div>
      <div className="widget-content">
        {meetings.length === 0 ? (
          <p>No upcoming meetings.</p>
        ) : (
          <ul>
            {meetings.map((meeting) => (
              <li key={meeting.id}>
                <strong>{meeting.title}</strong>
                <p>{`Start Time: ${new Date(meeting.startTime).toLocaleString()}`}</p>
                <p>
                  <a href={meeting.hangoutLink} target="_blank" rel="noopener noreferrer">
                    Join Meeting
                  </a>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </Draggable>
  );
};

export default GoogleMeet;
