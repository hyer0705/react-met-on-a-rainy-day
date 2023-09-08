import Button from "./Button.js";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => setKeyword(event.target.value);

  console.log("매번 실행!");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    console.log("I run when 'counter' changes...");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' changes...");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' and 'keyword' change");
  }, [keyword, counter]);

  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search keyword..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="click me" onClick={onClick}></Button>
    </div>
  );
}

export default App;
