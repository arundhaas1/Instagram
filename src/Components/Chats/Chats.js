import React from "react";
import "./Chats.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import VideocamIcon from "@material-ui/icons/Videocam";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { Link } from "react-router-dom";

function Chats() {
  return (
    <div className="chats">
      <div className="chatsheader">
        <Link to="/">
          <ArrowBackIcon style={{ color: "black" }} fontSize="large" />
        </Link>
        <div className="xtra">
          <p>Arun_dhaas1</p>
          <ExpandMoreIcon />
        </div>
        <VideocamIcon className="vicon" fontSize="large" />
        <SpeakerNotesIcon className="sicon" />
      </div>

      <div className="chats__title">
        <p className="chatp">Chats</p>
        <p className="chatp">Rooms</p>
        <p className="chatsblue">0 Requests</p>
      </div>

      <div className="chats__input">
        <SearchIcon style={{ color: "gray" }} />
        <input type="text" placeholder="Search" />
      </div>

      <div className="chats__data">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"
        />
        <Link to="/chat">
          <div className="chat">
            <p className="chathead">Arun_dhaas1</p>
            <p className="chatgray">Click Here</p>
          </div>
        </Link>
        <CameraAltIcon className="cicon" />
      </div>
    </div>
  );
}

export default Chats;
