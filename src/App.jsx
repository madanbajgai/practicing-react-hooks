import "./App.css";
import Useeffect from "./Hooks/Useeffect";
import Usestate from "./Hooks/Usestate";
import UseMemo from "./Hooks/UseMemo";
import UseRef from "./Hooks/UseRef";

function App() {
  return (
    <div className="App">
      <Usestate />
      <Useeffect />
      <UseMemo />
      <UseRef />
    </div>
  );
}

export default App;
