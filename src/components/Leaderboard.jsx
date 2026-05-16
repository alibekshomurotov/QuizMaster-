import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ isOpen, onClose, leaderboard, currentUser }) => {
  if (!isOpen) return null;

  const getMedal = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `${index + 1}.`;
  };

  return (
    <div className="leaderboard-modal" onClick={onClose}>
      <div className="leaderboard-content" onClick={(e) => e.stopPropagation()}>
        <div className="leaderboard-header">
          <h2>📊 Reyting jadvali</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="leaderboard-stats">
          <div className="stat">
            <span className="stat-label">Ishtirokchilar</span>
            <span className="stat-value">{leaderboard.length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Eng yuqori natija</span>
            <span className="stat-value">{leaderboard[0]?.score || 0}%</span>
          </div>
        </div>

        <div className="leaderboard-list">
          <div className="leaderboard-header-row">
            <span>O'rin</span>
            <span>Ism</span>
            <span>Natija</span>
            <span>Testlar</span>
          </div>
          
          {leaderboard.length === 0 ? (
            <div className="empty-leaderboard">
              <p>Hali hech qanday natija yo'q</p>
              <p>Birinchi bo'lib reytingga chiqing!</p>
            </div>
          ) : (
            leaderboard.map((entry, index) => (
              <div 
                key={entry.id} 
                className={`leaderboard-row ${currentUser?.id === entry.id ? 'current-user' : ''}`}
              >
                <span className="rank">{getMedal(index)}</span>
                <span className="name">{entry.name}</span>
                <span className="score">
                  <div className="score-bar">
                    <div className="score-fill" style={{width: `${entry.score}%`}}></div>
                  </div>
                  <span className="score-value">{Math.round(entry.score)}%</span>
                </span>
                <span className="tests">{entry.tests || 1} ta</span>
              </div>
            ))
          )}
        </div>

        {currentUser && (
          <div className="user-rank">
            <h3>Sizning natijangiz</h3>
            <div className="user-rank-info">
              <span>👤 {currentUser.name}</span>
              <span>🎯 Eng yaxshi natija: {currentUser.score || 0}%</span>
              <span>📊 Testlar: {currentUser.tests || 0}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;