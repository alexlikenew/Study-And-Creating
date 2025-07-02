import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [summ, setSumm] = useState(0)
    const [tip , setTip] =useState(0)
    const [friendTip , setFriendTip]  = useState(0)
    const tipToPay = ( Number(tip) + Number(friendTip)) / 100 * Number(summ) ;
  const summToPay = Number(summ) + tipToPay ;
  return (
    <>
        <Price summ={summ} onSumm = {setSumm}>How much was the bill?</Price>
        <Tip tip={tip} onTip ={setTip}>How did you like the service?</Tip>
        <Tip tip={friendTip} onTip={setFriendTip}>How did your friend like the service?</Tip>
        <Bill summ={summ} tipToPay ={tipToPay} summToPay={summToPay}>You pay :</Bill>
        <Reset summ={summ} onSum={setSumm} onTip={setTip} onTipFriend={setFriendTip} />
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

function handleTip(e) {
    onTip(e.target.value)
}
    return <div>
        <label htmlFor="tip">{children}</label>
        <select name="" id="tip" onChange={handleTip}>
            <option value="0">It was bad</option>
            <option value="5">It was good</option>
            <option value="10">It was great</option>
            <option value="15">It was super</option>
            <option value="20">It was awesome</option>
        </select>
    </div>
}

function Bill({summ , tipToPay ,summToPay, children}) {

    if (summ === 0) return

        return <div>
            {children} {summToPay} ( {summ} + {tipToPay} tip )
        </div>
}

function Reset({summ ,onSum , onTip , onTipFriend}){

    if (summ === 0 ) return

    function resetCalculator(){
        onSum(0);
        onTip(0);
        onTipFriend(0);
    }
return <div>
    <button onClick={resetCalculator}>Reset</button>
</div>
}

export default App
