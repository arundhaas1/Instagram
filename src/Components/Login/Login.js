import React from 'react'
import './Login.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';

function Login() {
    return (
        <div className="login">
            <div className="logdata">
            <div className="login__header">
                <p>English(Australia)</p>
                <ExpandMoreIcon className="exicon" />
            </div>

            <div className="login__data">
                <img alt="" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                <input type="text" placeholder="Phone number,email or username"></input> 
                <input type="password" placeholder="Password"></input>
                <button>Log In</button>
                <p>Forget your login details? <span>Get help logging in</span></p>
            </div>

            <div className="login__google">
                <p>OR</p>
                <div className="google__log">
                <FacebookIcon />
                <h5>Login with Facebook</h5>
                </div>
            </div>
            </div>

            <div className="login__footer">
                <p>Don't have an account? <span>Sign In</span></p>
            </div>
        </div>
    )
}

export default Login
