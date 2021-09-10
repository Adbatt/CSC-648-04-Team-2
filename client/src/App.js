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

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/islom">Islombek Abdulakhatov - SCRUM Master</Link>
            </li>
            <li>
              <Link to="/kyle">Kyle Gilbert - Backend Lead</Link>
            </li>
            <li>
              <Link to="/jib">Jibraeel Abdelwahhab - Team Member</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/jib">
            <AboutJib />
          </Route>
          <Route path="/islom">
            <AboutIslom />
          </Route>
          <Route path="/kyle">
            <AboutKyle />
          </Route>  
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


