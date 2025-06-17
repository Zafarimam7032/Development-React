import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const ReduceClick = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <center>
        <h1 className="text-success">this is user count</h1>
        <h3 className="text-success">hit count: {count}</h3>
        <button onClick={handleClick} class="btn btn-success">
          hit Counter
        </button>
        <br />
        <br />
        <button onClick={ReduceClick} class="btn btn-success">
          reduse Counter
        </button>
      </center>
    </>
  );
}

export default App;
