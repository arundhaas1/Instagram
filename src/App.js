import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addposts from './Components/Addposts/Addposts'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          
          <Route path="/posts">
            <Addposts />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
