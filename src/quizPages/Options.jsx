import React from "react";

const QuizOptions = ({ startQuiz }) => {
  return (
    <div
      className="w-[35%] min-w-[280px] h-[320px] p-8 rounded-lg flex flex-col items-center justify-center shadow-lg 
      bg-white text-gray-900 border border-gray-300" // Light quiz box for soft contrast
    >
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Start Your Quiz</h1>

      {/* Start Quiz Button */}
      <button
        className="w-36 text-base font-medium px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizOptions;
