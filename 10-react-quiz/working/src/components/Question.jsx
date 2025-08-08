import Options from "./Options.jsx";
import {useQuiz} from "../context/QuizContext.jsx";

export default function Question() {
    const {question , dispatch ,answer} = useQuiz()

    return(
        <div>
            <h4>
            {question.question}
            </h4>
            <Options dispatch={dispatch} question={question} answer={answer} />
        </div>
    )
}
