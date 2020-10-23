import React from "react";
import HelloWorld, { HelloWorldCode } from "./HelloWorld";

const HelloWorldPage = () => {
  return (
    <div>
      <HelloWorld />
      <HelloWorld name="Alfred" />
      <HelloWorldCode />
    </div>
  );
};

export default HelloWorldPage;
