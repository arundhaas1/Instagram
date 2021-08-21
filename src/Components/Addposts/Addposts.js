import React, { useState } from "react";
import "./Addposts.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../datalayer";
import firebase from "firebase";
import { useHistory } from "react-router";
import db from "../Firebase";

function Addposts() {

  const history=useHistory()

  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useDataLayerValue();
  const [attachment, setAttachment] = useState("");

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onFileChange = async () => {
    var fileInput = document.querySelector("#input");
    if (fileInput) {
      var file = fileInput.files[0];
      const base64String = await toBase64(file);
      setAttachment(base64String);
    }
  };

  // console.log("attachment is", attachment);

  const moveIt=()=>{
  }


  const postIt = (e) => {
    e.preventDefault();
    db.collection("InstagramPosts").add({
      post: attachment,
      caption: input,
      username: user.displayName,
      image: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    history.push("/homes")
    setInput("");
  };
  return (
    <div className="addposts">
      <div className="addpostsheader">
        <Link to="/">
          <ArrowBackIcon style={{ color: "black" }} fontSize="large" />
        </Link>
        <h2>New Post</h2>
        <div  className="hede">
          <CheckIcon onClick={postIt} className="checkicon" fontSize="large" />
        </div>
      </div>

      <div className="addpostsdata">
        <img
          alt=""
          src={user.photoURL}
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Write a caption.."
        ></input>
        <label className="addimage">
          <i className=" ">{attachment ? "Image Added" :"Add images+"}</i>
          <input
            onChange={onFileChange}
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
