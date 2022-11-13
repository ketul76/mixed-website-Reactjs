import React from 'react';
import "./lastChanceStyle.css";

function Header({ headerData }) {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="logo.png" />
          <h2>{headerData.logoname}</h2>
        </div>
        <div className="menu">
          <ul>
            {headerData.menu.map((item) => (
              <li>{item}</li>
          ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;