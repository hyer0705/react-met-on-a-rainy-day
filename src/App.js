import Button from "./Button.js";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1 className={styles.title}>{counter}</h1>
      <Button text="click me" onClick={onClick}></Button>
    </div>
  );
}

export default App;
