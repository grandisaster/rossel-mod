import React from 'react';
import backgroundImage from './images/background.png';

const BackgroundImage = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(5px)', 
    opacity: 0.76, 
  };

  const backgroundColor = 
  { position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#C6E4C1', 
    zIndex: -1}; 


  return (
    <div style={containerStyle}>
        <div style={backgroundColor}> </div> 
      <div style={backgroundImageStyle}></div>
    </div>
  );
};


export default BackgroundImage;