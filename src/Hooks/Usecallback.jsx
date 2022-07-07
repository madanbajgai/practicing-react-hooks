import { useState, useCallback } from "react";
import List from "../List";

const Usecallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // since this function is call everytime eventhough we click button or change the value
  //because everytime we click  this function is calculated and passed to list component and causes re-render
  //   const getItems = () => {
  //     return [number, number + 1, number + 2];
  //   };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  //this function will check if the number has been changed if not it doesnt cause re-render
  //it doesnt run if the dark variable is changed
  //useMemo and useCallback are useful with referential equality

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div className="container">
      <h1>UseCallback Demo</h1>

      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((p) => !p)}>Toggle Theme</button>
        <List getItems={getItems} />
      </div>
    </div>
  );
};

export default Usecallback;
