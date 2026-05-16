import React from 'react';
import './Achievements.css';

const Achievements = ({ isOpen, onClose, achievements }) => {
  if (!isOpen) return null;

  const achievementsList = [
    { id: 'firstTest', name: 'Birinchi test', description: 'Birinchi testni topshirish', icon: '🎯', color: '#4CAF50' },
    { id: 'perfectScore', name: 'Mukammal', description: '100% natija bilan test topshirish', icon: '💯', color: '#FFD700' },
    { id: 'tenTests', name: '10 ta test', description: '10 ta test topshirish', icon: '🏆', color: '#FF9800' },
    { id: 'hundredCards', name: '100 ta karta', description: '100 ta karta yaratish', icon: '📚', color: '#2196F3' },
    { id: 'quickLearner', name: 'Tezkor', description: '1 daqiqada test topshirish', icon: '⚡', color: '#9C27B0' },
    { id: 'languageMaster', name: 'Poliglot', description: 'Barcha tillarda test topshirish', icon: '🌍', color: '#E91E63' }
  ];

  const earnedCount = Object.values(achievements).filter(a => a === true).length;

  return (
    <div className="achievements-modal" onClick={onClose}>
      <div className="achievements-content" onClick={(e) => e.stopPropagation()}>
        <div className="achievements-header">
          <h2>🏆 Yutuqlar</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="achievements-stats">
          <div className="stat-circle">
            <span className="stat-number">{earnedCount}</span>
            <span className="stat-total">/{achievementsList.length}</span>
          </div>
          <p>Yutuqlar to'plami</p>
        </div>

        <div className="achievements-grid">
          {achievementsList.map(ach => (
            <div 
              key={ach.id} 
              className={`achievement-card ${achievements[ach.id] ? 'earned' : 'locked'}`}
              style={{ borderColor: achievements[ach.id] ? ach.color : '#ddd' }}
            >
              <div className="achievement-icon" style={{ background: achievements[ach.id] ? ach.color : '#ccc' }}>
                {achievements[ach.id] ? ach.icon : '🔒'}
              </div>
              <div className="achievement-info">
                <h3>{ach.name}</h3>
                <p>{ach.description}</p>
                {achievements[ach.id] && <span className="earned-badge">✅ Qo'lga kiritildi</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;