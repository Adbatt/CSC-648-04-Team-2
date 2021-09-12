import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import AboutIslom from './components/AboutIslom';
import AboutKyle from "./components/AboutKyle";
import AboutJib from "./components/AboutJib";
import AboutAlvin from "./components/AboutAlvin";
import AboutFaisal from "./components/AboutFaisal";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Switch>
          <Route path="/faisal"> 
            <AboutFaisal />
          </Route>
          <Route path="/jib">
            <AboutJib />
          </Route>
          <Route path="/islom">
            <AboutIslom />
          </Route>
          <Route path="/kyle">
            <AboutKyle />
          </Route>
          <Route path="/alvin">
            <AboutAlvin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


