import React from "react";
import Layout from "./Layout";
import CodePreviewCard from "./CodePreviewCard";

const codePreviews = [
  {
    title: "Hello World",
    description:
      "The tried and true baby steps into a new world. Greetings from your first React component!",
    previewLink: "/hello-world",
    otherFrontendsAvailable: ["vue", "svelte"],
  },
  {
    title: "Counter",
    description:
      "Learn the basics of state management and event handling with a counter.",
    previewLink: "/counter",
    otherFrontendsAvailable: ["vue", "svelte"],
  },
];

const HomePage = () => {
  return (
    <Layout>
      <h2 className="my-4">React Code Examples</h2>
      <p className="mb-6">
        Sometimes you want a quick peek of what it is like to implement
        something in another frontend framework. Let's dive into React 16 code
        examples! You can even open up the React dev tools if you have it
        installed in your browser to view the components.
      </p>
      <div className="flex justify-start flex-col md:flex-row">
        {codePreviews.map((codePreview, key) => (
          <div className="my-2 md:mx-2">
            <CodePreviewCard {...codePreview} key={key} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
