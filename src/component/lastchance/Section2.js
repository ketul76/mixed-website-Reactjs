import React from 'react';
import "./lastChanceStyle.css";

function Section2({section2Data}) {
  return (
    <div>
      <div className="section2">
      <h4 className="start">{section2Data.title}</h4>
      <div className="one">
        <h1>{section2Data.divone1}</h1>
        <h3>{section2Data.divone2}</h3>
        <h3>{section2Data.divone3}</h3>
      </div>
      <div className="two">
        <h1>{section2Data.divtwo1}</h1>
        <h3>{section2Data.divtwo2}</h3>
      </div>
      <div className="three">
        <h1>{section2Data.divthree1}</h1>
        <h3>{section2Data.divthree2}</h3>
        <h3>{section2Data.divthree3}</h3>
      </div>
      <div className="four">
        <h1>{section2Data.divfour1}</h1>
        <h3>{section2Data.divfour2}</h3>
        <h3>{section2Data.divfour3}</h3>
      </div>
    </div>
    </div>
  );
}

export default Section2;