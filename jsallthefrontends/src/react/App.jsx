import React from "react";
import HelloWorld, { HelloWorldCode } from "./components/HelloWorld";
import "./App.css";

const App = () => (
  <h1>
    Hello from React
    <HelloWorld />
    <HelloWorld name="Alfred" />
    <HelloWorldCode />
  </h1>
);

export default App;
