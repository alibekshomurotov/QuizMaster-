import React from 'react';
import './Result.css';

const Result = ({ score, userAnswers, questions, languageName, userCardsCount, onRestart, onBackToLanguages }) => {
  // questions array dan to'g'ri javobni topish uchun map yaratish
  const questionsMap = {};
  questions.forEach(q => {
    questionsMap[q.question] = q;
  });

  return (
    <div className="result-container">
      <div className="result-card">
        <div className="result-header">
          <h2>🎉 Test yakunlandi!</h2>
          <div className="language-name">{languageName}</div>
          {userCardsCount > 0 && (
            <div className="user-cards-info">
              ✨ {userCardsCount} ta shaxsiy kartangiz testga qo'shildi
            </div>
          )}
        </div>

        <div className="score-circle">
          <div className="score-percentage">{Math.round(score.percentage)}%</div>
          <div className="score-text">To'g'ri javoblar</div>
        </div>

        <div className="score-details">
          <div className="score-item correct">
            <span>✅ To'g'ri javoblar:</span>
            <strong>{score.correct}</strong>
          </div>
          <div className="score-item wrong">
            <span>❌ Xato javoblar:</span>
            <strong>{score.total - score.correct}</strong>
          </div>
          <div className="score-item total">
            <span>📊 Jami savollar:</span>
            <strong>{score.total}</strong>
          </div>
        </div>

        <div className="feedback">
          {score.percentage === 100 && <p>🎯 Mukammal! Siz hamma savollarga to'g'ri javob berdingiz!</p>}
          {score.percentage >= 70 && score.percentage < 100 && <p>👍 Yaxshi! Yana biroz mashq qiling va mukammal bo'ling!</p>}
          {score.percentage < 70 && <p>💪 Davom eting! Ko'proq o'rganing va qayta urinib ko'ring!</p>}
        </div>

        <div className="result-actions">
          <button onClick={onRestart} className="restart-btn">
            🔄 Testni qayta boshlash
          </button>
          <button onClick={onBackToLanguages} className="languages-btn">
            🌐 Bosh sahifaga qaytish
          </button>
        </div>

        {/* BARCHA SAVOLLAR VA JAVOBLAR */}
        <div className="answers-review">
          <h3>📝 Barcha savollar va javoblar tahlili</h3>
          {userAnswers.map((answer, idx) => {
            const originalQuestion = questionsMap[answer.questionText];
            const correctAnswerText = originalQuestion ? originalQuestion.answer : answer.correctAnswer;
            const explanation = originalQuestion?.explanation || '';
            
            return (
              <div key={idx} className={`review-item ${answer.isCorrect ? 'correct' : 'wrong'}`}>
                <div className="review-header">
                  <span className="review-number">{idx + 1}.</span>
                  <span className="review-question">{answer.questionText}</span>
                  {answer.isCorrect ? (
                    <span className="review-status correct-badge">✅ To'g'ri</span>
                  ) : (
                    <span className="review-status wrong-badge">❌ Xato</span>
                  )}
                </div>
                <div className="review-answers">
                  <div className="user-answer">
                    <strong>📝 Sizning javobingiz:</strong> {answer.userAnswer || "Javob tanlanmagan"}
                  </div>
                  <div className="correct-answer-review">
                    <strong>✅ To'g'ri javob:</strong> {correctAnswerText}
                  </div>
                  {explanation && (
                    <div className="explanation-review">
                      <strong>📖 Izoh:</strong> {explanation}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Result;