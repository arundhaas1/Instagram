import React, { useState, useEffect } from "react";
import "./Feed.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import db from "./Firebase";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  const[num,setNum]=useState(0)

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

  const changeHeart = () => {
    setLike(!like);
    setNum(num-1)
  };

  const changeRedHeart = () => {
    setLike(!like);
    setNum(num+1)
  };

  

  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="feed">
            <div className="feedheader">
              <img alt="" src={post.message.image} />
              <p>{post.message.username}</p>
              <MoreVertIcon className="verticon" />
            </div>
            <div className="feedpost">
              <img alt="" src={post.message.post} />
            </div>
            <div className="feedfooter">
              {like ? (
                <img
                  onClick={changeHeart}
                  className="feedicon"
                  style={{ cursor: "pointer" }}
                  alt=""
                  src="Assets/red-heart.svg"
                />
              ) : (
                <img
                  style={{ cursor: "pointer" }}
                  onClick={changeRedHeart}
                  className="feedicon"
                  alt=""
                  src="Assets/heart-regular.svg"
                />
              )}
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
              <p>{`${num} likes`}</p>
              <div className="comment">
                <h5>{post.message.username}</h5>
                <p>{post.message.caption}</p>
              </div>
            </div>

            <div className="time">
              <p>a while ago</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
