import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const clickCounter = () => {
    setCounter((prev) => prev + 1);
  };

  console.log("항상 실행되는 코드!");

  useEffect(() => {
    console.log("한 번만 실행되는 코드!");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={clickCounter}>Click me</button>
    </div>
  );
}

export default App;
