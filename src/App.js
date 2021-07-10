import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import InputBar from './InputBar';
import MessageDisplayer from './MessageDisplayer';
import Banner from './Banner';

const ENDPOINT = "https://ashley-chatbot.herokuapp.com/response";

function App() {
  const [messages, setMessages] = useState([]);
  // Sends a message by updating messages state
  const addMessage = useCallback((message, author) => {
    setMessages(messages.concat([{
      message: message,
      author: author
    }]))
  }, [messages])
  // When messages change check if the latest message
  // is from the user
  useEffect(() => {
    if (messages.length === 0) {
      return;
    }
    const message = messages[messages.length - 1];
    if (message.author === 'User') {
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
          addMessage(r.response, 'Bot');
        })
    }
  }, [messages, addMessage])
  const appStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fafafa'
  }
  return (
    <div style={appStyle}>
      <Banner/>
      <MessageDisplayer messages={messages}/>
      <InputBar sendMessage={(message) => {
        addMessage(message, 'User');
      }}/>
    </div>
  );
}

export default App;
