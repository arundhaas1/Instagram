import React, { useState } from "react";
import "./Reels.css";
import Footer from "../Footer";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Reels() {
  const [like, setLike] = useState(false);

  const changeHeart = () => {
    setLike(!like);
  };

  const changeRedHeart = () => {
    setLike(!like);
  };

  return (
    <div className="reels">
      <div className="reels__data">
        <div className="reels__header">
          <p>Reels</p>
          <CameraAltIcon />
        </div>
        <div className="reels__footer">
          <div className="reels__profile">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhO9a_BfEPT5RNEunoAkxFFKZbnMWopS52g&usqp=CAU"
            />
            <div className="profile__names">
              <p className="p1">
                Arun_dhaas1 <span>Follow </span>
              </p>
              <p className="p2">Developed by Arun_dhaas1</p>
            </div>
          </div>
          <div className="profile__caption">
            <p>Digital design is like painting, except the paint never dries ...</p>
          </div>

          <div className="profile__foot">
            {like ? (
              <img
                onClick={() => changeHeart()}
                className="reelicon"
                style={{ cursor: "pointer" }}
                alt=""
                src="Assets/red-heart.svg"
              />
            ) : (
              <FavoriteBorderIcon
                style={{ cursor: "pointer" }}
                onClick={() => changeRedHeart()}
                className="reelicon"
              />
            )}
            <ChatBubbleOutlineIcon
              className="reelicon"
              style={{ cursor: "pointer" }}
            />
            <ShareIcon className="reelicon" style={{ cursor: "pointer" }} />
            <MoreHorizIcon className="reelicon" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <Footer className="bottom" />
    </div>
  );
}

export default Reels;
