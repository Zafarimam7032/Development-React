// CurrencyFram.jsx
import { useState } from "react";
import currencyInfo from "./customhooks";

function CurrencyFram() {
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  const data = currencyInfo(fromCurrency);
  const rates = data.rates;

  const handleConvert = () => {
    const rate = rates[toCurrency];
    if (rate) {
      setResult((amount * rate).toFixed(2));
    }
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setResult(null);
  };

  return (
    <div className="mt-[6px] h-[40ch] w-[60ch] bg-white/20 rounded-xl shadow-md pt-2">
      {/* FROM Frame */}
      <div className="flex justify-around items-center p-6">
        <div>
          <label className="text-white text-xl">From:</label>
          <select
            className="ml-2 p-2 rounded-lg"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(rates).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
        <input
          className="text-2xl p-2 rounded-lg"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      {/* Swap Button */}
      <div className="text-center">
        <button
          onClick={handleSwap}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-2xl text-2xl"
        >
          Swap
        </button>
      </div>

      {/* TO Frame */}
      <div className="flex justify-around items-center p-6">
        <div>
          <label className="text-white text-xl">To:</label>
          <select
            className="ml-2 p-2 rounded-lg"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(rates).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <input
          className="text-2xl p-2 rounded-lg bg-white"
          type="text"
          value={result ? `${result} ${toCurrency}` : ""}
          readOnly
        />
      </div>

      {/* Convert Button */}
      <div className="text-center">
        <button
          onClick={handleConvert}
          className="w-72 bg-green-500 hover:bg-green-600 p-3 mt-0 ml-36 rounded-2xl text-2xl"
        >
          Convert {fromCurrency} To {toCurrency}
        </button>
      </div>
    </div>
  );
}

export default CurrencyFram;
