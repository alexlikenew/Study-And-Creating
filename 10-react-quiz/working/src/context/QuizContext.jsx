import {createContext, useContext, useEffect, useReducer} from "react";
import Error from "../components/Error.jsx";

const QuizContext = createContext(null)

const initialState= {
    questions : [],
    //loading , erorr, ready , active , finished
    status : 'loading',
    index : 0 ,
    answer : null ,
    points : 0,
    highscore : 0,
    secondsRemaining: null ,
}
const SECS_PER_QUESTION = 30

function reducer(state , action){
    switch (action.type){
        case 'dataRecieved':return {
            ...state , questions: action.payload , status: "ready"
        }

        case 'dataFailed':
            return {
                ...state , status: 'error'
            }

        case 'newAnswer':
            const question = state.questions.at(state.index);
            return {
                ...state , answer: action.payload, points: action.payload === question.correctOption ? state.points + question.points : state.points
            }

        case 'nextQuestion' :
            return {
                ...state , index: state.index + 1 , answer : null
            }

        case 'finish':
            return {
                ...state , status : 'finish' , highscore: state.points > state.highscore ? state.points : state.highscore
            }

        case 'reset':
            return {
                ...state ,
                //loading , erorr, ready , active , finished
                status : 'ready',
                index : 0 ,
                answer : null ,
                points : 0,
                highscore : 0,
                secondsRemaining : 10 ,
            }

        case 'tick':
            return {
                ...state ,secondsRemaining: state.secondsRemaining - 1 , status: state.secondsRemaining === 0 ? 'finish' : state.status
            }

        case 'start':
            return {
                ...state , status:'active' , secondsRemaining : state.questions.length * SECS_PER_QUESTION
            }
        default :{
            throw new Error('Action unknown')
        }

    }
}
function QuizProvider({children}) {


    const [{questions , status , index , answer , points , highscore,secondsRemaining } ,dispatch] = useReducer(reducer , initialState)
    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev , cur) => prev + cur.points , 0)

    useEffect(() => {
        fetch('http://localhost:9000/questions')
            .then(res => res.json())
            .then(data => dispatch({type:'dataRecieved' , payload : data})).
        catch((err) => dispatch({type:'dataFailed' , payload : err}))
    }, []);


        return <QuizContext.Provider value={{
            questions,
            status,
            index,
            answer,
            points,
            highscore,
            secondsRemaining,
            numQuestions,
            maxPossiblePoints,dispatch,
        }}>

           {children}

        </QuizContext.Provider>

}

function useQuiz(){

 const context = useContext(QuizContext)
    if(context === undefined) throw new Error('Context used outside of Provider')
    return context
}

export {QuizProvider , useQuiz }