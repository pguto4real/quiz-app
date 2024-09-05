import React, { useContext } from 'react'

import { QuizContext } from '../Helpers/Context'
export const Limit = () => {

    const { limit, setLimit, setGameState } = useContext(QuizContext)
    if(limit < 5 || limit>50)
    {
        setLimit('')
    }
    return (
        <>
        <span className="label-text text-2xl mb-2">Enter Number of questions betweenn 5 and 50</span>
            <div className='flex items-center mb-5 flex-col md:flex-row'>
                
                <input
                    type="number"
                    min={5}
                    max={50}
                    onChange={(e) => setLimit(e.target.value)} value={limit}
                    placeholder="Number"
                    className="input input-bordered input-md w-auto max-w-xs bg-inherit text-xl font-semibold" />

                {/* <input type="radio" name="radio-2" className="radio radio-primary" /> */}

            </div>
            <button className={`btn ${limit === '' ? 'btn-disabled' : 'btn-neutral'}`} onClick={() => setGameState("quiz")}>Select Difficulty</button>
        </>

    )
}

