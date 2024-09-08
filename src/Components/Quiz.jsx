import React, { useContext, useEffect, useState } from 'react'
// import { Questions } from '../Helpers/QuestionBanks'
import { QuizContext } from '../Helpers/Context'

import GetQuestions from '../Hooks/GetQuestions'
import { Arrow } from './Arrow'

export const Quiz = () => {
    const { category, difficulty, questions, score, setScore, setGameState, setQuestions, limit } = useContext(QuizContext)
    const { fetchQuestions } = GetQuestions()
    const [isLoading, setIsLoading] = useState(true);

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')

    useEffect(() => {
        const fetchQuestionData = async () => {
            console.log('\n34\n')
            const questionData = await fetchQuestions({ category, difficulty, limit })
            setQuestions(questionData)
            setIsLoading(false)
        }
        fetchQuestionData()
    }, [])
    const handleRestart = () => {

        setScore(0)
        setGameState('menu')
    }
    if (isLoading) {
        return <div><span className="loading loading-ring loading-lg"></span></div>
    }
    else if (questions.length < 1) {
        return <>
            <div><span className=" font-semibold text-[20px]">No Question Found</span></div>
            <button className="btn btn__quiz btn-active" onClick={handleRestart}>Restart Quiz</button>
        </>
    }
    else {


        const current_question = questions[currentQuestion]
        const finalQuestion = (currentQuestion === questions.length - 1)

        const answers = Object.entries(current_question.answers)

        const nextQuestion = () => {

            const isCorrect = current_question.correct_answers[optionChosen + "_correct"] === "true";
            if (finalQuestion) {

                if (isCorrect) {
                    setScore(score + 1)
                }
                setGameState('endScreen')
            }
            else {

                if (isCorrect) {
                    setScore(score + 1)
                }
                setCurrentQuestion(currentQuestion + 1)
            }
            setOptionChosen('')

        }

        const filteredAnswers = answers.filter(([key, value]) => value !== null);


        return (
            <>
                <Arrow functionData={setGameState} prev='limit' />
                <div className='Quiz flex flex-col items-center m-10'>
                    <div className='font-semibold uppercase px-10 py-2 text-[#d7dde4] bg-[#2b3440]'>
                        Question {currentQuestion + 1} of {questions.length}
                    </div>
                    <h1 className='text-center text-2xl font-bold mb-2'>{current_question?.question}</h1>
                    {
                        filteredAnswers.map((value) => (

                            <button className="btn btn__quiz btn-primary" onClick={() => setOptionChosen(value[0])}>{value[1]}</button>

                        ))
                    }
                    {
                        finalQuestion
                            ? <button className={`btn btn__quiz ${optionChosen === '' ? 'btn-disabled' : 'btn-neutral'}`} onClick={() => nextQuestion()}>End Quiz</button>
                            : <button className={`btn btn__quiz ${optionChosen === '' ? 'btn-disabled' : 'btn-neutral'}`} onClick={() => nextQuestion()}>Next Question</button>
                    }

                </div>
            </>
        )
    }

}
