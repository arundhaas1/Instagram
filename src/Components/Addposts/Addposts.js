import React,{useEffect, useState} from "react";
import "./Addposts.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import db from "../Firebase.js";
import { useDataLayerValue } from "../datalayer";

function Addposts() {

  const[input,setInput]=useState=("")
  const[posts,setPosts]=useState("")
  const [{ user }, dispatch] = useDataLayerValue();

  // useEffect(() => {
  //   db.collection("InstagramPosts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       setPosts(
  //         snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
  //       );
  //     });
  // }, []);

  const postIt = (e) => {
    e.preventDefault();
    db.collection("InstagramPosts").add({
      // message: input,
      username: user.displayName,
    });
  };
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
        <input onChange={e=>setInput(e.target.value)} type="text" placeholder="Write a caption.."></input>
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
