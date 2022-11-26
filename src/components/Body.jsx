import React, { useState, useContext } from "react";
import { questions } from "./../constant/questions";
import correctAudio from "../audio/correctAudio.mp3";
import incorrectAudio from "../audio/incorrectAudio.mp3";
import intro from "../audio/intro.mp3";
import hide from "../audio/hide.mp3";
import { Context } from "../context/Context";

const Body = () => {
  // const [isSelectHide, setIsSelectHide] = useState(false);
  // const [isChangehide, setIsChangehide] = useState(true);

  /////////////////
  const [userLogin, setUserLogin] = useContext(Context);
  const [isSkip, setIsSkip] = useState(true);
  const [isHide, setIsHide] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const introLogin = new Audio(intro);
  const audioCorrect = new Audio(correctAudio);
  const audioInCorrect = new Audio(incorrectAudio);
  const hide50 = new Audio(hide);

  //////////////////////////
  let classHide = "choice-container";

  // if (isChangehide) {
  //   classHide = "choice-container";
  // } else {
  //   classHide = "hide";
  // }
  //////////////////////////////////
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (isCorrect) => {
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
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      function timeChangeQuestion() {
        setCurrentQuestion(nextQuestion);
      }
      setTimeout(timeChangeQuestion, 3000);
    } else {
      setShowScore(true);
    }
    console.log("nextQuestion:", nextQuestion);
  };

  const handleSkip = (currentQuestion) => {
    if (isSkip) {
      setCurrentQuestion(currentQuestion + 1);
      setIsSkip(false);
    }
  };
  const handleHide = (currentQuestion) => {
    function Hide() {
      const answerOptionsHide = questions[currentQuestion].answerOptions.filter(
        (item, index) => {
          return item.isCorrect === false;
        }
      );
      console.log("answerOptionsHide:", answerOptionsHide);
      for (var i = 0; i < answerOptionsHide.length - 1; i++) {
        answerOptionsHide[i].answerText = "";

        if (answerOptionsHide[i].answerText.length === 0) {
          classHide = "hide";
        } else classHide = "choice-container";
      }
      // setIsChangehide(true);

      if (isHide) {
        setIsHide(false);
      }
    }
    setTimeout(Hide, 4000);
    hide50.play();
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
            <div> người chơi :{userLogin.name}</div>
            <div className="numberQuestion">
              <span> questions {currentQuestion + 1} </span>/{questions.length}
            </div>

            <div className="skill">
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
              <div>
                {isHide ? (
                  <button
                    className="skip"
                    onClick={() => handleHide(currentQuestion)}
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
                  className={classHide}
                  key={item.id}
                  onClick={() => handleAnswerButtonClick(item.isCorrect)}
                >
                  <div className="choice-prefix">{questions[index].id}.</div>
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
