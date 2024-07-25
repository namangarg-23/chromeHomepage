import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import quotesData from '../quotesData';
import { FaBookOpen } from 'react-icons/fa';

const getDailyQuote = () => {
  const date = new Date();
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  return quotesData[dayOfYear % quotesData.length];
};

const BookQuote = () => {
  const [quote, setQuote] = useState(getDailyQuote);

  useEffect(() => {
    setQuote(getDailyQuote());
  }, []);

  return (
    <Draggable>
    <div className="widget">
      <div className="widget-icon">
        <FaBookOpen />
      </div>
      <div className="widget-content">
        <h2>Book + Quote</h2>
        <blockquote>
          <p>"{quote.quote}"</p>
          <footer>
            <cite>{quote.author}, <em>{quote.book}</em></cite>
          </footer>
        </blockquote>
      </div>
    </div>
    </Draggable>
  );
};

export default BookQuote;
