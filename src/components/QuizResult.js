import React from "react";

function QuizResult(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="font-bold text-4xl">
          Your Score:{" "}
          <span className="font-bold text-6xl text-blue-800">
            {props.score}
          </span>
        </p>
        <p className="font-bold text-4xl">Total Score: {props.totalScore}</p>
      </div>
      <button onClick={props.tryAgain} className="mt-10 bg-red-500 text-white py-2 px-4 rounded-md text-xl font-bold hover:bg-red-700">
        Try Again
      </button>
    </>
  );
}

export default QuizResult;
