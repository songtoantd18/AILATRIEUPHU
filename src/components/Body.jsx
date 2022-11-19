import React, { useState } from "react";
import { questions } from "./../constant/questions";
import correctAudio from "../audio/correctAudio.mp3";
import incorrectAudio from "../audio/incorrectAudio.mp3";
import intro from "../audio/intro.mp3";

const Body = () => {
  const introLogin = new Audio(intro);
  const audioCorrect = new Audio(correctAudio);
  const audioInCorrect = new Audio(incorrectAudio);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (isCorrect) => {
    console.log("isCorrect:", isCorrect);
    if (isCorrect && score < questions.length - 1) {
      audioCorrect.play();
      setScore(score + 1);
    }
    if (isCorrect && score === questions.length - 1) {
      alert("you win");
      introLogin.play();

      setScore(score + 1);
    }
    if (!isCorrect) {
      audioInCorrect.play();
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
    <div className="main">
      <div>
        {showScore ? (
          <div className="showResult">
            your scored {score} out of {questions.length}{" "}
          </div>
        ) : (
          <>
            <div className="numberQuestion">
              <span> questions {currentQuestion + 1} </span>/{questions.length}
            </div>
            <div className="question">
              {questions[currentQuestion].questionText}
            </div>
            {questions[currentQuestion].answerOptions.map(
              (answerOptions, index) => {
                return (
                  <div className="choice-container">
                    <div className="choice-prefix">{index}.</div>
                    <div
                      key={index}
                      className="choice-prefix"
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </div>
                  </div>
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
