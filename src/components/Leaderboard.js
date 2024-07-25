import React from 'react';
import Draggable from 'react-draggable';
import { leaderboard } from '../leaderboardData'; // Import the leaderboard data
import { FaWind } from 'react-icons/fa6';

const GenericLeaderboard = () => {
  return (
    <Draggable>
    <div className="widget generic-leaderboard">
      <div className="widget-icon">
        <FaWind />
      </div>
      <div className="widget-content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Steps</th>
              <th>Pages Read</th>
              <th>Pomodoros</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.steps}</td>
                <td>{entry.pagesRead}</td>
                <td>{entry.pomodoros}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Draggable>
  );
};

export default GenericLeaderboard;
