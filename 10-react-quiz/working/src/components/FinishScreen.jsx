import {useQuiz} from "../context/QuizContext.jsx";

export default function FinishScreen (){
    const {points , maxPossiblePoints,highscore,dispatch} = useQuiz()
const percentage = (points / maxPossiblePoints) *100
    return(
        <>
        <p className='result'>You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}) </p>
        <p className='highscore'>(Highscore : {highscore} points</p>
            <button onClick={()=>dispatch({type:'reset'})} className='btn btn-ui'>Reset Quiz</button>
        </>

    )
}