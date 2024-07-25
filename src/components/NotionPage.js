import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../index.css'; // Import CSS for styling
import { FaDochub } from 'react-icons/fa';

const NotionPage = ({ url }) => {
  const [notionUrl, setNotionUrl] = useState(url);

  return (
    <Draggable>
    <div className="widget notion-page">
      <div className="widget-icon">
        <FaDochub />
      </div>
      <div className="widget-content">
        {notionUrl ? (
          <iframe
            src={notionUrl}
            title="Notion Page"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        ) : (
          <p>No Notion URL provided.</p>
        )}
      </div>
    </div>
    </Draggable>
  );
};

export default NotionPage;
