import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickIncrement = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const onClickDecrement = () => {
    setCount((currentCount) => currentCount - 1);
  };

  const onClickReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div>
        <button onClick={onClickIncrement}>+</button>
        <button onClick={onClickDecrement}>-</button>
        <button onClick={onClickReset}>Reset</button>
      </div>

      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
