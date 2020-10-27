import React from "react";
import Layout from "./Layout";
import CodePreview from "./CodePreview";
import Counter, { CounterCode } from "./Counter";

const CounterPreview = () => {
  return (
    <>
      <Counter />
    </>
  );
};

const CounterPage = () => {
  return (
    <Layout>
      <h2 className="mb-4">Counter</h2>
      <p className="mb-6">
        Learning how to count is like learning how to say your ABCs -
        quintessential. Check out the basics of state management and event
        handling with a counter.
      </p>
      <CodePreview preview={<CounterPreview />} code={<CounterCode />} />
    </Layout>
  );
};

export default CounterPage;
