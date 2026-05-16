import React, { useState, useEffect } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, onLogin, onSignUp, initialIsLogin = true }) => {
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');
      setName('');
    } else {
      setIsLogin(initialIsLogin);
    }
  }, [isOpen, initialIsLogin]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(email, password);
    } else {
      if (name.trim()) {
        onSignUp(email, password, name);
      } else {
        alert("Iltimos, ismingizni kiriting!");
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-icon">{isLogin ? '🔐' : '✏️'}</div>
          <h2>{isLogin ? 'Kirish' : "Ro'yxatdan o'tish"}</h2>
          <p>{isLogin ? 'Hisobingizga kiring' : "Yangi hisob yarating"}</p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Ismingiz</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismingizni kiriting"
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="submit-auth-btn">
            {isLogin ? 'Kirish' : "Ro'yxatdan o'tish"}
          </button>
        </form>
        
        <div className="modal-footer">
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)} 
            className="switch-mode-btn"
          >
            {isLogin ? "Hisobingiz yo'qmi? Ro'yxatdan o'ting" : "Hisobingiz bormi? Kirish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;