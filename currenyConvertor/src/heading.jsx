import CurrencyFram from "./currencyFram";

function Fram() {
  return (
    <div className="min-h-screen bg-[url('./photos/currency-image.jpg')] bg-cover bg-center bg-no-repeat">
      <center>
        <h1 className="text-white font-bold text-5xl font-serif pt-4">
          Currency Converter
        </h1>
        <CurrencyFram />
      </center>
    </div>
  );
}

export default Fram;
