import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }

    setToDos((currTodos) => [toDo, ...currTodos]);
    setToDo("");
  };

  return (
    <div className="App">
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          placeholder="할 일을 입력해주세요."
          type="text"
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default App;
