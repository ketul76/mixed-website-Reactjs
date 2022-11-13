import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "../../data";

function Itcompany() {
  return (
    <>
      <Header headerData={data.itcompany.header} />
      <Main menuData={data.itcompany.main}/>
      <Footer footerData={data.itcompany.footer}/>
    </>
  )
}

export default Itcompany;