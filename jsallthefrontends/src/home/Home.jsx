import React from "react";
import Layout from "./components/Layout";
import FrontendCard from "./components/FrontendCard";
import CodeExampleCard from "./components/CodeExampleCard";
import "./Home.css";

const frontendsMap = {
  react: {
    link: "/react",
    name: "React",
  },
  vue: {
    link: "/vue",
    name: "Vue",
  },
  svelte: {
    // Svelte app uses a hash router instead
    link: "/svelte#",
    name: "Svelte",
  },
  // TODO: add more frontends i.e. WebComponents, Riot, etc.
};
const frontends = [frontendsMap.react, frontendsMap.vue, frontendsMap.svelte];

const codeExamples = [
  {
    title: "Hello World",
    description:
      "The tried and true baby steps into a new world - your first component.",
    exampleLinkPath: "/hello-world",
    frontendExamples: [
      frontendsMap.react,
      frontendsMap.vue,
      frontendsMap.svelte,
    ],
  },
  {
    title: "Counter",
    description:
      "Learn the basics of state management and event handling with a counter.",
    exampleLinkPath: "/counter",
    frontendExamples: [
      frontendsMap.react,
      frontendsMap.vue,
      frontendsMap.svelte,
    ],
  },
  {
    title: "Todo List",
    description:
      "Render and manage a list of anything by looking at your favorite todo list example.",
    exampleLinkPath: "/todo-list",
    frontendExamples: [
      frontendsMap.react,
      frontendsMap.vue,
      frontendsMap.svelte,
    ],
  },
  {
    title: "Tabs",
    description:
      "Showing one piece of content at a time - learn composition and state with tabs.",
    exampleLinkPath: "/tabs",
    frontendExamples: [
      frontendsMap.react,
      frontendsMap.vue,
      frontendsMap.svelte,
    ],
  },
];

const Home = () => {
  return (
    <div className="mt-16">
      <Layout>
        <h2 className="my-4">
          <i className="fab fa-js-square"></i> All The Frontends
        </h2>
        <p className="mb-4">
          There are so many ways to implement the same thing across different
          JavaScript libraries and frameworks that it can be a lot to take in.
          Here is our attempt to gather core examples in each one so you can
          quickly view the differences for yourself.
        </p>

        <h3 className="mb-4">
          Check out the JavaScript frontends aka "just all the frontends"
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {frontends.map((frontend, key) => (
            <div className="my-2 md:mx-2">
              <FrontendCard frontend={frontend} key={key} />
            </div>
          ))}
        </div>

        <h3 className="my-4">Check out the core examples instead</h3>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {codeExamples.map((codeExample, key) => (
            <div className="my-2 md:mx-2">
              <CodeExampleCard codeExample={codeExample} key={key} />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
