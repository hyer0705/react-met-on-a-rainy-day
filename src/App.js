import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const clickCounter = () => {
    setCounter((prev) => prev + 1);
  };

  console.log("rendered");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={clickCounter}>Counter</button>
    </div>
  );
}

export default App;
