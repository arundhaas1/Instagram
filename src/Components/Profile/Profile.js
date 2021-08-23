import React from "react";
import "./Profile.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDataLayerValue } from "../datalayer";
import { useHistory } from "react-router";
import { auth } from "../Firebase";

function Profile() {
  const history = useHistory();

  const [{ user }, dispatch] = useDataLayerValue();

  const toLogs = () => {
    history.push("/homes");
  };

  const addPost=()=>{
    history.push("/posts");
  }

  console.log("usersss is ",user)

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="header__left">
          <p>Arundhaas1</p>
          <ExpandMoreIcon />
        </div>
        <div className="header__right">
          <img onClick={addPost} alt="" src="Assets/plus-square-regular (1).svg" />
          <img alt="" src="Assets/bars-solid.svg" />
        </div>
      </div>

      <div className="profile__data">
        <img alt="" src={user.photoURL} />
        <div className="logout">
          <p className="name">{user.displayName}</p>
          <p className="mail">{user.email}</p>
          <button onClick={toLogs}>Go Home</button>
        </div>
      </div>

      <div className="bal"></div>
    </div>
  );
}

export default Profile;
