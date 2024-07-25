import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaCog } from 'react-icons/fa';

const Meta = ({ onWidgetToggle }) => {
  const [showMeta, setShowMeta] = useState(false);
  const [widgetStates, setWidgetStates] = useState({
    GoogleSpreadsheet: true,
    GoogleForm: true,
    Music: true,
    Poll: true,
    BookQuote: true,
    IssueTracker: true,
    DGC: true,
    Announcements: true,
    StepsTracker: true,
    OpportunityBoard: true,
    Leaderboard: true,
    TILCorner: true,
    GoogleCalendar: true,
    GoogleMeet: true,
    GoogleKeep: true,
    ChatBox: true,
    NotionPage: true,
  });

  const handleToggle = (widgetName) => {
    setWidgetStates(prevStates => {
      const newStates = { ...prevStates, [widgetName]: !prevStates[widgetName] };
      onWidgetToggle(newStates); // Notify parent component
      return newStates;
    });
  };

  return (
    <Draggable>
    <div className={`meta-widget ${showMeta ? 'show' : 'hide'}`}>
      <button className="meta-icon" onClick={() => setShowMeta(!showMeta)}>
        <FaCog />
      </button>
      {showMeta && (
        <div className="meta-content">
          <h2>Widget Settings</h2>
          {Object.keys(widgetStates).map(widget => (
            <div key={widget} className="meta-option">
              <input
                type="checkbox"
                id={widget}
                checked={widgetStates[widget]}
                onChange={() => handleToggle(widget)}
              />
              <label htmlFor={widget}>{widget}</label>
            </div>
          ))}
        </div>
      )}
    </div>
    </Draggable>
  );
};

export default Meta;
