import React from "react";
import HelloWorld, { HelloWorldCode } from "./components/HelloWorld";
import "./App.css";

const App = () => (
  <div>
    <h1>Hello from React worldddasd</h1>
    <HelloWorld />
    <HelloWorld name="Alfred" />
    <HelloWorldCode />
  </div>
);

export default App;
