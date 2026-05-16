import React from 'react'
import FlashCard from './FlashCard'

const FlashCardList = ({ cards, currentIndex, onMarkKnown, onNext, onPrev, onDelete }) => {
  if (cards.length === 0) return null
  
  const currentCard = cards[currentIndex]
  
  return (
    <div className="flashcard-list">
      <FlashCard 
        card={currentCard}
        onMarkKnown={onMarkKnown}
        onDelete={onDelete}
      />
    </div>
  )
}

export default FlashCardList