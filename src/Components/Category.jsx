import React, { useContext, useEffect } from 'react'
import { Categories } from '../Helpers/QuestionBanks'
import { QuizContext } from '../Helpers/Context'
import { QuizButton } from './QuizButton'
export const Category = () => {

  const { category, setCategory, setGameState } = useContext(QuizContext)
  useEffect(()=>{
    setCategory('')
},[])
  return (
    <>
      <div className='flex items-center mb-5 flex-col md:flex-row'>
        {
          Categories.map((category) => (
            <div className='flex flex-col items-center m-5 text-center font-semibold w-[100%] md:w-[20%]'>
              <h2>{category}</h2>
              <input onClick={(e) => setCategory(e.target.value)} value={category} type="radio" name="radio-2" className="radio text-center radio-primary" />
            </div>

          ))
        }

        {/* <input type="radio" name="radio-2" className="radio radio-primary" /> */}

      </div >
      <QuizButton check={category} functionData={setGameState} next="difficulty"/>
     
      
    </>

  )
}

