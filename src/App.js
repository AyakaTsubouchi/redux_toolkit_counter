import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import counterModule from "./modules/counterModule";

function App() {
  const catImage =
    "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80";

  //get dispatch
  const dispatch = useDispatch();

  //get state
  const counter = useSelector((state) => state.counter);

  const increment = () => dispatch(counterModule.actions.increment());
  const decrement = () => dispatch(counterModule.actions.decrement());

  return (
    <div className="App">
      <div>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      {counter >= 10 ? (
        <>
          <img src={catImage}></img>
        </>
      ) : (
        <p>{`Let's ${10 - counter} more count it up!`}</p>
      )}
    </div>
  );
}

export default App;
