// src/app/ChatComponent.js

'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import './globals.css'; // Import the global styles

const ChatComponent = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const sendInitialMessage = async () => {
      try {
        const res = await axios.post('/api/flowise', { query: 'Hello' });
        setResponse([{ text: res.data.text, sender: 'bot' }]);
      } catch (error) {
        console.error('Error fetching response', error);
        setResponse([{ text: 'Failed to fetch response', sender: 'bot' }]);
      }
    };

    sendInitialMessage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() === '') return;

    // Add user's message to the response array
    setResponse([...response, { text: query, sender: 'user' }]);

    try {
      const res = await axios.post('/api/flowise', { query });
      setResponse((prevResponse) => [...prevResponse, { text: res.data.text, sender: 'bot' }]);
      setQuery('');
    } catch (error) {
      console.error('Error fetching response', error);
      setResponse((prevResponse) => [...prevResponse, { text: 'Failed to fetch response', sender: 'bot' }]);
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1><strong>Avi AI</strong></h1>
        <div className="messages">
          {response.map((msg, index) => (
            <p key={index} className={`message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
              {msg.text}
            </p>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your question..."
          />
          <button type="submit">→</button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;