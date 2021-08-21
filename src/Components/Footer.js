import React from "react";
import "./Footer.css";
import { useDataLayerValue } from "./datalayer";
import { Link } from "react-router-dom";

function Footer() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="footer">
      <Link to="/homes">
        <img className="footericon" alt="" src="Assets/home-solid.svg" />
      </Link>
      <Link to="/search">
        <img className="footericon" alt="" src="Assets/search-solid.svg" />
      </Link>
      <img className="footericon" alt="" src="Assets/youtube-brands.svg" />
      <Link to="/activity">
        <img className="footericon" alt="" src="Assets/heart-regular.svg" />
      </Link>
      {!user ? (
        <img
          className="footericon iss"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"
        />
      ) : (
        <Link to="/profile">
          <img className="footericon iss" alt="" src={user?.photoURL} />
        </Link>
      )}
    </div>
  );
}

export default Footer;
