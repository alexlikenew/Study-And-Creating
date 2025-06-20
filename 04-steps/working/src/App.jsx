import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
function App() {

  const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

function handlePreviuos(){
    step > 1 ? setStep(step-1) : null
}function handleNext(){
    step < 3 ?  setStep(step+1) : null
}

  return (
      <>
          <button className='close' onClick={() => setIsOpen(!isOpen)}>&times;</button>
          { isOpen && (<div className="steps">
              <div className="numbers">
                  <div className={`${step >= 1 ? 'active' : null}`}>1</div>
                  <div className={`${step >= 2 ? 'active' : null}`}>2</div>
                  <div className={`${step >= 3  ? 'active' : null}`}>3</div>
              </div>

              <p className="message">Step {step}: {messages[step-1]}</p>

              <div className="buttons">
                  <button style={{backgroundColor:"#7950f2" , color:"white"}} className="previous" onClick={handlePreviuos}>Previous</button>
                  <button style={{backgroundColor:"#7950f2" , color:"white"}} className="next" onClick={handleNext}>Next</button>
              </div>
          </div>)

          }
      </>

  )
}

export default App
