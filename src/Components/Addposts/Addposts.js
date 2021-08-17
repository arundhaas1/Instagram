import React from "react";
import "./Addposts.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";

function Addposts() {
  return (
    <div className="addposts">
      <div className="addpostsheader">
        <Link to="/">
            <ArrowBackIcon style={{color:"black"}} fontSize="large" />
        </Link>
        <h2>New Post</h2>
        <CheckIcon className="checkicon" fontSize="large" />
      </div>

      <div className="addpostsdata">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"
        />
        <input type="text" placeholder="Write a caption.."></input>
        <label className="addimage">
          <i className=" ">Add images +</i>
          <input
            id="input"
            style={{ display: "none" }}
            type="file"
            accept=".jpg,.jpeg,.png"
          />
        </label>
      </div>

      <p className="tag">Tag People</p>

      <p className="tag">Add Location</p>

    </div>
  );
}

export default Addposts;
