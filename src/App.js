import { useEffect, useState } from "react";

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
        <div>
          <input
            onChange={onChange}
            value={dollar}
            type="number"
            placeholder="달러를 입력해주세요."
          />
          <select onChange={selectChange}>
            {coins.map((coin) => (
              <option value={coin.id} key={coin.id}>
                {coin.name} ({coin.symbol}): $ {coin.quotes.USD.price} USD [
                {20 / coin.quotes.USD.price} ]
              </option>
            ))}
          </select>
          <div className="result">
            {`${(dollar / selectedCoin.quotes.USD.price).toFixed(2)} (${
              selectedCoin.symbol
            })`}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
