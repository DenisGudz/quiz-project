import { useCallback, useState } from "react"
import QUESTIONS from '../questions.js'
import quizComplete from '../assets/quiz-complete.png'
import QuestionTimer from "./questionTimer.jsx"

function Quiz() {

    const [answerState, setAnswerState] = useState('')
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = 
        answerState === '' ? userAnswers.length : userAnswers.length - 1
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answerd')
        setUserAnswers((prevState) => {
            return [...prevState, selectedAnswer]
        })

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else {
                setAnswerState('wrong')
            }

            setTimeout(()=>{
                setAnswerState('')
            }, 2000)
        }, 1000)

    }, [activeQuestionIndex])

    const handleSkipAnswer = useCallback(() => {handleSelectAnswer(null)}, [handleSelectAnswer])

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
<<<<<<< HEAD
                    onTimeout={}
=======
                    onTimeout={handleSkipAnswer}
                    key={activeQuestionIndex}
>>>>>>> 29aa179 (timelinee added)
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffeledAnswers.map((answer) => {
<<<<<<< HEAD
                        return(

                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
=======
                        let cssClass = ''
                        const isSelected = userAnswers[userAnswers.length - 1] === answer
                        if (answerState === 'answered'  && isSelected ){
                            cssClass = "selected"
                        }

                        if ((answerState === 'correct' || answerState === 'wrong') && isSelected){
                            cssClass = answerState
                        }

                        return(

                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>{answer}</button>
>>>>>>> 29aa179 (timelinee added)
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}


export default Quiz