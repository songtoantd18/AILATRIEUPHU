export const questionsBase = [
  {
    id: 1,
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false, id: 1 },
      { answerText: "London", isCorrect: false, id: 2 },
      { answerText: "Paris", isCorrect: true, id: 3 },
      { answerText: "Dublin", isCorrect: false, id: 4 },
    ],
  },
  {
    id: 2,
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false, id: 1 },
      { answerText: "Elon Musk", isCorrect: true, id: 2 },
      { answerText: "Bill Gates", isCorrect: false, id: 3 },
      { answerText: "Tony Stark", isCorrect: false, id: 4 },
    ],
  },
  {
    id: 2,
    questionText: "Who is CEO of Microsoft?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false, id: 1 },
      { answerText: "Elon Musk", isCorrect: false, id: 2 },
      { answerText: "Bill Gates", isCorrect: true, id: 3 },
      { answerText: "Tony Stark", isCorrect: false, id: 4 },
    ],
  },
  {
    id: 2,
    questionText: "Who is CEO of Facebook?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false, id: 1 },
      { answerText: "Elon Musk", isCorrect: false, id: 2 },
      { answerText: "Mark Zuckerberg", isCorrect: true, id: 3 },
      { answerText: "Tony Stark", isCorrect: false, id: 4 },
    ],
  },
  {
    id: 1,
    questionText: "What is the capital of England?",
    answerOptions: [
      { answerText: "New York", isCorrect: false, id: 1 },
      { answerText: "London", isCorrect: true, id: 2 },
      { answerText: "Paris", isCorrect: false, id: 3 },
      { answerText: "Tokyo", isCorrect: false, id: 4 },
    ],
  },
  {
    id: 1,
    questionText: "What is the capital of United State?",
    answerOptions: [
      { answerText: "Washington", isCorrect: true, id: 1 },
      { answerText: "London", isCorrect: false, id: 2 },
      { answerText: "Paris", isCorrect: false, id: 3 },
      { answerText: "Tokyo", isCorrect: false, id: 4 },
    ],
  },
  {
    id: 1,
    questionText: "What is the capital of Japan?",
    answerOptions: [
      { answerText: "Tokyo", isCorrect: false, id: 1 },
      { answerText: "Osaka", isCorrect: false, id: 2 },
      { answerText: "Kyoto", isCorrect: false, id: 3 },
      { answerText: "Japan don't have Capital", isCorrect: true, id: 4 },
    ],
  },
  {
    id: 3,
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true, id: 1 },
      { answerText: "Intel", isCorrect: false, id: 2 },
      { answerText: "Amazon", isCorrect: false, id: 3 },
      { answerText: "Microsoft", isCorrect: false, id: 4 },
    ],
  },
  {
    id: 3,
    questionText: "The Nokia was created by which country?",
    answerOptions: [
      { answerText: "Finland", isCorrect: true, id: 1 },
      { answerText: "Norway", isCorrect: false, id: 2 },
      { answerText: "Korea", isCorrect: false, id: 3 },
      { answerText: "China", isCorrect: false, id: 4 },
    ],
  },
  {
    id: 4,
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false, id: 1 },
      { answerText: "4", isCorrect: false, id: 2 },
      { answerText: "6", isCorrect: false, id: 3 },
      { answerText: "7", isCorrect: true, id: 4 },
    ],
  },
];
///////////////
export const RandomQuestion = () => {
  const RandomQuestion = [...questionsBase];

  for (let i = 0; i < RandomQuestion.length; i++) {
    const randomPosition = Math.floor(
      (RandomQuestion.length - i) * Math.random()
    );
    const randomItem = RandomQuestion.splice(randomPosition, 1);

    RandomQuestion.push(...randomItem);
  }

  return RandomQuestion;
};
