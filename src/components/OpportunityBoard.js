import React from 'react';
import Draggable from 'react-draggable';
import { opportunities } from '../opportunityData'; // Import the data
import { FaRProject } from 'react-icons/fa6';

const OpportunityBoard = () => {
  return (
    <Draggable>
    <div className="widget opportunity-board">
      <div className="widget-icon">
        <FaRProject />
      </div>
      <div className="widget-content">
        <ul>
          {opportunities.map((opp) => (
            <li key={opp.id} className="opportunity-item">
              <h3>{opp.title}</h3>
              <p>{opp.description}</p>
              <p><strong>Team:</strong> {opp.team}</p>
              <p><strong>Priority:</strong> {opp.priority}</p>
              <p><strong>Status:</strong> {opp.status}</p>
              <p><strong>Contact:</strong> {opp.contactPerson}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Draggable>
  );
};

export default OpportunityBoard;
