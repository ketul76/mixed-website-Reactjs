import React from 'react';

function Main({setWebsite}){
  return (
    <div>
      <button onClick={() => setWebsite("itcompany")} style={{color:"red"}}>Itcompany</button>
      <button onClick={() => setWebsite("tshirtdesign")} style={{color:"red"}}>TshirtDesign</button>
      <button onClick={() => setWebsite("lastchance")} style={{color:"red"}}>LastChance</button>
    </div>
  )
}
export default Main;