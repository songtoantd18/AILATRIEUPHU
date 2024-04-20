import React, { useState } from "react";
import "../../src/styles/homeScreen.css";
import "../function/actionApi";

import { getItem } from "../function/actionLocal";

function HomeScreen() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState(false);

  const questions = getItem("questionList");

  function selectAnswer(answer) {
    setSelectedAnswer(answer);
  }

  function handleDoubleClick(answer) {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setIsCorrect(true);
      setSelectedCorrectAnswer(true);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
        setIsCorrect(false);
      }

      // Thay đổi CSS của ô chứa câu trả lời đúng
      const correctAnswerOption = document.querySelector(
        `[data-answer="${questions[currentQuestionIndex].correctAnswer}"]`
      );
      console.log(
        "🚀 ~ handleDoubleClick ~ correctAnswerOption:",
        correctAnswerOption
      );
      if (correctAnswerOption) {
        console.log("🚀 1111111111111111111111111111111111111111111");
        correctAnswerOption.classList.add("wrong-answer");
      }
    } else {
      console.log("hellowr d");
      const correctAnswerOption = document.querySelector(
        `[data-answer="${questions[currentQuestionIndex].correctAnswer}"]`
      );
      correctAnswerOption.classList.add("wrong-answer");
      console.log(
        "🚀 ~ handleDoubleClick ~ correctAnswerOption:",
        correctAnswerOption
      );
      setIsCorrect(false);
      setSelectedCorrectAnswer(false);
    }
  }

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="container">
      <h2 className="title">Who Wants to Be a Millionaire</h2>
      <button onClick={nextQuestion}>next</button>
      <div>user</div>

      <div className="question" key={questions[currentQuestionIndex].id}>
        <p>{questions[currentQuestionIndex].content}</p>
        <div className="options">
          <button
            type="button"
            className={`btn btn-option item ${
              selectedAnswer === "answerA" ? "active" : ""
            }`}
            onClick={() => selectAnswer("answerA")}
            onDoubleClick={() => handleDoubleClick("answerA")}
            data-answer="answerA" // Thêm thuộc tính data-answer
          >
            A) {questions[currentQuestionIndex].answerA}
          </button>
          <button
            type="button"
            className={`btn btn-option item ${
              selectedAnswer === "answerB" ? "active" : ""
            }`}
            onClick={() => selectAnswer("answerB")}
            onDoubleClick={() => handleDoubleClick("answerB")}
            data-answer="answerB" // Thêm thuộc tính data-answer
          >
            B) {questions[currentQuestionIndex].answerB}
          </button>
          <button
            type="button"
            className={`btn btn-option item ${
              selectedAnswer === "answerC" ? "active" : ""
            }`}
            onClick={() => selectAnswer("answerC")}
            onDoubleClick={() => handleDoubleClick("answerC")}
            data-answer="answerC" // Thêm thuộc tính data-answer
          >
            C) {questions[currentQuestionIndex].answerC}
          </button>
          <button
            type="button"
            className={`btn btn-option item ${
              selectedAnswer === "answerD" ? "active" : ""
            }`}
            onClick={() => selectAnswer("answerD")}
            onDoubleClick={() => handleDoubleClick("answerD")}
            data-answer="answerD" // Thêm thuộc tính data-answer
          >
            D) {questions[currentQuestionIndex].answerD}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
