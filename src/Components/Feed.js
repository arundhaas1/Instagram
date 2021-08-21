import React, { useState, useEffect } from "react";
import "./Feed.css";
import db from "./Firebase";
import Post from "./Post";

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
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        return <Post post={post} index={index} />;
      })}
    </div>
  );
}

export default Feed;
