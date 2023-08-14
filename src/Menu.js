import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <div className='menuContainer'>
      <div className='parametersBlock'>
        <div className='menuItem'>
          <img src={`icons/personal.png`} className='menuIcon' />
          <p className='menuText'>Личные данные</p>
        </div>
        <div className='menuItem'>
          {/* <img src={`icons/applications.png`} className='menuIcon' /> */}
          <p className='menuText'>Заявки</p>
        </div>
        <div className='menuItem'>
          <img src={`icons/useful.png`} className='menuIcon' />
          <p className='menuText'>Полезные материалы</p>
        </div>
        <div className='menuCategory'>
          <div className='menuTitle'>Компания</div>
          <div className='menuItem'>
            <img src={`icons/company.png`} className='menuIcon' />
            <p className='menuText'>О компании</p>
          </div>
          <div className='menuItem'>
            {/* <img src={`icons/.png`} className='menuIcon' /> */}
            <p className='menuText'>Сотрудники</p>
          </div>
          <div className='menuItem'>
            <img src={`icons/office.png`} className='menuIcon' />
            <p className='menuText'>Офисы</p>
          </div>
        </div>
        <div className='menuCategory'>
          <div className='menuTitle'>Ипотека</div>
          <p className='menuGrayText'>Заблокированные разделы</p>
          <div className='menuItem'>
            <p className='menuTextRight'>Работа с ипотекой</p>
            {/* <img src={`icons/.png`} className='menuIconRight' /> */}
          </div>
        </div>
        <div className='menuCategory'>
          <div className='menuTitle'>Услуги, проекты и объекты</div>
          <p className='menuGrayText'>Заблокированные разделы</p>
          <p className='menuText'>Работа с проектами</p>
          <div className='menuItem'>
            <p className='menuTextRight'>Работа с услугами</p>
            {/* <img src={`icons/`} className='menuIconRight' /> */}
          </div>
        </div>
      </div>
    </div>
  );
};






export default Menu;
