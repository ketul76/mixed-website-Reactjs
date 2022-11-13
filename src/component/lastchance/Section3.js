import React from 'react';
import "./lastChanceStyle.css";

function Section3({section3Data}) {
  return (
    <div>
      <div className="section3">
      <div className="sec-1">
        <h1>{section3Data.title}</h1>
        <h1 className="text">{section3Data.titletext}</h1>
        <p>{section3Data.paragraph1}</p>
        <p>{section3Data.paragraph2}</p>
        <p>{section3Data.paragraph3}</p>
        <button>{section3Data.button}</button>
      </div>
      <div className="sec-2">
     
      </div>
      <div className="sec-3">
        <h1>{section3Data.sec3title}</h1>
        <h1 className="text">{section3Data.sec3titleName}</h1>
        <p>{section3Data.secpara1}</p>
        <p>{section3Data.secpara2}</p>
        <p>{section3Data.secpara3}</p>
        <button>{section3Data.secbutton}</button>
      </div>
    </div>
    </div>
  );
}

export default Section3;