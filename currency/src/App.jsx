import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currencyFrom , setCurrencyFrom] = useState('USD')
  const [currencyTo , setCurrencyTo] = useState('EUR')
  const [amount,setAmount] = useState(0)
  const [output , setOutput] = useState(0)
const [isLoading , setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchRates(){

      setIsLoading(true)
      const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${currencyFrom}&symbols=${currencyTo}`);
      const data = await res.json();
      const convertedAmount = (amount * data.rates[currencyTo]).toFixed(2);
      setOutput(convertedAmount)
      setIsLoading(false)
    }
    if (currencyFrom === currencyTo) return setOutput(amount)
    fetchRates()
  }, [amount]);


  return (
    <>
    <div className='container'>
      <input onChange={(e)=> setAmount(e.target.value)} type="text"/>
      <select value={currencyFrom} onChange={(e)=>setCurrencyFrom(e.target.value)} name="currencyFrom" id="">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="IRN">IRN</option>
      </select>
      <select value={currencyTo} onChange={(e)=>setCurrencyTo(e.target.value)} name="currencyTo" id="">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="IRN">IRN</option>
      </select>

      {isLoading ? <Loader/> : <p>Output : {output}</p>}

    </div>


    </>
  )
}
function Loader() {
  return <p>Loading data ... </p>
}

export default App
