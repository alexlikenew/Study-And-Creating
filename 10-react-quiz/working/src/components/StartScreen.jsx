import {useQuiz} from "../context/QuizContext.jsx";

export function StartScreen() {
    const {numQuestion , dispatch} = useQuiz()
    return(

        <div className='start'>
            <h2>Welcome to react Quiz!</h2>
            <h3>{numQuestion} question to test your React mastery</h3>
            <button onClick={()=>dispatch({type: 'start'})} className='btn btn-ui'>Let`s start</button>
        </div>

        )

}