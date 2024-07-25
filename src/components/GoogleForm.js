import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../index.css'; // Import CSS for styling
import { FaFill } from 'react-icons/fa6';

const GoogleForm = () => {
  const [formUrl, setFormUrl] = useState('');

  const handleInputChange = (e) => {
    setFormUrl(e.target.value);
  };

  return (
    <Draggable>
    <div className="widget google-form">
      <div className="widget-icon">
        <FaFill />
      </div>
      <div className="widget-content">
        <input
          type="text"
          placeholder="Enter Google Form URL"
          value={formUrl}
          onChange={handleInputChange}
        />
        {formUrl && (
          <iframe
            src={`${formUrl}?embedded=true`}
            title="Google Form"
            width="100%"
            height="500px"
            frameBorder="0"
          />
        )}
      </div>
    </div>
    </Draggable>
  );
};

export default GoogleForm;
