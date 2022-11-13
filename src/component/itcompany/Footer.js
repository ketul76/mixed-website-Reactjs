import React from "react";
import './it-company-style.css'
function Footer({footerData}){
  return (
    <footer className="footer">
      <h1> &copy; {footerData.footertext}</h1>
    </footer>
  )
}

export default Footer;