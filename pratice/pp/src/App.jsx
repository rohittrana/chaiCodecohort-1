import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inputCount = useRef(0);

  useEffect(() => {
    inputCount.current = inputCount.current + 1;
    console.log(`Component rendered ${inputCount.current} times`);
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times (Component renders: {inputCount.current})
      </button>
    </>
  );
}

export default App;
