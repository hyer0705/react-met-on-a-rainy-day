import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const getCoins = async () => {
    const res = await (
      await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      )
    ).json();

    setCoins(res);
  };
  useEffect(() => {
    getCoins();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <span>
        Data provided by <a href="https://www.coingecko.com/">CoinGecko</a>
      </span>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    </div>
  );
}

export default App;
