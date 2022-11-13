import React from "react";
import './it-company-style.css';
function Header({headerData}){
  return(
    <>
      <header>
        <div className="logo">
          <p>{headerData.logoname}</p>
        </div>
        <nav>
          <ul>
          {headerData.menu.map((item) => (
            <li>
              <a href={item.link}>{item.name}</a>
            </li>
            ))}
          </ul>
        </nav>
      </header> 
    </>
  )
}

export default Header;