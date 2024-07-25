import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../index.css'; // Import CSS for styling
import { FaTableList } from 'react-icons/fa6';

const GoogleSpreadsheet = () => {
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');

  const handleInputChange = (e) => {
    setSpreadsheetUrl(e.target.value);
  };

  return (
    <Draggable>
    <div className="widget google-spreadsheet">
      <div className="widget-icon">
        <FaTableList />
      </div>
      <div className="widget-content">
        <input
          type="text"
          placeholder="Enter Google Spreadsheet URL"
          value={spreadsheetUrl}
          onChange={handleInputChange}
        />
        {spreadsheetUrl && (
          <iframe
            src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vT3tH8v2rPt-iv4S1B0SuTzQxl8QJ91_Cc4z2zVzVu1EVjvPAqjx9Wh7sv03Kf9Hw/pubhtml?gid=0&single=true`}
            title="Google Spreadsheet"
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

export default GoogleSpreadsheet;
