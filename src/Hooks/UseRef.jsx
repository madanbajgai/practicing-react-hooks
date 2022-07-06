import { useEffect, useRef, useState } from "react";

//refs are similar to usestate.. refs donot cause re-render when value changed.. bt useState causes

// most common use case is reference html elements... each element can have ref attribute

// another use case is to store previous state value

const Usestate = () => {
  const [name, setname] = useState("");

  //   const [renderCount, setRenderCount] = useState(0);
  //   useEffect(() => {
  //     setRenderCount((p) => p + 1);
  //   });  even with the renderCount dependency it causes infinite rerenders

  //so better way is

  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current += 1;
  });

  // USE CASE:2
  const inputRef = useRef();
  function setFocus() {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    // inputRef.current.value = "some random value" -->this doesnt update state
    inputRef.current.focus();
  }

  //USE CASE: 3
  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div className="container">
      <h1>UseRef Demo</h1>

      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <div>My name is {name}</div>
      <div>Previously it was {prevName.current}</div>
      {/* <div>I rendered {renderCount} times</div> */}
      <div>I rendered {renderCount.current} times</div>

      <button onClick={setFocus}>Focus</button>
    </div>
  );
};

export default Usestate;
