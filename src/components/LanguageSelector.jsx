import React from 'react';
import { availableLanguages } from '../data/questionsData';
import './LanguageSelector.css';

const LanguageSelector = ({ onSelectLanguage }) => {
  return (
    <div className="language-selector">
      <div className="languages-grid">
        {availableLanguages.map(lang => (
          <div
            key={lang.id}
            className="language-card"
            onClick={() => onSelectLanguage(lang.id)}
            style={{ borderBottom: `4px solid ${lang.color}` }}
          >
            <div className="language-icon" style={{ fontSize: '3em' }}>
              {lang.icon}
            </div>
            <h3>{lang.name}</h3>
            <p className="question-count">
              {lang.id === 'react' && '20+ savol'}
              {lang.id === 'javascript' && '20+ savol'}
              {lang.id === 'python' && '20+ savol'}
              {lang.id === 'html' && '20+ savol'}
              {lang.id === 'sql' && '20+ savol'}
            </p>
            <button className="start-btn" style={{ background: lang.color }}>
              Testni boshlash →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;