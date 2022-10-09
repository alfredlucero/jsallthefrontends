import { mergeProps } from "solid-js";

interface HelloWorldProps {
  name?: string;
}

export default function HelloWorld(props: HelloWorldProps) {
  const mergedProps = mergeProps({ name: "World" }, props);
  return <p>Hello {mergedProps.name}!</p>;
}
