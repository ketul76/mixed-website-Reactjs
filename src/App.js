import React,{useState} from "react";
import Itcompany from "./component/itcompany/Itcompany";
import LastChance from "./component/lastchance/LastChance";
import TshirtDesign from "./component/tshirt/TshirtDesign";
import Main from "./Main";

function App() {
  const [website,setWebsite] = useState("")
  return (
    <>
      {website === "" &&  <Main setWebsite={setWebsite}/>}
      {website === "itcompany" && <Itcompany/>}
      {website === "tshirtdesign" && <TshirtDesign/>}
      {website === "lastchance" && <LastChance/>}
    </>
  )

}

export default App;
