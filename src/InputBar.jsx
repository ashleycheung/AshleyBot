import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function InputBar (props) {
  const InputWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em'
  }
  const InputStyle = {
    fontSize: '1.2em',
    width: '100%',
    padding: '0.5em',
  }
  const ButtonStyle = {
    fontSize: '1.5em',
    padding: '0.5em'
  }
  const [input, setInput] = useState('');
  const onClick = () => {
    props.sendMessage(input);
    setInput('');
  }
  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onClick();
    }
  }
  return (
    <div style={InputWrapperStyle}>
      <input style={InputStyle} value={input}
        onKeyUp={onKeyPress}
        onChange={(e) => {setInput(e.target.value)}}
      ></input>
      <button
        style={ButtonStyle}
        onClick={onClick}
      >Send</button>
    </div>
  )
}

InputBar.propTypes = {
  sendMessage: PropTypes.func
}