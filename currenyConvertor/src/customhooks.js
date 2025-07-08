import { useEffect, useState } from "react";

function currencyInfo(baseCurrency) {
  const [data, setData] = useState({ rates: {} });

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Currency fetch error:", err));
  }, [baseCurrency]);

  return data;
}

export default currencyInfo;
