import React, { useState } from 'react';
import { ChevronLeft, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QUIZ_QUESTIONS } from '../data/mockData.js';

export const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = () => {
    if (selectedOption === null) return;
    if (selectedOption === QUIZ_QUESTIONS[currentQuestion].correct) setScore(score + 1);
    if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1); setSelectedOption(null);
    } else setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/academy')} className="text-gray-700 mb-6 flex items-center gap-1"><ChevronLeft size={20}/> Volver</button>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
          {!showResult ? (
            <div>
              <h2 className="text-2xl font-extrabold mb-8">Pregunta {currentQuestion + 1}</h2>
              <h3 className="text-xl mb-6">{QUIZ_QUESTIONS[currentQuestion].question}</h3>
              <div className="space-y-3 mb-8">
                {QUIZ_QUESTIONS[currentQuestion].options.map((opt, idx) => (
                  <div key={idx} onClick={() => setSelectedOption(idx)} className={`p-4 rounded-lg border-2 cursor-pointer ${selectedOption === idx ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'}`}>
                    {opt}
                  </div>
                ))}
              </div>
              <button onClick={handleAnswer} disabled={selectedOption === null} className="w-full bg-gray-900 text-yellow-500 font-bold py-4 rounded-lg disabled:opacity-50">Siguiente</button>
            </div>
          ) : (
            <div className="text-center py-8">
              <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
              <div className="text-6xl font-black mb-6">{score} / {QUIZ_QUESTIONS.length}</div>
              <button onClick={() => navigate('/academy')} className="bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-md">Volver a Academia</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};