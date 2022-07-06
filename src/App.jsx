import "./App.css";
import Useeffect from "./Hooks/Useeffect";
import Usestate from "./Hooks/Usestate";
import UseMemo from "./Hooks/UseMemo";

function App() {
  return (
    <div className="App">
      <Usestate />
      <Useeffect />
      <UseMemo />
    </div>
  );
}

export default App;
