import {useEffect} from "react";
import {useQuiz} from "../context/QuizContext.jsx";

export default function Timer(){
    const {dispatch, secondsRemaining} = useQuiz()
    useEffect(() => {
        const id = setInterval(function (){
        dispatch({type:'tick'})
        },1000)

        return () => clearInterval(id)
    }, [dispatch]);

    return(
        <div className='timer'>{secondsRemaining}</div>
    )
}