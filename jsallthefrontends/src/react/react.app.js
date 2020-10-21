import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import singleSpaReact from "single-spa-react";

function domElementGetter() {
  return document.getElementById("react");
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
  errorBoundary(err, info, props) {
    return <div>Failed to render React application!</div>;
  },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
