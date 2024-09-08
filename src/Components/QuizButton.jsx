import React from "react";

export const QuizButton = ({ check, functionData ,next}) => {
  let param = `${check}`;
  return (
    <div className=" mb-4">
      <button
        className={`btn ${
          check === ""
            ? "btn-disabled cat_disable text-opacity-70"
            : "btn-neutral"
        }`}
        onClick={() => functionData(next)}
      >
        Select {check}
      </button>
    </div>
  );
};
