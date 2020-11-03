import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import HelloWorldPage from "./components/HelloWorldPage";
import CounterPage from "./components/CounterPage";
import TodoListPage from "./components/TodoListPage";
import TabsPage from "./components/TabsPage";
import "./App.css";

const App = () => (
  <div className="mt-16">
    <Router basename="/react">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/hello-world">
          <HelloWorldPage />
        </Route>
        <Route exact path="/counter">
          <CounterPage />
        </Route>
        <Route exact path="/todo-list">
          <TodoListPage />
        </Route>
        <Route exact path="/tabs">
          <TabsPage />
        </Route>
        <Route path="*">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
