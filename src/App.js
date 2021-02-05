import logo from "./logo.svg";
import "./App.css";
import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <Dice />
      <Dice numDice={3} title={"Roll me"} />
    </div>
  );
}

export default App;
