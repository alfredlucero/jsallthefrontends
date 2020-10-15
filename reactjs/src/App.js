import React from "react";
import logo from "./logo.svg";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import ControlledInputs from "./components/ControlledInputs";
import Children from "./components/Children";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h2>Hello World</h2>
      <HelloWorld name="Alfred" />
      <h2>Counter</h2>
      <Counter />
      <h2>Conditional Rendering</h2>
      <ConditionalRendering />
      <h2>List Rendering</h2>
      <ListRendering />
      <h2>Controlled Inputs</h2>
      <ControlledInputs />
      <h2>Children Composition</h2>
      <Children>
        <p>
          <strong>Some cool stuff inside here</strong> - What do you think?
        </p>
      </Children>
    </div>
  );
}

export default App;
