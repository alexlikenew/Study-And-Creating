import Options from "./Options.jsx";

export default function Question({question , dispatch ,answer}) {console.log(question)
    return(
        <div>
            <h4>
            {question.question}
            </h4>
            <Options dispatch={dispatch} question={question} answer={answer} />
        </div>
    )
}
