import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

export const QuizFinished = () => {
  const { score, setScore, setGameState, questions } = useContext(QuizContext);
  const question_length = questions.length;
  return (
    <div className="card-body  items-center">
      <h2 className="card-title">Quiz Finished</h2>
      <p>
        You Scored : {score} Out of {question_length} Questions
      </p>
      <button className="btn btn__quiz btn-active" onClick={handleRestart}>
        Restart Quiz
      </button>
    </div>
  );
};
