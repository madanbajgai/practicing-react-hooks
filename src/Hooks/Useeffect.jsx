import { useEffect, useState } from "react";

const Useeffect = () => {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log("resource changed");

    //   clean up function that runs on unmount and cleans up what we did last time
    return () => {
      console.log("from return statement");
    };
  }, [resourceType]);
  return (
    <div className="container">
      <h1>UseEffect Demo</h1>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h2>{resourceType}</h2>
      {items.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </div>
  );
};

export default Useeffect;
