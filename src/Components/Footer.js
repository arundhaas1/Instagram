import React from "react";
import "./Footer.css";
import { useDataLayerValue } from "./datalayer";


function Footer() {

  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="footer">
      <img className="footericon" alt="" src="Assets/home-solid.svg" />
      <img className="footericon" alt="" src="Assets/search-solid.svg" />
      <img className="footericon" alt="" src="Assets/youtube-brands.svg" />
      <img className="footericon" alt="" src="Assets/heart-regular.svg" />
      {!user ? (
          <img className="footericon profile" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU" />
        ) : (
          <img className="footericon profile" alt="" src={user?.photoURL} />
        )}
    </div>
  );
}

export default Footer;
