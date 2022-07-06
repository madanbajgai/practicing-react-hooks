import { useMemo, useState } from "react";
// Memoization is essentially just caching so we dont have to compute on every render.

const Usestate = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //   const doubleNumber = slowFunction(number); this is done normally

  // below is done using useMemo

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); //if the number changes the function runs

  //only use when we need performance .

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  function slowFunction(num) {
    console.log("calling slow function");
    for (let i = 0; i < 1000000000000; i++) {
      return num * 2;
    }
  }

  return (
    <div className="container">
      <h1>UseMemo Demo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>

      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

export default Usestate;
