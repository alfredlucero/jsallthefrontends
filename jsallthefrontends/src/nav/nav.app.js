import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import singleSpaReact from "single-spa-react";

function domElementGetter() {
  return document.getElementById("nav");
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Nav,
  domElementGetter,
  errorBoundary(err, info, props) {
    return <div>Failed to render React Nav!</div>;
  },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
