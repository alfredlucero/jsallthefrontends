import React from "react";

interface HelloWorldProps {
  name?: string;
}

export default function HelloWorld({ name = "World" }: HelloWorldProps) {
  return <p>Hello {name}!</p>;
}
