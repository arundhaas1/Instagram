import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addposts from "./Components/Addposts/Addposts";
import Chats from "./Components/Chats/Chats";
import Login from "./Components/Login/Login";
import Chat from "./Components/Chats/Chat";
import Search from "./Components/Search/Search";
import Activity from "./Components/Activity/Activity";
import ScrollToTop from "./Components/ScrollToTop";
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer'
import Reels from "./Components/Reels/Reels";

function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
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

          <Route path="/search">
            <Search />
            <Footer />
          </Route>

          <Route path="/profile">
            <Profile />
            <Footer />
          </Route>

          <Route path="/reels">
            <Reels />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>

          <Route path="/activity">
            <Activity />
            <Footer />
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
