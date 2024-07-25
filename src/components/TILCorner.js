import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaTable } from 'react-icons/fa6';

const TILCorner = () => {
  const [points, setPoints] = useState(() => {
    // Get saved points from localStorage, or default to an empty array
    const savedPoints = localStorage.getItem('tilPoints');
    return savedPoints ? JSON.parse(savedPoints) : [];
  });
  const [newPoint, setNewPoint] = useState('');

  const handleAddPoint = () => {
    if (newPoint.trim() === '') return;

    const updatedPoints = [...points, newPoint];
    setPoints(updatedPoints);
    setNewPoint('');

    // Save to localStorage
    localStorage.setItem('tilPoints', JSON.stringify(updatedPoints));
  };

  const handleRemovePoint = (index) => {
    const updatedPoints = points.filter((_, i) => i !== index);
    setPoints(updatedPoints);

    // Save to localStorage
    localStorage.setItem('tilPoints', JSON.stringify(updatedPoints));
  };

  return (
    <Draggable>
    <div className="widget til-corner">
      <div className="widget-icon">
        <FaTable />
      </div>
      <div className="widget-content">
        <div className="til-input">
          <textarea
            value={newPoint}
            onChange={(e) => setNewPoint(e.target.value)}
            placeholder="Write what you learned today..."
          />
          <button onClick={handleAddPoint}>Add</button>
        </div>
        <ul className="til-list">
          {points.map((point, index) => (
            <li key={index}>
              {point}
              <button onClick={() => handleRemovePoint(index)} className="remove-btn">x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Draggable>
  );
};

export default TILCorner;
