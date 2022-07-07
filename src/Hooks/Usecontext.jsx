// Usecontext provides us global state and the value can be provided to any level of component
// METHOD:1 CREATE main logic is on the ThemeContext.jsx and wrap it on app component
// METHOD:2 write main logic on app component

import { useContext } from "react";
import ThemeContext from "../../ThemeContext";

const Usecontext = () => {
  const { darktheme, toggleTheme } = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darktheme ? "black" : "white",
    color: darktheme ? "white" : "black",
    padding: "2rem",
    border: "2px solid black",
  };
  return (
    <div className="container">
      <h1>UseContext Demo</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Theme</div>
    </div>
  );
};

export default Usecontext;
