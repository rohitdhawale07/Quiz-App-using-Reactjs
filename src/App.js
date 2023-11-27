import React, { useState } from "react";
import { QuizData } from "./components/QuizData";
import QuizResult from "./components/QuizResult";

const App = () => {
  const [currentQuestion, setCurrentQusetion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQusetion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    } else {
    }
  };

  const reasetAll = ()=>{
    setShowResult(false)
    setCurrentQusetion(0)
    setClickedOption(0)
    setScore(0);
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-slate-200">
        <div className="text-center shadow bg-white px-20 py-10 rounded-md">
          {showResult ? (
            <QuizResult score={score} totalScore={QuizData.length} tryAgain = {reasetAll} />
          ) : (
            <>
              <h1 className="text-5xl font-bold mb-6 underline">QUIZ</h1>
              <div className="mb-6 flex flex-wrap container text-2xl font-bold text-black-600 shadow-md px-20 py-10">
                <span>{currentQuestion + 1}. </span>
                <span>{QuizData[currentQuestion].question}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {QuizData[currentQuestion].options.map((option, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setClickedOption(i + 1)}
                      className={`py-2 px-4 rounded-md transition duration-200 font-bold text-xl hover:bg-blue-700 active:bg-blue-800 ${
                        clickedOption === i + 1
                          ? "bg-blue-300 text-black"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={changeQuestion}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded  text-xl font-bold hover:bg-gray-800"
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
