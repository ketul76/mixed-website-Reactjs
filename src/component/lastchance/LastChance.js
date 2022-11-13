import React from 'react';
import data from '../../data';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';


function LastChance() {
  return (
    <>
      <Header headerData={data.lastchance.header}/>
      <Section1 section1Data={data.lastchance.herosection1}/>
      <Section2 section2Data={data.lastchance.section2}/>
      <Section3 section3Data={data.lastchance.section3}/>
    </>
  );
}

export default LastChance;