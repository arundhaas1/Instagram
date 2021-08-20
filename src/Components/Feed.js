import React, { useState, useEffect } from "react";
import "./Feed.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import db from "./Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("InstagramPosts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
    console.log("posts is", posts);
  }, []);

  return (
    <div>
       {posts.map((post)=>{
         return(<div className="feed">
         <div className="feedheader">
           <img alt="" src={post.message.image} />
           <p>{post.message.username}</p>
           <MoreVertIcon className="verticon" />
         </div>
         <div className="feedpost">
           <img
             alt=""
             src={post.message.post}
           />
         </div>
         <div className="feedfooter">
           <img className="feedicon" alt="" src="Assets/heart-regular.svg" />
           <img
             className="feedicon"
             alt=""
             src="Assets/comment-regular.svg"
           />
           <img
             className="feedicon"
             alt=""
             src="Assets/paper-plane-regular.svg"
           />
         </div>
         <div className="likes">
           <p>10,235 likes</p>
           <div className="comment">
             <h5>{post.message.username}</h5>
             <p>{post.message.caption}</p>
           </div>
         </div>

         <div className="time">
           <p>15 mins ago</p>
         </div>
       </div>)
       })}
    </div>
  );
}

export default Feed;
