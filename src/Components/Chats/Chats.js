import React from "react";
import "./Chats.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import VideocamIcon from "@material-ui/icons/Videocam";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../datalayer";

function Chats() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="chats">
      <div className="chatsheader">
        <Link to="/">
          <ArrowBackIcon style={{ color: "black" }} fontSize="large" />
        </Link>
        <div className="xtra">
          {!user ? <p>Arun_dhaas1</p> : <p>{user.displayName}</p>}
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
      <Link to="/chat">
        <div className="chats__data">
          {!user ? (
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"
            />
          ) : (
            <img alt="" src={user?.photoURL} />
          )}
          <div className="chat">
            <p className="chathead">Arun_dhaas1</p>
            <p className="chatgray">Click Here</p>
          </div>
          <CameraAltIcon style={{color:"black"}} className="cicon" />
        </div>
      </Link>
    </div>
  );
}

export default Chats;
