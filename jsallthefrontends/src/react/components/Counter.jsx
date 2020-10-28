import React, { useState } from "react";
import Code from "./Code";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickIncrement = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const onClickDecrement = () => {
    setCount((currentCount) => currentCount - 1);
  };

  return (
    <div>
      <div className="text-color-700 font-bold text-6xl text-center mb-4">
        {count}
      </div>

      <div>
        <button
          type="button"
          className="bg-red-200 text-red-600 hover:text-red-800 py-2 px-4 rounded mr-4"
          onClick={onClickDecrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="bg-blue-200 text-blue-600 hover:text-blue-800 py-2 px-4 rounded"
          onClick={onClickIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

const counterCode = `const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickIncrement = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const onClickDecrement = () => {
    setCount((currentCount) => currentCount - 1);
  };

  return (
    <div>
      <div className="text-color-700 font-bold text-6xl text-center mb-4">
        {count}
      </div>

      <div>
        <button
          type="button"
          className="bg-red-200 text-red-600 hover:text-red-800 py-2 px-4 rounded mr-4"
          onClick={onClickDecrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="bg-blue-200 text-blue-600 hover:text-blue-800 py-2 px-4 rounded"
          onClick={onClickIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
`;

export const CounterCode = () => {
  return <Code code={counterCode} language="javascript" />;
};

export default Counter;
