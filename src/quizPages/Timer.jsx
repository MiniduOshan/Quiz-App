import React, { useState, useEffect } from "react";

const QuizTimer = ({ difficulty, questionCount, onTimeUp }) => {
  // Determine the time limit based on the difficulty and question count
  const getTimeLimit = () => {
    const baseTimes = {
      easy: 2 * 60 + 15, // 2 minutes 15 seconds
      medium: 3 * 60, // 3 minutes
      hard: 3 * 60 + 45, // 3 minutes 45 seconds
    };

    const additionalTimePerQuestion = 20; // 20 seconds per question over 10
    const baseTime = baseTimes[difficulty] || baseTimes.easy;

    // If the question count is greater than 10, add additional time
    if (questionCount > 10) {
      const extraTime = (questionCount - 10) * additionalTimePerQuestion;
      return baseTime + extraTime;
    }

    return baseTime;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLimit());

  // Update the time left every second
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  // Format the time left
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="text-lg font-semibold text-gray-800 mb-4 text-right">
      <p className="bg-gray-200 px-4 py-2 rounded-md shadow-md inline-block">
        Time Left:{" "}
        <span
          className={`font-bold ${
            timeLeft < 30 ? "text-red-600" : "text-green-600"
          }`}
        >
          {formatTime(timeLeft)}
        </span>
      </p>
    </div>
  );
};

export default QuizTimer;
