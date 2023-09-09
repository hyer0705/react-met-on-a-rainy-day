import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState();
  const [selectedCoin, setSelectedCoin] = useState({});

  const getCoins = async () => {
    const res = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers`)
    ).json();

    setCoins(res.slice(0, 100));
    setLoading(false);
  };
  useEffect(() => {
    getCoins();
  }, []);

  const inputDollar = (event) => setDollar(event.target.value);
  const selectCoin = (event) => {
    const findCoin = coins.find((coin) => coin.id === event.target.value);
    setSelectedCoin(findCoin);
  };

  return (
    <div className="App">
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <input
            onChange={inputDollar}
            value={dollar}
            style={{ width: 300 }}
            placeholder="코인을 구매할 금액을 입력하세요(단위: USD)."
            type="number"
          />
          <hr />
          <select onChange={selectCoin}>
            <option value="default">코인을 선택해주세요.</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol}){" "}
                {`$ ${coin.quotes.USD.price.toFixed(2)}`}
              </option>
            ))}
          </select>
          <h4>
            살 수 있는 코인:
            {selectedCoin.id !== null
              ? ` ${(dollar / selectedCoin.quotes.USD.price).toFixed(2)} ${
                  selectedCoin.symbol
                }`
              : null}
          </h4>
        </>
      )}
    </div>
  );
}

export default App;
