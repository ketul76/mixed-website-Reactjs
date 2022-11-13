import React from 'react';
import './t-shirt-style.css';

function Section1({section1Data}) {
  return (
    <div className="section1">
    <h3>{section1Data.name}</h3>
    <h1>{section1Data.name2}</h1>
    <button>{section1Data.button}</button>
    <a href="#">{section1Data.link}</a>
    <p>{section1Data.info}</p>
  </div>
  );
}

export default Section1;