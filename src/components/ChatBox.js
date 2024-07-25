import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../index.css'; // Import CSS for styling
import { FaBox } from 'react-icons/fa6';

const Chatbox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, type: 'user' }]);
      setMessage('');

      // Send the message to the backend
      try {
        const response = await fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });

        const data = await response.json();
        if (data && data.reply) {
          setMessages([...messages, { text: message, type: 'user' }, { text: data.reply, type: 'chatgpt' }]);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Draggable>
    <div className="widget chatbox">
      <div className="widget-icon">
        <FaBox />
      </div>
      <div className="widget-content">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <textarea
            value={message}
            onChange={handleInputChange}
            placeholder="Type your message here..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
    </Draggable>
  );
};

export default Chatbox;
