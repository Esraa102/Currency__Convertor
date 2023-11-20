import "./App.css";
import { ConvertBox } from "./componets/index";
import { useState } from "react";
import useCurrency from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("egp");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (amount >= 0) setConvertedAmount(amount * currencyInfo[to]);
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  return (
    <div className="app h-screen flex items-center justify-center">
      <div className="  backdrop-blur-sm p-4 w-full md:w-[60%] rounded-none md:rounded-md flex flex-col ">
        <ConvertBox
          label="From"
          currencies={options}
          selectedCurrency={from}
          onChangeCurrency={setFrom}
          onChangeAmount={setAmount}
          amount={amount}
        />
        <button
          onClick={swap}
          className="text-sm  bg-[#E0AC36] py-1 px-4 rounded-md w-fit mx-auto  -my-2 relative"
        >
          Swap
        </button>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <ConvertBox
            label="To"
            currencies={options}
            selectedCurrency={to}
            onChangeCurrency={setTo}
            onChangeAmount={setConvertedAmount}
            amount={convertedAmount.toFixed(3)}
            amountDisable
          />
          <button
            type="submit"
            className="bg-[#E0AC36] font-semibold py-1 px-4 rounded-md block mt-4 mx-auto"
          >
            Convert {from.toUpperCase()} To {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
