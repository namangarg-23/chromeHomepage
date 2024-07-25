import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../index.css'; // Import the CSS file for styles
import { FaNoteSticky } from 'react-icons/fa6';

const GoogleKeep = () => {
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('');

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = async () => {
    if (note.trim()) {
      try {
        const response = await fetch('http://localhost:5100/add-note', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ note }),
        });

        if (response.ok) {
          setStatus('Note added successfully');
          setNote('');
        } else {
          setStatus('Failed to add note');
        }
      } catch (error) {
        setStatus('Error: ' + error.message);
      }
    }
  };

  return (
    <Draggable>
    <div className="widget google-keep">
      <div className="widget-icon">
        <FaNoteSticky />
      </div>
      <div className="widget-content">
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Type your note here..."
        />
        <button onClick={handleAddNote}>Add Note</button>
        {status && <p>{status}</p>}
      </div>
    </div>
    </Draggable>
  );
};

export default GoogleKeep;
