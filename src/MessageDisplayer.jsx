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
        backgroundColor: '#EEEEEE',
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
        height: '60px',
        width: '60px',
        borderRadius: '50%'
      }
      if (msg.author === 'User') {
        msgWrapperStyle.justifyContent = 'flex-end';
        return (
          <div style={msgWrapperStyle} key={id}>
            <div style={msgStyle}>
              {msg.message}  
            </div>
            <img alt='profile' style={imgStyle} src={defaultProfile}/>
          </div>
        )
      }
      return (
        <div style={msgWrapperStyle} key={id}>
          <img alt='profile' style={imgStyle} src={botProfile}/>
          <div style={msgStyle}>
            {msg.message}  
          </div>
        </div>
      )
    })
  }
  const displayWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '75vh'
  }
  const messagesWrapper = {
    overflowY: 'auto',
    padding: '1em',
  }
  return (
    <div style={displayWrapperStyle}>
      <div style={messagesWrapper}>
        {renderMessages()}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

MessageDisplayer.propTypes = {
  messages: PropTypes.array
}