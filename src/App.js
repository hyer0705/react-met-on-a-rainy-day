import { useEffect, useState } from "react";
import Converter from "./Converter.js";

function App() {
  const [showing, setShowing] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState({});

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setShowing(false);
        setSelectedCoin(json[0]);
      });
  }, []);

  const onChange = (event) => {
    setDollar(event.target.value);
  };

  const selectChange = (event) => {
    let selected = coins.find((coin) => coin.id === event.target.value);
    setSelectedCoin(selected);
  };

  return (
    <div>
      <h1>My Coins! {showing ? null : `(${coins.length})`}</h1>
      {showing ? (
        <h3>Loading...</h3>
      ) : (
        <Converter
          onChange={onChange}
          dollar={dollar}
          selectChange={selectChange}
          coins={coins}
          selectedCoin={selectedCoin}
        />
      )}
    </div>
  );
}

export default App;
