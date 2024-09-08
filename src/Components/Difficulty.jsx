import React, { useContext, useEffect } from 'react'
import { Difficulties } from '../Helpers/QuestionBanks'
import { QuizContext } from '../Helpers/Context'
import { QuizButton } from './QuizButton'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Arrow } from './Arrow'
export const Difficulty = () => {

    const { difficulty, setDifficulty, setGameState, setCategory} = useContext(QuizContext)
   
    useEffect(()=>{
        setDifficulty('')
    },[])
    return (
        <div className='m-5'>
        <Arrow functionData={setGameState} prev='category'/>
        
        
            <div className='flex items-center mb-5 flex-col md:flex-row p-10'>
                {
                    Difficulties.map((Difficulty) => (
                        <div className='ml-7 text-center font-semibold w-[100%] md:w-[20%]'>
                            <h2>{Difficulty}</h2>
                            <input onClick={(e) => setDifficulty(e.target.value)} value={Difficulty} type="radio" name="radio-2" className="radio text-center radio-primary" />
                        </div>

                    ))
                }

               

            </div>
            <QuizButton check={difficulty} functionData={setGameState} next="limit"/>
           
        </div>

    )
}

