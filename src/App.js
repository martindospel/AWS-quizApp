import React, { useState } from "react";

export default function App() {
  const quiz = [
    {
      question: "What is the capital of Slovakia?",
      answerOptions: [
        { answer: "Warsaw", isCorrect: false },
        { answer: "Prague", isCorrect: false },
        { answer: "Split", isCorrect: false },
        { answer: "Bratislava", isCorrect: true },
      ],
    },
    {
      question: "Who is CEO of Tesla?",
      answerOptions: [
        { answer: "Jeff Bezos", isCorrect: false },
        { answer: "Elon Musk", isCorrect: true },
        { answer: "Bill Gates", isCorrect: false },
        { answer: "Tony Stark", isCorrect: false },
      ],
    },
    {
      question: "I am the rare case when today comes before yesterday. What am I?",
      answerOptions: [
        { answer: "A dictionary", isCorrect: true },
        { answer: "A clock", isCorrect: false },
        { answer: "The moon", isCorrect: false },
        { answer: "Jeffrey Bezos", isCorrect: true },
      ],
    },
    {
      question: "What has four fingers and a thumb, but is not alive?",
      answerOptions: [
        { answer: "A software developer", isCorrect: false },
        { answer: "A bag", isCorrect: false },
        { answer: "Many, many chairs", isCorrect: false },
        { answer: "A glove", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [tally, setTally] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuestionOptions = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setTally(true);
    }
  };
  return (
    <div className="quiz">
      {tally ? (
        <div className="quiz-score">
          You scored {score} out of {quiz.length}. Refresh to try again. The intent here is to
          deploy a very very simple React app to AWS using S3, CloudFront, ACM,
          Route53. For other, better quality projects, go to
          https://github.com/martindospel
        </div>
      ) : (
        <>
          <div className="quiz-question">
            <div className="quiz-count">
              <span>Question {currentQuestion + 1}</span>/{quiz.length}
            </div>
            <div className="-quiz-text">
              {quiz[currentQuestion].question}
            </div>
          </div>
          <div className="quiz-answer">
            {quiz[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleQuestionOptions(answerOption.isCorrect)}
              >
                {answerOption.answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
