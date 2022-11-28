export const handleAnswerButtonClick = (
  isCorrect,
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
) => {
  if (isCorrect && score < questions.length - 1) {
    audioCorrect.play();
    setScore1(score1 + 50);
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
