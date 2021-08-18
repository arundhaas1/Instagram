import React from "react";
import "./Login.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useDataLayerValue } from "../datalayer";
import { auth, provider } from "../Firebase";
import Home from '../Home'

function Login() {
  const [{ user }, dispatch] = useDataLayerValue();

  const agreeIt = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: "SET_USER",
          user: result.user,
        })
      )
      .catch((e) => alert(e.message));
  };

  console.log("user is", user);
  return (
    <div>
      {user ? (
        <Home />
      ) : (
        <div className="login">
          <div className="logdata">
            <div className="login__header">
              <p>English(Australia)</p>
              <ExpandMoreIcon className="exicon" />
            </div>

            <div className="login__data">
              <img
                alt=""
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              />
              <input
                type="text"
                placeholder="Phone number,email or username"
              ></input>
              <input type="password" placeholder="Password"></input>
              <button onClick={agreeIt}>Log In</button>
              <p>
                Forget your login details?{" "}
                <span onClick={agreeIt}>Get help logging in</span>
              </p>
            </div>

            <div className="login__google">
              <p>OR</p>
              <div onClick={agreeIt} className="google__log">
                <GitHubIcon className="giticon" />
                <h5>Login with Google</h5>
              </div>
            </div>
          </div>

          <div className="login__footer">
            <p>
              Don't have an account? <span onClick={agreeIt}>Sign In</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
