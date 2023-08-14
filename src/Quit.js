
import './App.css';
import React from 'react';

const Quit = () => { 
    return (
        <div className='quitContainer'> 
        <div className='menuItem'>
            <img src={`icons/support.png`} className='menuIcon' />
            <p className='menuText'>Связаться с нами</p>
          </div> <br/> <br/>
          <div className='menuItem'>
            <img src={`icons/quit.png`} className='menuIcon' />
            <p className='menuText'>Выйти</p>
          </div>
        </div>
    )

}
export default Quit;