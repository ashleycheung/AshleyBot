import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import defaultProfile from './assets/default.jpg';
import botProfile from './assets/botProfile.jpg';

export default function MessageDisplayer (props) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(scrollToBottom, [props.messages]);
  const renderMessages = () => {
    return props.messages.map((msg, id) => {
      // Styles for messages
      const msgStyle = {
        backgroundColor: 'white',
        margin: '1em',
        padding: '1em',
        borderRadius: '1em',
        fontSize: '1.2em'
      }
      const msgWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }
      const imgStyle = {
        height: '75px',
        width: '75px',
        borderRadius: '50%'
      }
      if (msg.author === 'User') {
        msgWrapperStyle.justifyContent = 'flex-end';
        return (
          <div style={msgWrapperStyle} key={id}>
            <div style={msgStyle}>
              {msg.message}  
            </div>
            <img style={imgStyle} src={defaultProfile}/>
          </div>
        )
      }
      return (
        <div style={msgWrapperStyle} key={id}>
          <img style={imgStyle} src={botProfile}/>
          <div style={msgStyle}>
            {msg.message}  
          </div>
        </div>
      )
    })
  }
  const displayWrapperStyle = {
    backgroundColor: 'grey',
    padding: '1em',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
  return (
    <div style={displayWrapperStyle}>
      {renderMessages()}
      <div ref={messagesEndRef} />
    </div>
  )
}

MessageDisplayer.propTypes = {
  messages: PropTypes.array
}