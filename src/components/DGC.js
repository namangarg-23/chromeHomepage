import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaThinkPeaks } from 'react-icons/fa6';


const initialItems = [
  { id: 1, text: 'Exercise for 30 minutes', completed: false },
  { id: 2, text: 'Read a book for 20 minutes', completed: false },
  { id: 3, text: 'Meditate for 10 minutes', completed: false },
  { id: 4, text: 'Write a journal entry', completed: false },
  { id: 5, text: 'Learn something new', completed: false },
];

const DailyGrowthChecklist = () => {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <Draggable>
    <div className="widget daily-growth-checklist">
      <div className="widget-icon">
        <FaThinkPeaks />
      </div>
      <div className="widget-content">
        <ul>
          {items.map(item => (
            <li key={item.id} className={item.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Draggable>
  );
};

export default DailyGrowthChecklist;
