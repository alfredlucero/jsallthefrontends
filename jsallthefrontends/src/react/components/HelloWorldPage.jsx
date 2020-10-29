import React from "react";
import Layout from "./Layout";
import CodePreview from "./CodePreview";
import HelloWorld, { HelloWorldCode } from "./HelloWorld";

const HelloWorldPreview = () => {
  return (
    <div className="text-center">
      <HelloWorld />
      <HelloWorld name="Alfred" />
    </div>
  );
};

const HelloWorldPage = () => {
  return (
    <Layout>
      <h2 className="mb-4">Hello World</h2>
      <p className="mb-6">
        The tried and true baby steps into a new world. Greetings from your
        first React component!
      </p>
      <CodePreview preview={<HelloWorldPreview />} code={<HelloWorldCode />} />
    </Layout>
  );
};

export default HelloWorldPage;
