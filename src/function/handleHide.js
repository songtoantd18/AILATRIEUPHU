export const handleHide = (
  currentQuestion,
  questions,
  setRefresh,
  refresh,
  isHide,
  setIsHide,
  hide50
) => {
  function Hide() {
    const answerOptionsHide = questions[currentQuestion].answerOptions.filter(
      (item, index) => {
        return item.isCorrect === false;
      }
    );
    console.log("answerOptionsHide:", answerOptionsHide);
    for (var i = 0; i < answerOptionsHide.length - 1; i++) {
      setRefresh(...answerOptionsHide[i].answerText);
      console.log("refresh:", refresh);
    }

    if (isHide) {
      setIsHide(false);
    }
  }
  setTimeout(Hide, 4000);
  hide50.play();
};
