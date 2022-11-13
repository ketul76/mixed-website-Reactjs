import React from 'react';
import "./lastChanceStyle.css";

function Section1({section1Data}) {
  return (
    <div>
      <div className="hero-section1">
      <h6>{section1Data.title}</h6>
      <h1>{section1Data.name}</h1>
      <h1>{section1Data.text1} <span>{section1Data.text2}</span></h1>
      <p>{section1Data.text3}</p>
      <p>{section1Data.text4}</p>
      <p>{section1Data.text5}</p>
      <p>{section1Data.text6}</p>
    </div>
    </div>
  );
}

export default Section1;