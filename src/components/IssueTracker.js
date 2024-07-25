// src/components/IssueTracker.js

import React from 'react';
import Draggable from 'react-draggable';
import { issues } from '../issuesData'; // Import issues data
import { FaGithub } from 'react-icons/fa';

const IssueTracker = () => {
  return (
    <Draggable>
    <div className="widget issue-tracker">
      <div className="widget-icon">
        <FaGithub />
      </div>
      <div className="widget-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {issues.map(issue => (
              <tr key={issue.id}>
                <td>{issue.id}</td>
                <td>{issue.title}</td>
                <td>{issue.status}</td>
                <td>{issue.assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Draggable>
  );
};

export default IssueTracker;
