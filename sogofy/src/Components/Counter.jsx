import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>&nbsp;
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>RESET</button>&nbsp;
    </>
  );
};

export default Counter;
