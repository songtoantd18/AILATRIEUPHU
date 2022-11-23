import React, { useState, useContext } from "react";
import { questions } from "./../constant/questions";
import correctAudio from "../audio/correctAudio.mp3";
import incorrectAudio from "../audio/incorrectAudio.mp3";
import intro from "../audio/intro.mp3";
import Login from "./Login";
import { Context } from "../context/Context";

const Body = () => {
  const [userLogin, setUserLogin] = useContext(Context);
  console.log("userLogin o login:", userLogin);
  console.log("Context:", Context);
  console.log("userLogin:", userLogin);
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
      setUserLogin(userLogin);
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
  const [isSkip, setIsSkip] = useState(true);
  const handleSkip = (currentQuestion) => {
    if (isSkip) {
      setCurrentQuestion(currentQuestion + 1);
      setIsSkip(false);
    }

    // console.log("currentQuestion:", currentQuestion);
    // console.log("1:", 1);
  };

  return (
    <div className="main">
      <div>
        {showScore ? (
          <div className="showResult">
            {console.log("userLogin o duoi:", userLogin.name)}
            người chơi {userLogin.name} đạt được {score} trên tổng số{"    "}
            {questions.length}
          </div>
        ) : (
          <>
            {/* <div> người chơi :{userLogin}</div> */}
            <div className="numberQuestion">
              <span> questions {currentQuestion + 1} </span>/{questions.length}
            </div>
            <div>
              {isSkip ? (
                <button
                  className="skip"
                  onClick={() => handleSkip(currentQuestion)}
                >
                  {isSkip ? "skip" : "not skip"}
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="question">
              {questions[currentQuestion].questionText}
            </div>
            {questions[currentQuestion].answerOptions.map((item, index) => {
              // console.log("item:", item);
              return (
                <div
                  className="choice-container"
                  key={item.id}
                  onClick={() => handleAnswerButtonClick(item.isCorrect)}
                >
                  <div className="choice-prefix">{questions[index].id}.</div>
                  <div
                    className="choice-prefix"
                    // onClick={() => handleAnswerButtonClick(item.isCorrect)}
                  >
                    {item.answerText}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
