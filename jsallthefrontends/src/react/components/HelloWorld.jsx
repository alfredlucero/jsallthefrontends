import React from "react";
import Code from "./Code";

const HelloWorld = (props) => {
  const name = props.name || "World";

  return <div>Hello {name}!</div>;
};

const helloWorldCode = `const HelloWorld = (props) => {
  const name = props.name || "World";

  return <div>Hello {name}!</div>;
};
`;

export const HelloWorldCode = () => {
  return <Code code={helloWorldCode} language="javascript" />;
};

export default HelloWorld;
