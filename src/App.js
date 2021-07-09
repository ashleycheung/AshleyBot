import './App.css';
import React, { useEffect, useState } from 'react';
import InputBar from './InputBar';
import MessageDisplayer from './MessageDisplayer';

const ENDPOINT = "https://ashley-chatbot.herokuapp.com/response";

function App() {
  const [messages, setMessages] = useState([]);
  const [messageBuffer, setMessageBuffer] = useState();
  // Whenever message added to buffer, update messages
  useEffect(() => {
    if (messageBuffer) {
      addMessage(messageBuffer, 'Bot');
    }
  }, [messageBuffer]);
  // Add message
  const addMessage = (message, author) => {
    setMessages(messages.concat([
      {
        author: author,
        message: message
      }
    ]));
  }
  // Sends a message by updating messages state
  const userSendMessage = (message) => {
    // Add message to state
    addMessage(message, 'User');
    // Get bot response
    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message
      })
    })
      .then(r => r.json())
      .then(r => {
        setMessageBuffer(r.response);
      })
  }
  const appStyle = {
    minHeight: '100vh',
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
  return (
    <div style={appStyle}>
      <MessageDisplayer messages={messages}/>
      <InputBar sendMessage={userSendMessage}/>
    </div>
  );
}

export default App;
