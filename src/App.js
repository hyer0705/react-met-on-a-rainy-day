import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const clickCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const onChange = (event) => setKeyword(event.target.value);

  console.log("항상 실행되는 코드!");

  useEffect(() => {
    console.log("한 번만 실행되는 코드!");
  }, []);
  useEffect(() => {
    console.log("keyword가 변화될 때만 실행되는 코드!");
  }, [keyword]);
  useEffect(() => {
    console.log("counter가 변화될 때만 실행되는 코드!");
  }, [counter]);
  useEffect(() => {
    console.log("keyword나 counter가 변했을 때 실행되는 코드!");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="검색어를 입력해주세요."
      />
      <h1>{counter}</h1>
      <button onClick={clickCounter}>Click me</button>
    </div>
  );
}

export default App;
