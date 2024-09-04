import React, { useContext, useEffect } from 'react'
import { QuizContext } from '../Helpers/Context'
import GetQuestions from '../Hooks/GetQuestions'


const MainMenu = () => {
   
    const {gameState,setGameState,setQuestions,questions} = useContext(QuizContext)

  return (


          <button className="btn btn-primary" onClick={()=>setGameState('category')}>Start Quiz</button>
        
   
  )
}

export default MainMenu