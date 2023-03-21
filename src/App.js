import './App.css';
import {Counter} from "./components/counter/Counter";
import {useSelector} from "react-redux";

function CounterClient() {
    const counterValue = useSelector(state => state.somethingProp.counter2);
    return <div>{counterValue}</div>;
}

function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterClient/>
    </div>
  );
}

export default App;
