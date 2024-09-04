import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'

const MainMenu = () => {
    const {gameState,setGameState} = useContext(QuizContext)
  return (
    
      

          <button className="btn btn-primary" onClick={()=>setGameState('quiz')}>Start Quiz</button>
        
   
  )
}

export default MainMenu