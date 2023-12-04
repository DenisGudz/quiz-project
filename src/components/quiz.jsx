import { useCallback, useState } from "react"
import QUESTIONS from '../questions.js'
import quizComplete from '../assets/quiz-complete.png'
import QuestionTimer from "./questionTimer.jsx"

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length
    
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevState) => {
            return [...prevState, selectedAnswer]
        })
    }

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])


    if (quizIsComplete) {
        return(
            <div id="summary">
                <img src={quizComplete}/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }

    const shuffeledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffeledAnswers.sort(() => Math.random() - 0.5)
    
    return(
        <div id="quiz">
            <div id="question">
                <QuestionTimer 
                    timeout={5000}
                    onTimeout={}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffeledAnswers.map((answer) => {
                        return(

                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}


export default Quiz