import React, { useContext } from 'react'
import { Difficulties } from '../Helpers/QuestionBanks'
import { QuizContext } from '../Helpers/Context'
export const Difficulty = () => {

    const { difficulty, setDifficulty, setGameState } = useContext(QuizContext)

    return (
        <>
            <div className='flex items-center mb-5 flex-col md:flex-row'>
                {
                    Difficulties.map((Difficulty) => (
                        <div className='ml-7 text-center font-semibold w-[100%] md:w-[20%]'>
                            <h2>{Difficulty}</h2>
                            <input onClick={(e) => setDifficulty(e.target.value)} value={Difficulty} type="radio" name="radio-2" className="radio text-center radio-primary" />
                        </div>

                    ))
                }

                {/* <input type="radio" name="radio-2" className="radio radio-primary" /> */}

            </div>
            <button className={`btn ${difficulty === '' ? 'btn-disabled' : 'btn-neutral'}`} onClick={() => setGameState("quiz")}>Select Difficulty</button>
        </>

    )
}

