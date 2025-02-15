import React from "react";

const QuizResult = ({ questions, selectedAnswers, onRetry }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] text-gray-900 px-4 py-10">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between border border-gray-300">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center">🎉 Quiz Results</h1>
        <p className="text-xl font-semibold mt-2 text-center text-gray-700">Your Score</p>

        {/* Summary Section */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg flex flex-wrap gap-4 justify-between items-center border border-gray-300 shadow-md">
          <h2 className="text-lg font-semibold">📊 Quiz Summary</h2>
          <p className="px-4 py-1 rounded-lg bg-green-600 text-white font-semibold">
            ✅ Correct: {questions.filter((q, i) => selectedAnswers[i] === q.options[q.correctAnswerIndex]).length}
          </p>
          <p className="px-4 py-1 rounded-lg bg-red-600 text-white font-semibold">
            ❌ Incorrect: {questions.filter((q, i) => selectedAnswers[i] !== q.options[q.correctAnswerIndex] && selectedAnswers[i]).length}
          </p>
          <p className="px-4 py-1 rounded-lg bg-yellow-500 text-white font-semibold">
            ⚠️ Skipped: {questions.filter((q, i) => !selectedAnswers[i]).length}
          </p>
        </div>

        {/* Review Questions */}
        <div className="mt-6 max-h-[450px] overflow-auto">
          <h2 className="text-xl font-semibold mb-4">📝 Review Questions</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400 bg-white text-gray-900 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-300 text-gray-800 border-b border-gray-400">
                  <th className="p-3 border border-gray-400 text-left">#</th>
                  <th className="p-3 border border-gray-400 text-left">Question</th>
                  <th className="p-3 border border-gray-400 text-left">Your Answer</th>
                  <th className="p-3 border border-gray-400 text-left">Correct Answer</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q, i) => {
                  const isCorrect = selectedAnswers[i] === q.options[q.correctAnswerIndex];
                  const isSkipped = !selectedAnswers[i];

                  return (
                    <tr
                      key={i}
                      className={`text-gray-900 border-b border-gray-300 ${
                        i % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <td className="p-3 border border-gray-400 text-center font-semibold">{i + 1}</td>
                      <td className="p-3 border border-gray-400">{q.question}</td>
                      <td className={`p-3 border border-gray-400 font-semibold ${
                        isCorrect ? "text-green-700" : isSkipped ? "text-yellow-700" : "text-red-700"
                      }`}>
                        {isSkipped ? "Not Attempted" : selectedAnswers[i]}
                      </td>
                      <td className="p-3 border border-gray-400 font-semibold text-gray-900">
                        {q.options[q.correctAnswerIndex]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ Fix: Ensure "Return to Quiz" Button Works */}
        <div className="mt-6 flex justify-center">
          <button 
            onClick={onRetry} 
            className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
            🔄 Return to Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
