import React, { useState } from 'react'
import './FlashCard.css'

const FlashCard = ({ card, onMarkKnown, onDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="front">
          <h3>📖 Savol:</h3>
          <p>{card.question}</p>
          <small>🔘 Karta ustiga bosing</small>
        </div>
        <div className="back">
          <h3>✅ Javob:</h3>
          <p>{card.answer}</p>
        </div>
      </div>
      
      <div className="card-actions">
        {!card.known && (
          <button onClick={() => onMarkKnown(card.id)} className="known-btn">
            ✓ Bilaman
          </button>
        )}
        <button onClick={() => onDelete(card.id)} className="delete-btn">
          🗑 O'chirish
        </button>
      </div>
      
      {card.known && (
        <div className="known-badge">
          ✅ O'zlashtirilgan
        </div>
      )}
    </div>
  )
}

export default FlashCard