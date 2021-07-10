import React from 'react';
import botProfile from './assets/botProfile.jpg';

export default function Banner () {
  const wrapperStyle = {
    flex: 1,
    backgroundColor: '#dc004e',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const nameStyle = {
    fontSize: '2em',
    marginLeft: '1em',
    color: '#fafafa'
  }
  const imgStyle = {
    height: '75px',
    width: '75px',
    borderRadius: '50%',
  }
  return (
    <div style={wrapperStyle}>
       <img alt='profile' style={imgStyle} src={botProfile}/>
       <div style={nameStyle}>Ashley Bot</div>
    </div>
  )
}