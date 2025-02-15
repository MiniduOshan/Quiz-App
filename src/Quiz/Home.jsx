import React, { useState } from 'react';
import QuizOptions from "../quizPages/Options";
import Quiz from "../Quiz/Quiz";  
import { quizData } from '../data/quizData';

const Home = () => {
    const [quizDataState, setQuizDataState] = useState(null);

    const startQuiz = () => {
        setQuizDataState(quizData);
    };

    // ✅ Fix: Ensure quiz resets when retrying
    const resetQuiz = () => {
        setQuizDataState(null);
    };

    return (
        <div className='w-full flex flex-col items-center justify-center min-h-screen bg-[#F8F9FA] text-gray-900 px-4 relative'>
            {!quizDataState ? (
                <QuizOptions startQuiz={startQuiz} />
            ) : (
                <Quiz questions={quizDataState} onFinish={resetQuiz} />
            )}

            {/* ✅ Copyright Section */}
            <footer className="absolute bottom-4 text-center text-gray-600 text-sm w-full">
                <p>© {new Date().getFullYear()} Minidu Oshan. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
