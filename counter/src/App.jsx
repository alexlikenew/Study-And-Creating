import {useState} from 'react' 
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg' 
import './App.css' 
 
function App() { 
 
    const [step, setStep] = useState(1) 
    const [count, setCount] = useState(0) 
    const date = new Date() 
    date.setDate(date.getDate() + count) 
 
    function increaseStep() { 
        setStep(step + 1) 
    } 
 
    function decresaseStep() { 
        setStep(step - 1) 
    } 
 
    function increaseCount() { 
        setCount(count + step) 
    } 
 
    function decreaseCount() { 
        setCount(count - step) 
    } 
 
    function handleCount(e) { 
        setCount(Number(e.target.value)) 
    } 
 
    function handleStep(e) { 
        setStep(Number(e.target.value)) 
    } 
 
    function handleReset() { 
        setCount(0) 
        setStep(1) 
    } 
 
 
    return ( 
        <> 
            <div style={{padding: "20px"}} className={'buttons'}> 
                <input type="range" min="0" max="10" onChange={(e) => handleStep(e)}/> 
                {/*<button onClick={decresaseStep}>-</button>*/} 
                <span style={{padding: '20px'}} className={'steps'}>Step: {step}</span> 
                {/*<button onClick={increaseStep}>+</button>*/} 
            </div> 
            <div className={'counts'}> 
                <button onClick={decreaseCount}>-</button> 
                <input type="text" value={count} onChange={(e) => handleCount(e)}/> 
                <span style={{padding: '20px'}} className={'count'}>Count: {count}</span> 
                <button onClick={increaseCount}>+</button> 
            </div> 
            {count > 0 || step > 1 ? <button onClick={handleReset}>Reset</button> : ""} 
            {count === 0 ? <span>Today is {date.toDateString()}</span> : ''} 
            {count > 0 ? <span>{count} days from today is {date.toDateString()}</span> : ''} 
            {count < 0 ? <span>{count} days ago from today was {date.toDateString()}</span> : ''} 
        </> 
    ) 
} 
 
export default App 