import React from "react";
import Layout from "./Layout";
import CodePreviewCard from "./CodePreviewCard";

const codePreviews = [
  {
    title: "Hello World",
    description:
      "The tried and true baby steps into a new world - your first React component!",
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
  {
    title: "Todo List",
    description:
      "Render and manage a list of anything by looking at your favorite todo list example.",
    previewLink: "/todo-list",
    otherFrontendsAvailable: ["vue", "svelte"],
  },
];

const HomePage = () => {
  return (
    <Layout>
      <h2 className="my-4">React Code Examples</h2>
      <p className="mb-6">
        Sometimes you want a quick peek of what it is like to implement
        something in another frontend framework. Let's dive into React 16+ code
        examples! Oh yeah, everything under /react in the main content area is
        built with React 16+ by the way (also the navbar and root home page if
        you noticed). You can even{" "}
        <a
          href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
          target="_blank"
          class="text-blue-500 hover:text-blue-700"
        >
          download
        </a>{" "}
        and open up the React dev tools if you have it installed in your browser
        to view the components.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3">
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
