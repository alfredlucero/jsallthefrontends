import React from "react";
import Layout from "./Layout";
import CodePreviewCard from "./CodePreviewCard";

const HomePage = () => {
  return (
    <Layout>
      <h2 className="mb-2">React Code Examples</h2>
      <p className="mb-6">
        Sometimes you want a quick peek of what it is like to implement
        something in another frontend framework. Let's dive into React code
        examples! You can even open up the React dev tools if you have it
        installed in your browser to view the components.
      </p>
      <CodePreviewCard
        title="Hello World"
        description="The tried and true baby steps into a new world. Greetings from your
        first React component!"
        previewLink="/hello-world"
        otherFrontendsAvailable={["vue", "svelte"]}
      />
    </Layout>
  );
};

export default HomePage;
