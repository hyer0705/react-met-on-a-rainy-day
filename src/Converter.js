function Converter({ onChange, dollar, selectChange, coins, selectedCoin }) {
  return (
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
  );
}

export default Converter;
