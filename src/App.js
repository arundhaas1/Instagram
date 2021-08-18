import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addposts from './Components/Addposts/Addposts'
import Chats from './Components/Chats/Chats'
import Login from './Components/Login/Login'
import { useEffect } from "react";
import { auth } from "./Components/Firebase";

function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          
          <Route path="/posts">
            <Addposts />
          </Route>

          <Route path="/chats">
            <Chats />
          </Route>

          <Route path="/homes">
            <Home />
          </Route>

          <Route path="/">
            <Login />
          </Route>

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
