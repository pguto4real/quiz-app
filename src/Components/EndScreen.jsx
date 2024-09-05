import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
export const EndScreen = () => {
    const { score, setScore, setGameState,questions } = useContext(QuizContext)
    const question_length = questions.length
    const handleRestart = () => {

        setScore(0)
        setGameState('menu')
    }
    console.log(questions)
    const passed = (score > question_length/2) 

    return (
        <div className='Quiz'>
            <div className="indicator">
                <div className="indicator-item indicator-bottom w-6">
                    <button className={`btn btn__indicator ${passed  ?'btn-success':'btn-error'}`}>{passed?"Passed":"Fail"}</button>
                </div>
                <div className="card border bg-white rounded-md">
                    <div className="card-body bg-white rounded-sm">
                        <h2 className="card-title">Quiz Finished</h2>
                        <p>You Scored : {score} Out of {question_length} Questions</p>
                        <button className="btn btn__quiz btn-active" onClick={handleRestart}>Restart Quiz</button>
                    </div>
                </div>
            </div>

        </div>
    )
}