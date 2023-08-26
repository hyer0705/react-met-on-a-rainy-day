import { useEffect, useState } from "react";

function App() {
  const [showing, setShowing] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setShowing(false);
      });
  }, []);

  return (
    <div>
      <h1>My Coins! {showing ? null : `(${coins.length})`}</h1>
      {showing ? (
        <h3>Loading...</h3>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
