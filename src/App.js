import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("created:)");

    return () => console.log("destroyed:(");
  }, []);
  return <h1>Hello!</h1>;
}

function App() {
  const [hide, setHide] = useState(false);
  const onClick = () => setHide((prev) => !prev);

  return (
    <div className="App">
      {hide ? null : <Hello />}
      <button onClick={onClick}>{hide ? "Show" : "Hide"}</button>
    </div>
  );
}

export default App;
