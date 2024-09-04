
import './App.css';
import { useState } from 'react';
import MainMenu from './Components/MainMenu';
import { Quiz } from './Components/Quiz';
import { EndScreen } from './Components/EndScreen';
import { Category } from './Components/Category';
import { QuizContext } from './Helpers/Context';
import { Difficulty } from './Components/Difficulty';

function App() {

  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card w-[50vw] h-[500px]">
      
      <QuizContext.Provider value={{gameState,setGameState,score,setScore,category,setCategory,difficulty,setDifficulty}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "category" && <Category />}
        {gameState === "difficulty" && <Difficulty />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
      </div>
  </div>
</div>
  );
}

export default App;
