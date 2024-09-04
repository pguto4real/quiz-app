
import './App.css';
import { useState } from 'react';
import MainMenu from './Components/MainMenu';
import { Quiz } from './Components/Quiz';
import { EndScreen } from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';

function App() {

  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card w-[50vw] h-[500px]">
      
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
      </div>
  </div>
</div>
  );
}

export default App;
