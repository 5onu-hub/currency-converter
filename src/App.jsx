
import './App.css'
import Inputs from './components/inputs'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { useState } from 'react'
function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

const currencyInfo =useCurrencyInfo(from)
const options=Object.keys(currencyInfo[from] || {})

const converted = () => {
  setConvertedAmount(amount * currencyInfo[from]?.[to]);
};
function swap(){
  setFrom(to)
  setTo(from)
  setAmount(convertedAmount)
  setConvertedAmount(amount)
}
  return (
    <>
     <Inputs
      label="From"
      amount={amount}
      onAmountChange={setAmount}
      currency={from}
      onCurrencyChange={setFrom}
      currencyOption={options}
      onSwap={swap}
      convertedAmount={convertedAmount}
      toCurrency={to}
      onToCurrencyChange={setTo}
      onConvert={converted}
    />
    </>
  )
}

export default App
