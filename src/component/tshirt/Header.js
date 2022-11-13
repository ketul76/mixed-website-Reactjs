import React from 'react';
import './t-shirt-style.css';

function Header({headerData}) {
  return (
    <header>
    <nav>
      <div className="logoname">{headerData.logoname}</div>
      <div className="menu">
        <ul>
          <li>{headerData.menu1}</li>
          <li>{headerData.menu2}</li>
          <li>{headerData.menu3}</li>
          <img src="/icon-images/fb.png" alt=""/>
          <img src="/icon-images/tw.png" alt=""/>
          <img src="/icon-images/ig.png" alt=""/>
          <button>{headerData.button}</button>
        </ul>
      </div>
    </nav>
  </header>
  );
}

export default Header;