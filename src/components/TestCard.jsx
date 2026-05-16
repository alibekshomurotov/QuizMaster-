import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './TestCard.css';

const TestCard = ({ 
  question, 
  currentIndex, 
  totalQuestions, 
  onAnswer,
  isUserCard,
  timeLeft 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    setSelectedAnswer(null);
    
    if (question && question.options && Array.isArray(question.options)) {
      const options = [...question.options];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      setShuffledOptions(options);
    } else if (question && question.options) {
      setShuffledOptions([question.options]);
    } else {
      setShuffledOptions([]);
    }
  }, [question, currentIndex]);

  const handleSubmitAnswer = () => {
    // Agar hech qanday javob tanlanmagan bo'lsa
    if (selectedAnswer === null) {
      return;
    }
    
    // Tanlangan variantni olish
    const selectedValue = shuffledOptions[selectedAnswer];
    const correctAnswer = question?.answer;
    
    // Agar ma'lumotlar mavjud bo'lmasa
    if (!selectedValue || !correctAnswer) {
      console.error('Javob yoki to\'g\'ri javob topilmadi:', { selectedValue, correctAnswer });
      onAnswer({
        questionText: question?.question || 'Noma\'lum savol',
        userAnswer: selectedValue || 'Javob topilmadi',
        correctAnswer: correctAnswer || 'To\'g\'ri javob topilmadi',
        isCorrect: false
      });
      return;
    }
    
    // JAVOBNI TO'G'RI SOLISHTIRISH
    let isCorrect = false;
    
    const selectedStr = String(selectedValue).trim();
    const correctStr = String(correctAnswer).trim();
    
    // 1. To'g'ridan-to'g'ri solishtirish
    if (selectedStr === correctStr) {
      isCorrect = true;
    }
    // 2. Kichik harflarga o'tkazib solishtirish
    else if (selectedStr.toLowerCase() === correctStr.toLowerCase()) {
      isCorrect = true;
    }
    // 3. Raqamli solishtirish (masalan: 10 va '10')
    else if (!isNaN(parseFloat(selectedStr)) && !isNaN(parseFloat(correctStr))) {
      if (parseFloat(selectedStr) === parseFloat(correctStr)) {
        isCorrect = true;
      }
    }
    // 4. CSS selektorlar uchun maxsus (#idName, .className)
    else if (selectedStr.replace(/[.#]/g, '') === correctStr.replace(/[.#]/g, '')) {
      isCorrect = true;
    }
    // 5. Variant indeksi bo'yicha solishtirish (agar javob indeks sifatida saqlangan bo'lsa)
    else if (question.correct === selectedAnswer) {
      isCorrect = true;
    }
    
    console.log('Javob tekshirish:', {
      tanlangan: selectedStr,
      togriJavob: correctStr,
      natija: isCorrect ? 'TO\'G\'RI' : 'XATO'
    });
    
    onAnswer({
      questionText: question.question,
      userAnswer: selectedStr,
      correctAnswer: correctStr,
      isCorrect: isCorrect
    });
  };

  const progress = ((currentIndex) / totalQuestions) * 100;

  // Agar question mavjud bo'lmasa
  if (!question) {
    return (
      <div className="test-card">
        <div className="error-message">
          <h3>⚠️ Xatolik yuz berdi</h3>
          <p>Savol ma'lumotlari topilmadi.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="test-card">
      {isUserCard && (
        <div className="user-card-badge">
          ✨ Siz qo'shgan karta
        </div>
      )}
      
      <ProgressBar progress={progress} />
      
      <div className="question-header">
        <span className="question-counter">
          Savol {currentIndex + 1} / {totalQuestions}
        </span>
      </div>

      <div className="question-text">
        <h2>{question.question || 'Savol matni topilmadi'}</h2>
      </div>

      <div className="options-list">
        {shuffledOptions && shuffledOptions.length > 0 ? (
          shuffledOptions.map((option, idx) => (
            <div
              key={`${currentIndex}_${idx}`}
              className={`option ${selectedAnswer === idx ? 'selected' : ''}`}
              onClick={() => setSelectedAnswer(idx)}
            >
              <div className="option-letter">
                {String.fromCharCode(65 + idx)}
              </div>
              <div className="option-text">
                {option || 'Variant topilmadi'}
              </div>
            </div>
          ))
        ) : (
          <div className="error-message">Variantlar topilmadi</div>
        )}
      </div>

      <div className="action-buttons">
        <button 
          className="next-btn"
          onClick={handleSubmitAnswer}
          disabled={selectedAnswer === null || !shuffledOptions.length}
        >
          {currentIndex + 1 === totalQuestions ? '🏁 Testni yakunlash' : '➡ Keyingi savol'}
        </button>
      </div>

      {timeLeft !== undefined && (
        <div className={`time-warning ${timeLeft <= 10 ? 'urgent' : ''}`}>
          ⏱️ Javob berishga {timeLeft} soniya qoldi
        </div>
      )}
    </div>
  );
};

export default TestCard;