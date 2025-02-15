import React, { useState } from "react";
import QuizQuestions from "../quizPages/Questions";
import QuizTimer from "../quizPages/Timer";
import QuizResult from "../quizPages/Result";

const Quiz = ({ questions, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(""); // Error message state

  // Handle answer selection
  const handleAnswer = (index, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: answer });
    setError(""); // Clear error when an answer is selected
  };

  // Handle Next Question or Submit
  const handleNext = () => {
    if (!selectedAnswers[currentQuestion]) {
      setError("Please select an answer before proceeding.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  // Show Results if Submitted
  if (isSubmitted) {
    return <QuizResult questions={questions} selectedAnswers={selectedAnswers} onRetry={onFinish} />;
  }

  return (
    <div className="w-[50%] min-w-[320px] p-6 bg-white text-gray-900 shadow-lg rounded-lg border border-gray-300">
      {/* Quiz Timer */}
      <QuizTimer difficulty={questions[currentQuestion].difficulty} questionCount={questions.length} />

      {/* Quiz Questions */}
      <QuizQuestions
        question={questions[currentQuestion]}
        index={currentQuestion}
        handleAnswer={handleAnswer}
        selectedAnswer={selectedAnswers[currentQuestion]}
      />

      {/* Error Message */}
      {error && <p className="text-red-600 mt-2">{error}</p>}

      {/* ✅ This is the ONLY Next/Submit Button */}
      <div className="mt-4 flex justify-end">
        <button
          className="w-24 text-lg font-semibold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={handleNext}
        >
          {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
