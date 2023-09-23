import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const { state } = location;
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState ('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  
  
  const handleLogout = () => {
    // Clear tokens, session data, and user-related information
    localStorage.removeItem('authToken');
    navigate('/');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      const formattedDate = now.toDateString();
      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (state && state.userName) {
      setUserName(state.userName);
    }
  }, [state]);

  return (
    <header>
      <div className="header-container">
        <div className="user-info">
          <div className="user-name">Hello {userName}</div>
          <div className="current-time">{currentDate} {currentTime}</div>
        </div>
        <div style={{ padding: '20px 5px' }}>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
