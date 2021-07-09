import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function InputBar (props) {
  const InputWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  }
  const InputStyle = {
    fontSize: '1.2em',
    width: '100%',
    padding: '1em'
  }
  const ButtonStyle = {
    fontSize: '1.5em',
    padding: '1em'
  }
  const [input, setInput] = useState('')
  return (
    <div style={InputWrapperStyle}>
      <input style={InputStyle} value={input}
        onChange={(e) => {setInput(e.target.value)}}
      ></input>
      <button
        style={ButtonStyle}
        onClick={() => {
          props.sendMessage(input);
          setInput('');
        }}
      >Send</button>
    </div>
  )
}

InputBar.propTypes = {
  sendMessage: PropTypes.func
}