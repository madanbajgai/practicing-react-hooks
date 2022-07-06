import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </>
  );
};

export default Usestate;
