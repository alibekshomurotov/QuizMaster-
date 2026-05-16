import React, { useState } from 'react';
import './MyCardsList.css';

const MyCardsList = ({ cards, onDeleteCard, onStartTest }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(cards.map(card => card.category || 'general'))];
  
  const filteredCards = selectedCategory === 'all' 
    ? cards 
    : cards.filter(card => (card.category || 'general') === selectedCategory);

  const groupedByLanguage = cards.reduce((acc, card) => {
    const lang = card.language || 'general';
    if (!acc[lang]) acc[lang] = [];
    acc[lang].push(card);
    return acc;
  }, {});

  if (cards.length === 0) {
    return (
      <div className="mycards-empty">
        <div className="empty-icon">📭</div>
        <h3>Hali hech qanday karta yo'q</h3>
        <p>Yuqoridagi forma orqali birinchi kartangizni qo'shing!</p>
      </div>
    );
  }

  return (
    <div className="mycards-container">
      <div className="stats-summary">
        <div className="stat">
          <span className="stat-number">{cards.length}</span>
          <span className="stat-label">Jami kartalar</span>
        </div>
        <div className="stat">
          <span className="stat-number">{Object.keys(groupedByLanguage).length}</span>
          <span className="stat-label">Kategoriyalar</span>
        </div>
      </div>

      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === 'all' ? 'Barchasi' : cat}
            {cat !== 'all' && (
              <span className="count">
                {cards.filter(c => (c.category || 'general') === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {filteredCards.map(card => (
          <div key={card.id} className="card-item">
            <div className="card-front">
              <div className="card-category">{card.category || 'general'}</div>
              <div className="card-question">{card.question}</div>
              <div className="card-answer-preview">
                <small>Javobni ko'rish uchun bosing</small>
              </div>
            </div>
            <div className="card-actions">
              <button 
                onClick={() => onDeleteCard(card.id, card.language || 'general')}
                className="delete-btn"
              >
                🗑 O'chirish
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TESTNI BOSHLASH TUGMASI */}
      <div className="start-test-section">
        <button 
          onClick={() => onStartTest('general')}
          className="start-test-btn"
        >
          🚀 Testni boshlash ({cards.length} ta savol)
        </button>
      </div>
    </div>
  );
};

export default MyCardsList;