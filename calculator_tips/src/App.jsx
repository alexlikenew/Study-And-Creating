import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [summ, setSumm] = useState(0)
    const [tip , setTip] =useState(0)
    const [frienTip , setFriendTip]  = useState(0)

  return (
    <>
    <Price summ={summ} onSumm = {setSumm}>How much was the bill?</Price>
    <Tip tip={tip} onTip ={setTip}>How did you like the service?</Tip>
    </>
  )
}

function Price({summ , onSumm ,children}){
    function updatePrice(e){
        onSumm(e.target.value)
    }
    return <div>
        <label htmlFor="priceInput">{children}</label>
        <input type="text" id='priceInput' value={summ} onChange={updatePrice} />

    </div>
}

function Tip({tip , onTip ,children}) {

    return <div>
        <label htmlFor="tip">{children}</label>
        <select name="" id="tip">
            <option value="0">It was okay</option>
            <option value="5">It was good</option>
            <option value="10">It was great</option>
            <option value="15">It was super</option>
            <option value="20">It was awesome</option>
        </select>
    </div>
}

export default App
