export const handleSkip = (
  questions,
  currentQuestion,
  isSkip,
  setCurrentQuestion,
  setIsSkip
) => {
  if (isSkip) {
    setCurrentQuestion(currentQuestion + 1);
    setIsSkip(false);
  }
  // if (currentQuestion === questions.length) {
  //   setIsSkip(false);
  // }
};
