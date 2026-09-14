import "../components/input.css";
import { useId } from "react";

function Inputs({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOption = [],
  onSwap,
  toCurrency,
  onToCurrencyChange,
  convertedAmount,
  onConvert,
}) {
  const amountInputId = useId();

  return (
    <div className="container">
      <div className="currency-box">

        {/* From */}
        <div className="input-group">
          <label htmlFor={`${amountInputId}-from`}>
            {label || "From"}
          </label>

          <div className="input-row">
            <input
              id={`${amountInputId}-from`}
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) =>
  onAmountChange(Number(e.target.value))
}
            />

            <select
              value={currency}
              onChange={(e) =>
                onCurrencyChange(e.target.value)
              }
            >
              {currencyOption.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap */}
        <div className="swap-container">
          <button
            type="button"
            className="swap-btn"
            onClick={onSwap}
            title="Swap currencies"
          >
            ⇅
          </button>
        </div>

        {/* To */}
        <div className="input-group">
          <label htmlFor={`${amountInputId}-to`}>
            To
          </label>

          <div className="input-row">
            <input
              id={`${amountInputId}-to`}
              type="number"
              placeholder="Converted amount"
              value={convertedAmount}
              readOnly
            />

            <select
              value={toCurrency}
              onChange={(e) =>
                onToCurrencyChange(e.target.value)
              }
            >
              {currencyOption.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Convert */}
        <button
          type="button"
          className="convert-btn"
          onClick={onConvert}
        >
          Convert
        </button>

      </div>
    </div>
  );
}

export default Inputs;