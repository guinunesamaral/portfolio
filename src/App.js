import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Projects } from "./screens/Projects";
import { Contact } from "./screens/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App__container">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
