import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'



const MainMenu = () => {
   
    const {setGameState} = useContext(QuizContext)

  return (


          <button className="btn btn-primary" onClick={()=>setGameState('category')}>Start Quiz</button>
        
   
  )
}

export default MainMenu