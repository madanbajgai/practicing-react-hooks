import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>UseState Demo</h1>

      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
};

export default Usestate;
