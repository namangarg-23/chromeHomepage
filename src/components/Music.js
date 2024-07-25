import React, { useState, useEffect } from 'react';
import '../index.css'; // Import CSS for styling
import { FaMusic } from 'react-icons/fa';

const Music = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({ top: '20px', left: '20px' });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - parseInt(position.left, 10),
      y: e.clientY - parseInt(position.top, 10),
    });
  };

  const onDrag = (e) => {
    if (dragging) {
      setPosition({
        top: `${e.clientY - offset.y}px`,
        left: `${e.clientX - offset.x}px`,
      });
    }
  };

  const stopDrag = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', stopDrag);

    return () => {
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('mouseup', stopDrag);
    };
  }, [dragging, offset, position]);

  return (
    <div
      className={`widget music ${isExpanded ? 'expanded' : ''}`}
      style={{ top: position.top, left: position.left }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onMouseDown={startDrag}
    >
      <div className="widget-icon">
        <FaMusic />
      </div>
      {isExpanded && (
        <div className="widget-content">
          <p>Now Playing: Example Song</p>
          <a href="https://music.youtube.com" target="_blank" rel="noopener noreferrer">
            Open YouTube Music
          </a>
        </div>
      )}
    </div>
  );
};

export default Music;
