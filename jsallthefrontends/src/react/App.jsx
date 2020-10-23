import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import HelloWorldPage from "./components/HelloWorldPage";
import "./App.css";

const App = () => (
  <div>
    <h1>REACT 16</h1>
    <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
      Docs
    </a>

    <Router basename="/react">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/hello-world">
          <HelloWorldPage />
        </Route>
        <Route path="*">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
