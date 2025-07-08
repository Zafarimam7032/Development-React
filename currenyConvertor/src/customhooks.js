import { useEffect, useState } from "react";

function currencyInfo(baseCurrency) {
  const [data, setData] = useState({ rates: {} });

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [baseCurrency]);

  return data;
}

export default currencyInfo;
