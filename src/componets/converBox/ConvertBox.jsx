import { useId } from "react";

/* eslint-disable react/prop-types */

const ConvertBox = ({
  label,
  amount,
  onChangeCurrency,
  onChangeAmount,
  amountDisable = false,
  selectedCurrency = "usd",
  currrencyDisabled = false,
  className = "",
  currencies = [],
}) => {
  const id = useId();
  return (
    <div
      className={` text-sm flex items-center text-white justify-between bg-[#000000bf] rounded-md ${className}`}
    >
      <div className="flex flex-col gap-4 p-4">
        <label htmlFor={id} className=" text-[#aaa]">
          {label}
        </label>
        <input
          id={id}
          type="number"
          value={amount}
          className="bg-transparent focus:outline-none"
          placeholder="0"
          onChange={(e) =>
            onChangeAmount && onChangeAmount(Number(e.target.value))
          }
          disabled={amountDisable}
        />
      </div>
      <div className="p-4">
        <p className="mb-4 text-[#aaa]">Currency Type</p>
        <select
          onChange={(e) => {
            onChangeCurrency && onChangeCurrency(e.target.value);
          }}
          disabled={currrencyDisabled}
          value={selectedCurrency}
          className="focus:outline-none rounded-lg text-black px-2 py-1 bg-[#E0AC36] cursor-pointer"
        >
          {currencies.map((item) => (
            <option
              key={item}
              value={item}
              className=" rounded-md cursor-pointer "
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ConvertBox;
