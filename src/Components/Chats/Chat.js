import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import "./Chat.css";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SendIcon from '@material-ui/icons/Send';

function Chat() {
  return (
    <div className="chat">
      <div className="chatheader">
        <Link to="/chats">
          <ArrowBackIcon style={{ color: "black" }} fontSize="large" />
        </Link>
        <div className="extra">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"
          />
          <p>Arun_dhaas1</p>
        </div>

        <div className="pvicon">
          <PhoneIcon fontSize="large" className="picon" />
          <VideocamIcon fontSize="large" className="vicon" />
        </div>
      </div>

      {/* chatings */}


      <div className="chat__footer">
       <div className="ds">
       <CameraAltIcon fontSize="large" className="cameraicon" />
        <input type="text" placeholder="Message..."></input>
        <div className="chat__end">
            <SendIcon fontSize="large"  className="sendicon" />
        </div>
       </div>
      </div>
    </div>
  );
}

export default Chat;
