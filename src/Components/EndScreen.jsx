import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { QuizFinished } from "./QuizFinished";
export const EndScreen = () => {
  const { score, setScore, setGameState, questions } = useContext(QuizContext);
  const question_length = questions.length;
  const handleRestart = () => {
    setScore(0);
    setGameState("menu");
  };

  const passed = score > question_length / 2;

  return (
    <div className="Quiz">
      <div className="indicator flex-col items-center">
        <div className="">
          <button
            className={`btn btn__indicator ${
              passed ? "btn-success" : "btn-error"
            }`}
          >
            {passed ? "Passed" : "Fail"}
          </button>
        </div>

        <QuizFinished score={score}/>
      </div>
    </div>
  );
};
