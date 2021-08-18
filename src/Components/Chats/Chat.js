import React, { useState,useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import { CardContent, Card, Typography } from "@material-ui/core";
import "./Chat.css";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import SendIcon from "@material-ui/icons/Send";
import { useDataLayerValue } from "../datalayer";
import firebase from "firebase";
import db from "../Firebase.js";

function Chat() {
  const [{ user }, dispatch] = useDataLayerValue();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect (()=>{
    db.collection('Instagram').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        setMessages(snapshot.docs.map(doc=>({id :doc.id ,message :doc.data()})))
    })
},[])

  const sendIt = (e) => {
    // e.preventDefault();
    db.collection("Instagram").add({
      message: input,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      sendIt();
    }
  };

  console.log("i am",input)

  return (
    <div className="chat">
      <div className="chatheader">
        <Link to="/chats">
          <ArrowBackIcon style={{ color: "black" }} fontSize="large" />
        </Link>
        <div className="extra">
          {!user ? (
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"
            />
          ) : (
            <img alt="" src={user?.photoURL} />
          )}
          <p>Arun_dhaas1</p>
        </div>

        <div className="pvicon">
          <PhoneIcon fontSize="large" className="picon" />
          <VideocamIcon fontSize="large" className="vicon" />
        </div>
      </div>

      <div className="messages">
        <div>
          {messages.map((text) => {
            console.log("text is", text);
            const isUser = text.message.username === user?.displayName;
            return (
              // console.log('name2 is' ,text.message.username ),
              <div className="message">
                {text ? (
                  <Card className={!isUser ? "text" : "guest"}>
                    <CardContent>
                      <Typography>
                        <p className="text__mess1">{text.message?.username}</p>
                        <p className="text__mess2">{text.message.message}</p>
                      </Typography>
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="chat__footer">
        <div className="ds">
          <CameraAltIcon fontSize="large" className="cameraicon" />
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onEnter}
            value={input}
            type="text"
            placeholder="Message..."
          ></input>
          <div className="chat__end">
            <SendIcon onClick={sendIt} fontSize="large" className="sendicon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
