import React from "react";

const QuizQuestions = ({ question, index, handleAnswer, selectedAnswer }) => {
  return (
    <div className="p-6 bg-white text-gray-900 shadow-md rounded-lg border border-gray-300">
      {/* Question */}
      <h2 className="mb-4 text-xl font-semibold">
        Q{index + 1}: <span dangerouslySetInnerHTML={{ __html: question.question }} />
      </h2>

      {/* Options */}
      {question.options.map((answer, i) => (
        <label
          key={i}
          className={`block p-2 my-1 rounded-md cursor-pointer text-lg font-medium transition ${
            selectedAnswer === answer ? "bg-blue-200" : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <input
            type="radio"
            name={`question-${index}`}
            value={answer}
            checked={selectedAnswer === answer}
            onChange={() => handleAnswer(index, answer)}
            className="mr-3 w-5 h-5"
          />
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </label>
      ))}
    </div>
  );
};

export default QuizQuestions;
