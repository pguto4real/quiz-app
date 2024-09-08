import React, { useContext, useEffect } from 'react'

import { QuizContext } from '../Helpers/Context'
import { QuizButton } from './QuizButton'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Arrow } from './Arrow'
export const Limit = () => {

    const { limit, setLimit, setGameState,setDifficulty } = useContext(QuizContext)
    useEffect(()=>{
        setLimit(5)
    },[])
    if(limit < 5 || limit>50)
    {
        setLimit('')
    }
    return (
        <>
         <Arrow functionData={setGameState} prev='difficulty'/>
        
        <span className="label-text text-2xl m-3">Enter Number of questions betweenn 5 and 50</span>
            <div className='flex items-center mb-5 flex-col md:flex-row '>
                
                <input
                    type="number"
                    min={5}
                    max={50}
                    onChange={(e) => setLimit(e.target.value)} value={limit}
                    placeholder="Number"
                    className="no-spinner input input-bordered input-md w-auto max-w-xs bg-inherit text-xl font-semibold" />

                {/* <input type="radio" name="radio-2" className="radio radio-primary" /> */}

            </div>
            <QuizButton check={limit} functionData={setGameState} next="quiz"/>

        </>

    )
}

