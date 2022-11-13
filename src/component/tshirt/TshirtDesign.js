import React from 'react';
import data from '../../data';
import Header from './Header';
import Section1 from './Section1';

function TshirtDesign() {
  return (
    <div>
      <Header headerData={data.tshirtdesign.header}/>
      <Section1 section1Data={data.tshirtdesign.section1}/>
    </div>
  );
}

export default TshirtDesign;