import React from "react";
import { useDataLayerValue } from "./datalayer";
import { auth } from "./Firebase";
import "./Footer.css";

function Footer() {

  return (
    <div className="footer">
      <img className="footericon" alt="" src="Assets/home-solid.svg" />
      <img className="footericon" alt="" src="Assets/search-solid.svg" />
      <img className="footericon" alt="" src="Assets/youtube-brands.svg" />
      <img className="footericon" alt="" src="Assets/heart-regular.svg" />
      <img
        className="footericon profile"
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"
      />
    </div>
  );
}

export default Footer;
