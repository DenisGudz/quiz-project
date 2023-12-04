import { useState, useEffect } from "react"

function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout)
    
    useEffect(() => {
        setTimeout(onTimeout, timeout)
    }, [timeout, onTimeout])
    
    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10)
        }, 10)
    }, [])
    
    return(
        <progress id="question-time" max={timeout} value={remainingTime}/>
    )
}
export default QuestionTimer