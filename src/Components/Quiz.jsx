import React, { useContext, useState } from 'react'
import { Questions } from '../Helpers/QuestionBanks'
import { QuizContext } from '../Helpers/Context'

export const Quiz = () => {
    const { score, setScore,setGameState } = useContext(QuizContext)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')
   
    const questions = Questions[currentQuestion]
    const finalQuestion = (currentQuestion === Questions.length-1)
console.log(Questions.length)
    const nextQuestion = () => {

        if(finalQuestion)
        {
            console.log('optionChosen=>',optionChosen,'\ncurrentQuestion.answer=>',questions.answer)
            if (questions.answer === optionChosen) {
                setScore(score + 1)
            }
            setGameState('endScreen')
        }
        else{
            console.log('optionChosen=>',optionChosen,'\ncurrentQuestion.answer=>',questions.answer)
            if (questions.answer === optionChosen) {
                setScore(score + 1)
            }
            setCurrentQuestion(currentQuestion+1)
        }
        setOptionChosen('')
      

        // alert(score)
    }

    return (
        <div className='Quiz'>
            <h1 className='text-center text-2xl font-bold mb-2'>{questions?.prompt}</h1>
            {
                questions.options.map((item) => (
                    <button className="btn btn__quiz btn-primary" onClick={() => setOptionChosen(item)}>{item}</button>

                ))
            }
            {finalQuestion
            ?<button className={`btn btn__quiz ${optionChosen === ''  ?'btn-disabled':'btn-neutral'}`} onClick={()=>nextQuestion()}>End Quiz</button>
            :<button className={`btn btn__quiz ${optionChosen === ''  ?'btn-disabled':'btn-neutral'}`} onClick={()=>nextQuestion()}>Next Question</button>}
            
        </div>
    )
}
