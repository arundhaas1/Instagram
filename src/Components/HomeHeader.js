import React from "react";
import "./HomeHeader.css";

function HomeHeader() {
  return (
    <div className="homeheader">
      <div className="homeheaderleft">
          <img alt="" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </div>
      <div className="homeheaderright">
      <img className="icons" alt="" src="Assets/plus-square-regular.svg" />
        <img className="icons"  alt="" src="Assets/facebook-messenger-brands.svg" />
      </div>
    </div>
  );
}

export default HomeHeader;
