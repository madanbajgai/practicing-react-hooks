import "./App.css";
import Useeffect from "./Hooks/Useeffect";
import Usestate from "./Hooks/Usestate";
import UseMemo from "./Hooks/UseMemo";
import UseRef from "./Hooks/UseRef";
import Usecontext from "./Hooks/Usecontext";
import { ThemeProvider } from "../ThemeContext";
// import { createContext } from "react"; //METHOD:2

// export const ThemeContext = createContext(); //METHOD:2

function App() {
  // const [darkTheme, setDarkTheme] = useState(true); //METHOD:2
  // function toggleTheme() { //METHOD:2
  // setDarkTheme((p) => !p); //METHOD:2
  // } //METHOD:2
  return (
    <div className="App">
      {/* <ThemeContext.Provider value={{darkTheme, toggleTheme}}> //METHOD:2 */}

      <ThemeProvider>
        <Usestate />
        <Useeffect />
        <UseMemo />
        <UseRef />
        <Usecontext />
      </ThemeProvider>
      {/* </ThemeContext.Provider> //METHOD:2 */}
    </div>
  );
}

export default App;
