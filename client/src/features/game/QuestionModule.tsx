import { Question } from "../../redux/reducers/themeTypes"

const QuestionModule = ({question}:{question:Question}): JSX.Element => {
    return (
        
        <div className="question-module">
            <form>
            {question.text}
            <input  placeholder="Ваш ответ"/>
            </form>
        </div>
        
    )
}

export default QuestionModule