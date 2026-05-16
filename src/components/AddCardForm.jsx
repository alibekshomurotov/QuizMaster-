import React, { useState } from 'react';
import './AddCardForm.css';

const AddCardForm = ({ onAddCard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('general');
  const [customOptions, setCustomOptions] = useState(['', '', '']);
  const [useCustomOptions, setUseCustomOptions] = useState(false);
  const [questionType, setQuestionType] = useState('text'); // text, math, formula

  // Matematik misol uchun variantlarni avtomatik yaratish
  const generateAutoOptions = (correctAnswer) => {
    const numAnswer = parseFloat(correctAnswer);
    if (isNaN(numAnswer)) return ['', '', ''];
    
    const options = new Set();
    options.add(numAnswer.toString());
    
    // Turli xil noto'g'ri variantlar yaratish
    const variations = [
      numAnswer + 1,
      numAnswer - 1,
      numAnswer + 2,
      numAnswer - 2,
      numAnswer * 2,
      numAnswer / 2,
      numAnswer + 5,
      numAnswer - 5
    ];
    
    for (let variation of variations) {
      if (options.size < 4 && variation !== numAnswer && !isNaN(variation)) {
        options.add(variation.toString());
      }
    }
    
    // Agar yetarli variant bo'lmasa, qo'shimcha yaratish
    while (options.size < 4) {
      const randomOffset = Math.floor(Math.random() * 20) - 10;
      const newValue = numAnswer + randomOffset;
      if (!options.has(newValue.toString()) && newValue !== numAnswer) {
        options.add(newValue.toString());
      }
    }
    
    // To'g'ri javobni o'chirib, qolgan 3 ta variantni qaytarish
    const optionsArray = Array.from(options);
    const correctIndex = optionsArray.indexOf(numAnswer.toString());
    if (correctIndex !== -1) optionsArray.splice(correctIndex, 1);
    
    return optionsArray.slice(0, 3);
  };

  const handleAnswerChange = (value) => {
    setAnswer(value);
    if (!useCustomOptions && (questionType === 'math' || questionType === 'formula')) {
      const autoOpts = generateAutoOptions(value);
      setCustomOptions(autoOpts);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && answer.trim()) {
      let finalOptions = [];
      
      if (useCustomOptions) {
        // Foydalanuvchi o'zi yozgan variantlar
        finalOptions = [answer, ...customOptions.filter(opt => opt.trim())];
        // Random aralashtirish
        for (let i = finalOptions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [finalOptions[i], finalOptions[j]] = [finalOptions[j], finalOptions[i]];
        }
      } else {
        // Avtomatik yaratilgan variantlar
        const autoOptions = generateAutoOptions(answer);
        finalOptions = [answer, ...autoOptions];
        // Random aralashtirish
        for (let i = finalOptions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [finalOptions[i], finalOptions[j]] = [finalOptions[j], finalOptions[i]];
        }
      }
      
      onAddCard({ 
        question, 
        answer, 
        category, 
        questionType,
        options: finalOptions,
        useCustomOptions
      });
      
      // Formani tozalash
      setQuestion('');
      setAnswer('');
      setCustomOptions(['', '', '']);
      setUseCustomOptions(false);
    }
  };

  const handleCustomOptionChange = (index, value) => {
    const newOptions = [...customOptions];
    newOptions[index] = value;
    setCustomOptions(newOptions);
  };

  return (
    <div className="add-card-form">
      <h2>➕ Yangi karta qo'shish</h2>
      
      <div className="question-type-selector">
        <button 
          type="button"
          className={`type-btn ${questionType === 'text' ? 'active' : ''}`}
          onClick={() => setQuestionType('text')}
        >
          📝 Matnli savol
        </button>
        <button 
          type="button"
          className={`type-btn ${questionType === 'math' ? 'active' : ''}`}
          onClick={() => setQuestionType('math')}
        >
          ➕ Matematik misol
        </button>
        <button 
          type="button"
          className={`type-btn ${questionType === 'formula' ? 'active' : ''}`}
          onClick={() => setQuestionType('formula')}
        >
          📐 Formula
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            {questionType === 'math' ? '🧮 Matematik misol:' : 
             questionType === 'formula' ? '📐 Formula:' : 
             '📖 Savol / So\'z:'}
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={
              questionType === 'math' ? 'Masalan: 4 + 6 = ? yoki 15 - 7 = ?' :
              questionType === 'formula' ? 'Masalan: Kvadrat tenglamaning ildizlari formulasi:' :
              'Masalan: React hooklaridan biri...'
            }
            required
          />
        </div>
        
        <div className="form-group">
          <label>
            {questionType === 'math' ? '✅ To\'g\'ri javob (son):' : 
             questionType === 'formula' ? '✅ Formula natijasi:' : 
             '✅ Javob:'}
          </label>
          <input
            type={questionType === 'math' ? 'number' : 'text'}
            value={answer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder={
              questionType === 'math' ? 'Masalan: 10' :
              questionType === 'formula' ? 'Masalan: x = [-b ± √(b²-4ac)] / 2a' :
              'Masalan: useState'
            }
            required
          />
        </div>

        {(questionType === 'math' || questionType === 'formula') && (
          <div className="options-mode">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useCustomOptions}
                onChange={(e) => setUseCustomOptions(e.target.checked)}
              />
              Variantlarni o'zim yozish (avtomatik variantlar o'rniga)
            </label>
          </div>
        )}

        {useCustomOptions && (questionType === 'math' || questionType === 'formula') && (
          <div className="custom-options">
            <label>🔘 Noto'g'ri variantlar (3 ta):</label>
            {customOptions.map((opt, idx) => (
              <input
                key={idx}
                type={questionType === 'math' ? 'number' : 'text'}
                value={opt}
                onChange={(e) => handleCustomOptionChange(idx, e.target.value)}
                placeholder={`Variant ${idx + 1}`}
                className="custom-option-input"
              />
            ))}
          </div>
        )}

        <div className="form-group">
          <label>📂 Kategoriya:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="general">Umumiy</option>
            <option value="mathematics">Matematika</option>
            <option value="programming">Dasturlash</option>
            <option value="languages">Tillar</option>
            <option value="science">Fan</option>
          </select>
        </div>
        
        <button type="submit" className="submit-btn">
          ➕ Karta qo'shish
        </button>
      </form>
    </div>
  );
};

export default AddCardForm;