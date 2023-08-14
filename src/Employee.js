
import './App.css';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import avatar from './images/avatar.png'


const Employee = () => { 
    return (
    <div className="app">
    <BackgroundImage />
    <div className="rectangle-container">
    <div className="rounded-rectangle">
      <div className="avatar-container">
        <img
          src={avatar}
          alt="Avatar"
          className="avatar"
        />
      </div>
     
      <div className='nameContainer' >
      Константин <br/> 
      Константинопольский 
    </div>
    <div className='posContainer'>
      руководитель компании
    </div>
    <div className='infoContainer'> 
    ООО “ЯСНО ВИДНО” <br/>
    +7 (123) 412-37-15
    </div>
    </div></div></div>
    );
}

export default Employee;