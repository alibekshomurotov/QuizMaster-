import React, { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import TestCard from './components/TestCard';
import Result from './components/Result';
import AddCardForm from './components/AddCardForm';
import MyCardsList from './components/MyCardsList';
import AuthModal from './components/AuthModal';
import Achievements from './components/Achievements';
import Leaderboard from './components/Leaderboard';
import { questionsData, availableLanguages } from './data/questionsData';
import './App.css';

const App = () => {
  const [mode, setMode] = useState('select');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  
  // Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  
  // Confetti
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Timer
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);
  
  // Leaderboard
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboard, setLeaderboard] = useState(() => {
    const saved = localStorage.getItem('leaderboard');
    return saved ? JSON.parse(saved) : [];
  });
  
  // Achievements
  const [showAchievements, setShowAchievements] = useState(false);
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem('achievements');
    return saved ? JSON.parse(saved) : {
      firstTest: false,
      perfectScore: false,
      tenTests: false,
      hundredCards: false,
      quickLearner: false,
      languageMaster: false
    };
  });

  const [userCards, setUserCards] = useState(() => {
    const saved = localStorage.getItem('userCards');
    return saved ? JSON.parse(saved) : [];
  });

  const [userCardsByLanguage, setUserCardsByLanguage] = useState(() => {
    const saved = localStorage.getItem('userCardsByLanguage');
    return saved ? JSON.parse(saved) : {};
  });

  const [testHistory, setTestHistory] = useState(() => {
    const saved = localStorage.getItem('testHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    let interval;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      handleTimeOut();
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const checkAchievements = (score, language) => {
    const newAchievements = { ...achievements };
    let hasNew = false;

    if (!newAchievements.firstTest && testHistory.length === 0) {
      newAchievements.firstTest = true;
      hasNew = true;
      setTimeout(() => alert('🏆 Yutuq! "Birinchi test" badge ini qo\'lga kiritdingiz!'), 500);
    }

    if (!newAchievements.perfectScore && score.percentage === 100) {
      newAchievements.perfectScore = true;
      hasNew = true;
      triggerConfetti();
      setTimeout(() => alert('🏆 Yutuq! "Mukammal" badge ini qo\'lga kiritdingiz!'), 500);
    }

    if (!newAchievements.tenTests && testHistory.length >= 9) {
      newAchievements.tenTests = true;
      hasNew = true;
      setTimeout(() => alert('🏆 Yutuq! "10 ta test" badge ini qo\'lga kiritdingiz!'), 500);
    }

    if (!newAchievements.hundredCards && userCards.length >= 100) {
      newAchievements.hundredCards = true;
      hasNew = true;
      setTimeout(() => alert('🏆 Yutuq! "100 ta karta" badge ini qo\'lga kiritdingiz!'), 500);
    }

    if (hasNew) {
      setAchievements(newAchievements);
      localStorage.setItem('achievements', JSON.stringify(newAchievements));
      updateLeaderboard(score.percentage);
    }
  };

  const updateLeaderboard = (score) => {
    if (currentUser) {
      const newEntry = {
        id: currentUser.id,
        name: currentUser.name,
        score: score,
        date: new Date().toISOString(),
        tests: (currentUser.tests || 0) + 1
      };
      
      const newLeaderboard = [...leaderboard, newEntry];
      newLeaderboard.sort((a, b) => b.score - a.score);
      const top10 = newLeaderboard.slice(0, 10);
      
      setLeaderboard(top10);
      localStorage.setItem('leaderboard', JSON.stringify(top10));
      
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.id === currentUser.id);
      if (userIndex !== -1) {
        users[userIndex].score = score;
        users[userIndex].tests = (users[userIndex].tests || 0) + 1;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  };

  const handleTimeOut = () => {
    const currentQ = currentQuestions[currentQuestionIndex];
    const newAnswer = {
      questionText: currentQ.question,
      userAnswer: "Vaqt tugadi",
      correctAnswer: currentQ.answer,
      isCorrect: false,
      questionId: currentQ.id,
      language: selectedLanguage
    };
    
    const newAnswers = [...userAnswers, newAnswer];
    setUserAnswers(newAnswers);
    
    if (currentQuestionIndex + 1 < currentQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      finishTest(newAnswers);
    }
  };

  const finishTest = (answers) => {
    const correctCount = answers.filter(a => a.isCorrect === true).length;
    const score = {
      correct: correctCount,
      total: currentQuestions.length,
      percentage: (correctCount / currentQuestions.length) * 100,
      totalTime: 30 * currentQuestions.length - timeLeft
    };
    
    saveTestResult(score, selectedLanguage, answers);
    checkAchievements(score, selectedLanguage);
    
    if (score.percentage === 100) {
      triggerConfetti();
    }
    
    setTestCompleted(true);
    setTimerActive(false);
  };

  const handleAnswer = (answerData) => {
    const currentQ = currentQuestions[currentQuestionIndex];
    
    const newAnswer = {
      questionText: currentQ.question,
      userAnswer: answerData.userAnswer,
      correctAnswer: currentQ.answer,
      isCorrect: answerData.isCorrect,
      questionId: currentQ.id,
      language: selectedLanguage
    };
    
    const newAnswers = [...userAnswers, newAnswer];
    setUserAnswers(newAnswers);
    
    if (currentQuestionIndex + 1 < currentQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    } else {
      finishTest(newAnswers);
    }
  };

  const prepareUniqueQuestions = (languageId) => {
    const defaultQuestions = questionsData[languageId]?.questions || [];
    const userQuestions = (userCardsByLanguage[languageId] || []).map((card, idx) => ({
      id: `user_${card.id}_${idx}`,
      question: card.question,
      answer: card.answer,
      options: card.options || [card.answer, "Bilmayman", "Javob C", "Javob D"],
      explanation: card.explanation || `Bu siz qo'shgan karta. To'g'ri javob: ${card.answer}`,
      isUserCard: true,
      questionType: card.questionType || 'text',
    }));
    
    const allQuestions = [...defaultQuestions, ...userQuestions];
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    return allQuestions;
  };

  const handleLanguageSelect = (languageId) => {
    const questions = prepareUniqueQuestions(languageId);
    setCurrentQuestions(questions);
    setSelectedLanguage(languageId);
    setMode('test');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTestCompleted(false);
    setTimeLeft(30);
    setTimerActive(true);
  };

  const saveTestResult = (score, language, answers) => {
    const testResult = {
      id: Date.now(),
      date: new Date().toISOString(),
      language: language,
      score: score,
      answers: answers,
      totalQuestions: currentQuestions.length
    };
    setTestHistory([testResult, ...testHistory]);
    if (currentUser) {
      const userHistory = JSON.parse(localStorage.getItem(`testHistory_${currentUser.email}`) || '[]');
      userHistory.unshift(testResult);
      localStorage.setItem(`testHistory_${currentUser.email}`, JSON.stringify(userHistory));
    }
  };

  const handleAddCard = (newCard) => {
    const newUserCard = {
      id: Date.now(),
      question: newCard.question,
      answer: newCard.answer,
      options: newCard.options,
      questionType: newCard.questionType,
      category: newCard.category,
      createdAt: new Date().toISOString(),
      language: selectedLanguage || 'general'
    };
    
    setUserCards([...userCards, newUserCard]);
    
    const updatedLanguageCards = {
      ...userCardsByLanguage,
      [selectedLanguage || 'general']: [
        ...(userCardsByLanguage[selectedLanguage || 'general'] || []),
        newUserCard
      ]
    };
    setUserCardsByLanguage(updatedLanguageCards);
  };

  const handleDeleteCard = (cardId, language) => {
    setUserCards(userCards.filter(card => card.id !== cardId));
    
    const updatedLanguageCards = {
      ...userCardsByLanguage,
      [language]: (userCardsByLanguage[language] || []).filter(card => card.id !== cardId)
    };
    setUserCardsByLanguage(updatedLanguageCards);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTestCompleted(false);
    setTimeLeft(30);
    setTimerActive(true);
  };

  const handleBackToLanguages = () => {
    setSelectedLanguage(null);
    setMode('select');
    setTestCompleted(false);
    setUserAnswers([]);
    setTimerActive(false);
  };

  const calculateScore = () => {
    const correctCount = userAnswers.filter(answer => answer.isCorrect === true).length;
    return {
      correct: correctCount,
      total: currentQuestions.length,
      percentage: (correctCount / currentQuestions.length) * 100
    };
  };

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setShowAuthModal(false);
      loadUserData(user.email);
    } else {
      alert('Email yoki parol xato!');
    }
  };

  const handleSignUp = (email, password, name) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      alert('Bu email allaqachon ro\'yxatdan o\'tgan!');
      return;
    }
    const newUser = { email, password, name, id: Date.now(), score: 0, tests: 0 };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setIsLoggedIn(true);
    setCurrentUser(newUser);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    saveUserData();
  };

  const saveUserData = () => {
    if (currentUser) {
      localStorage.setItem(`userCards_${currentUser.email}`, JSON.stringify(userCards));
      localStorage.setItem(`userCardsByLanguage_${currentUser.email}`, JSON.stringify(userCardsByLanguage));
      localStorage.setItem(`testHistory_${currentUser.email}`, JSON.stringify(testHistory));
      localStorage.setItem(`achievements_${currentUser.email}`, JSON.stringify(achievements));
    }
  };

  const loadUserData = (email) => {
    const savedCards = localStorage.getItem(`userCards_${email}`);
    const savedCardsByLang = localStorage.getItem(`userCardsByLanguage_${email}`);
    const savedHistory = localStorage.getItem(`testHistory_${email}`);
    const savedAchievements = localStorage.getItem(`achievements_${email}`);
    
    if (savedCards) setUserCards(JSON.parse(savedCards));
    if (savedCardsByLang) setUserCardsByLanguage(JSON.parse(savedCardsByLang));
    if (savedHistory) setTestHistory(JSON.parse(savedHistory));
    if (savedAchievements) setAchievements(JSON.parse(savedAchievements));
  };

  const Confetti = () => {
    if (!showConfetti) return null;
    return (
      <div className="confetti-container">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px'
            }}
          />
        ))}
      </div>
    );
  };

  // SELECT MODE - TESTLAR BIRINCHI
  if (mode === 'select') {
    return (
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Confetti />
        
        <nav className="navbar">
          <div className="nav-brand">
            <span className="logo">📚 SmartLearn</span>
          </div>
          
          <div className="nav-controls">
            <button onClick={() => setDarkMode(!darkMode)} className="icon-btn" title={darkMode ? 'Yorug\' rejim' : 'Tungi rejim'}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setShowAchievements(true)} className="icon-btn" title="Yutuqlar">🏆</button>
            <button onClick={() => setShowLeaderboard(true)} className="icon-btn" title="Reyting">📊</button>
            
            {isLoggedIn ? (
              <div className="user-info">
                <span className="user-name">👋 {currentUser?.name}</span>
                <button onClick={handleLogout} className="logout-btn">Chiqish</button>
              </div>
            ) : (
              <div className="auth-buttons">
                <button onClick={() => setShowAuthModal(true)} className="login-btn">Kirish</button>
                <button onClick={() => setShowAuthModal(true)} className="signup-btn">Ro'yxatdan o'tish</button>
              </div>
            )}
          </div>
        </nav>

        <Achievements isOpen={showAchievements} onClose={() => setShowAchievements(false)} achievements={achievements} />
        <Leaderboard isOpen={showLeaderboard} onClose={() => setShowLeaderboard(false)} leaderboard={leaderboard} currentUser={currentUser} />
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} onLogin={handleLogin} onSignUp={handleSignUp} />

        <div className="hero-section">
          <h1>🎓 Bilimlaringizni Mustahkamlang</h1>
          <p>Interaktiv testlar va shaxsiy kartalar yordamida samarali o'rganing</p>
        </div>

        <div className="stats-preview">
          <div className="stat-card">
            <span className="stat-icon">📝</span>
            <span className="stat-value">{userCards.length}</span>
            <span className="stat-label">Mening kartalarim</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">✅</span>
            <span className="stat-value">{testHistory.length}</span>
            <span className="stat-label">Bajarilgan testlar</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏆</span>
            <span className="stat-value">{Object.values(achievements).filter(a => a === true).length}</span>
            <span className="stat-label">Yutuqlar</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🎯</span>
            <span className="stat-value">
              {testHistory.length > 0 ? Math.round(testHistory.reduce((acc, t) => acc + t.score.percentage, 0) / testHistory.length) : 0}%
            </span>
            <span className="stat-label">O'rtacha natija</span>
          </div>
        </div>

        {/* TESTLAR - BIRINCHI */}
        <div className="tests-section">
          <h2 className="section-title">
            <span className="title-icon">📖</span> Test topshirish
            <span className="title-badge">Asosiy</span>
          </h2>
          <p className="section-subtitle">5 xil dasturlash tili bo'yicha bilimingizni sinab ko'ring</p>
          <LanguageSelector onSelectLanguage={handleLanguageSelect} />
        </div>

        {/* MENING KARTALARIM - KEYIN */}
        <div className="mycards-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">✏️</span> Mening kartalarim
            </h2>
            <button onClick={() => setMode('mycards')} className="view-all-btn">
              Barchasini ko'rish →
            </button>
          </div>
          <p className="section-subtitle">O'z so'z, formula va misollaringizni qo'shing</p>
          
          {userCards.length > 0 ? (
            <div className="preview-cards">
              {userCards.slice(0, 4).map(card => (
                <div key={card.id} className="preview-card">
                  <div className="preview-category">{card.category || 'general'}</div>
                  <div className="preview-question">{card.question.substring(0, 50)}...</div>
                </div>
              ))}
              {userCards.length > 4 && (
                <div className="preview-card more-card">
                  <div className="more-count">+{userCards.length - 4}</div>
                  <div>ta ko'proq</div>
                </div>
              )}
            </div>
          ) : (
            <div className="empty-cards">
              <p>📭 Hali hech qanday karta yo'q</p>
              <button onClick={() => setMode('mycards')} className="create-btn">
                + Birinchi kartani yaratish
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // MYCARDS MODE
  if (mode === 'mycards') {
    return (
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <nav className="navbar">
          <div className="nav-brand" onClick={() => setMode('select')} style={{cursor: 'pointer'}}>
            <span className="logo">📚 SmartLearn</span>
          </div>
          <div className="nav-controls">
            <button onClick={() => setDarkMode(!darkMode)} className="icon-btn">{darkMode ? '☀️' : '🌙'}</button>
            {isLoggedIn && <span className="user-name">👋 {currentUser?.name}</span>}
          </div>
        </nav>

        <div className="mycards-page">
          <div className="page-header">
            <button onClick={() => setMode('select')} className="back-btn">← Bosh sahifaga</button>
            <h1>✏️ Mening kartalarim</h1>
          </div>
          
          <AddCardForm onAddCard={handleAddCard} />
          
          <MyCardsList 
            cards={userCards}
            onDeleteCard={handleDeleteCard}
            onStartTest={(language) => {
              const questions = prepareUniqueQuestions(language);
              setCurrentQuestions(questions);
              setSelectedLanguage(language);
              setMode('test');
              setCurrentQuestionIndex(0);
              setUserAnswers([]);
              setTestCompleted(false);
              setTimeLeft(30);
              setTimerActive(true);
            }}
          />
        </div>
      </div>
    );
  }

  // TEST MODE
  if (mode === 'test' && selectedLanguage) {
    if (testCompleted) {
      const score = calculateScore();
      return (
        <div className={`app ${darkMode ? 'dark' : ''}`}>
          <Confetti />
          <Result 
            score={score}
            userAnswers={userAnswers}
            questions={currentQuestions}
            languageName={selectedLanguage === 'general' ? 'Mening kartalarim' : availableLanguages.find(l => l.id === selectedLanguage)?.name || selectedLanguage}
            userCardsCount={(userCardsByLanguage[selectedLanguage] || []).length}
            onRestart={handleRestart}
            onBackToLanguages={handleBackToLanguages}
          />
        </div>
      );
    }

    return (
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Confetti />
        
        <nav className="navbar">
          <div className="nav-brand" onClick={() => setMode('select')} style={{cursor: 'pointer'}}>
            <span className="logo">📚 SmartLearn</span>
          </div>
          <div className="nav-controls">
            <button onClick={() => setDarkMode(!darkMode)} className="icon-btn">{darkMode ? '☀️' : '🌙'}</button>
            <button onClick={() => setMode('select')} className="exit-test-btn">✕ Testdan chiqish</button>
          </div>
        </nav>

        <div className="test-page">
          <div className="test-header">
            <div className="test-title">
              {selectedLanguage === 'general' ? '📝 Mening kartalarim testi' : `📚 ${availableLanguages.find(l => l.id === selectedLanguage)?.name || selectedLanguage} testi`}
            </div>
            <div className={`timer ${timeLeft <= 10 ? 'warning' : ''}`}>⏱️ {timeLeft} soniya</div>
          </div>
          
          <TestCard 
            key={currentQuestionIndex}
            question={currentQuestions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={currentQuestions.length}
            onAnswer={handleAnswer}
            isUserCard={currentQuestions[currentQuestionIndex]?.isUserCard}
            timeLeft={timeLeft}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default App;