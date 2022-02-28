import React from "react";
import Footer from "./Footer";
import UpperFooter from "./UpperFooter";
import "./Footer.css";

function FooterMenu() {
  return (
    <div className="footerMenu">
      <div>
        <UpperFooter className="UpperFooter" />
      </div>
      <div>
        <Footer className="Footer" />
      </div>
    </div>
  );
}

export default FooterMenu;
