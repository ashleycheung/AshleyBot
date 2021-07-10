import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const SendButton = styled.button`
  font-size: 1.5em;
  padding: 0.5em;
  border: none;
  background-color: inherit;
  border-radius: 50%;
  :hover {
    background-color: #EEEEEE;
  }
`
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
  const renderButton = () => {
    if (input.length !== 0) {
      return (
        <SendButton onClick={onClick}>
          <FontAwesomeIcon
              style={{color: '#dc004e'}}
              icon={faPaperPlane}/>
        </SendButton>
      )
    }
  }
  return (
    <div style={InputWrapperStyle}>
      <input 
        placeholder='Aa'
        style={InputStyle} value={input}
        onKeyUp={onKeyPress}
        onChange={(e) => {setInput(e.target.value)}}
      ></input>
      { renderButton() }
    </div>
  )
}

InputBar.propTypes = {
  sendMessage: PropTypes.func
}