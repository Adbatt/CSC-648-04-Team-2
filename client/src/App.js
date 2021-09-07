import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
