import React, { useState, useContext } from "react";
import { questions } from "./../constant/questions";
import correctAudio from "../audio/correctAudio.mp3";
import incorrectAudio from "../audio/incorrectAudio.mp3";
import intro from "../audio/intro.mp3";
import hide from "../audio/hide.mp3";
import { Context } from "../context/Context";
import { handleAnswerButtonClick } from "../function/handleAnswerButtonClick";
import { handleSkip } from "../function/handleSkip";
import { handleHide } from "../function/handleHide";

const Body = () => {
  const ANSWER = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };
  const [refresh, setRefresh] = useState([]);
  const [userLogin, setUserLogin] = useContext(Context);
  const [isSkip, setIsSkip] = useState(true);
  const [isHide, setIsHide] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score1, setScore1] = useState(0);

  const introLogin = new Audio(intro);
  const audioCorrect = new Audio(correctAudio);
  const audioInCorrect = new Audio(incorrectAudio);
  const hide50 = new Audio(hide);
  // let classHide = "choice-container";
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  if (isSkip && currentQuestion === questions.length - 1) {
    setIsSkip(false);
    // setIsSkip(false) true: là show nút,false : ẩn nút
  }
  if (isHide && currentQuestion === questions.length - 1) {
    setIsHide(false);
  }

  return (
    <div className="main">
      <div>
        {showScore ? (
          <div className="showResult">
            người chơi {userLogin.name} đạt được {score} trên tổng số{"    "}
            {questions.length}
          </div>
        ) : (
          <>
            <div className="numberQuestion">
              <div className="Infor-user">
                <div> người chơi :{userLogin.name}</div>
                <div> score :{score1}</div>
              </div>
              <span> questions {currentQuestion + 1} </span>/{questions.length}
            </div>

            <div className="skill">
              <div>
                {isSkip ? (
                  <button
                    className="skip"
                    onClick={() =>
                      handleSkip(
                        questions,
                        currentQuestion,
                        isSkip,
                        setCurrentQuestion,
                        setIsSkip
                      )
                    }
                  >
                    {isSkip ? "skip" : "not skip"}
                  </button>
                ) : (
                  <></>
                )}
              </div>
              <div>
                {isHide ? (
                  <button
                    className="skip"
                    onClick={() =>
                      handleHide(
                        currentQuestion,
                        questions,
                        setRefresh,
                        refresh,
                        isHide,
                        setIsHide,
                        hide50
                      )
                    }
                  >
                    {isHide ? "50/50" : "not 50/50"}
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="question">
              {questions[currentQuestion].questionText}
            </div>
            {questions[currentQuestion].answerOptions.map((item, index) => {
              return (
                <div
                  className="choice-container"
                  key={item.id}
                  onClick={() =>
                    handleAnswerButtonClick(
                      item.isCorrect,
                      score,
                      questions,
                      audioCorrect,
                      setScore,
                      score1,
                      setScore1,

                      setUserLogin,
                      introLogin,
                      audioInCorrect,
                      setCurrentQuestion,
                      setShowScore,
                      userLogin,
                      currentQuestion
                    )
                  }
                >
                  <div className="choice-prefix">{ANSWER[index]}.</div>
                  <div className="choice-prefix">{item.answerText}</div>
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
