import React from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div className="homeheader">
      <div className="homeheaderleft">
        <img
          alt=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
      <div className="homeheaderright">
        <Link to="/posts">
          <img className="icons" alt="" src="Assets/plus-square-regular.svg" />
        </Link>
        <Link to="/chats">
          <img
            className="icons"
            alt=""
            src="Assets/facebook-messenger-brands.svg"
          />
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
