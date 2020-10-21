import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import singleSpaReact from "single-spa-react";

function domElementGetter() {
  return document.getElementById("home");
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  domElementGetter,
  errorBoundary(err, info, props) {
    return <div>Failed to render React Home!</div>;
  },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
