import React, { useState } from "react";
// import { questions } from "../constant/questions";
import { questions } from "./../constant/questions";

const Body = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (isCorrect) => {
    console.log("isCorrect:", isCorrect);
    if (isCorrect && score < questions.length - 1) {
      setScore(score + 1);
    }
    if (isCorrect && score === questions.length - 1) {
      alert("you win");
      setScore(score + 1);
    }
    if (!isCorrect) {
      setShowScore(true);
      alert("you lose");
    }
    // if ((score = questions.length)) {
    //   console.log("ban da chien thang");
    // } else {
    //   console.log("game over");
    // }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    console.log("nextQuestion:", nextQuestion);
  };

  return (
    <div>
      <div>
        {showScore ? (
          <div>
            {" "}
            diem cua ban la {score} tren tong so {questions.length}{" "}
          </div>
        ) : (
          <>
            <div>
              <span> questions {currentQuestion + 1} </span>/{questions.length}
            </div>
            <div>{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].answerOptions.map(
              (answerOptions, index) => {
                return (
                  <button
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                    }
                    key={index}
                  >
                    {answerOptions.answerText}
                  </button>
                );
              }
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
