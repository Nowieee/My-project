import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import { RequestContextProvider } from './components/RequestContext';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Dashboard from './components/Dashboard';
import DoneRequests from './components/DoneRequest';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');


  const handleLogin = (loggedInUsername) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername(''); // Clear username
    setIsLoggedIn(false);
  };

 

  return (
    <RequestContextProvider>
      <div className="App">
        <BrowserRouter>
          {isLoggedIn && (
            <Header username={username} onLogout={handleLogout}/>
          )}
          <Routes>
            <Route
              path="/"
              element={<Login onLogin={handleLogin} />}
            />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Use the Dashboard component here */}
            <Route path="/sidebar/*" element={<AuthenticatedRoutes />} />
            <Route path="/done-requests" element={<DoneRequests doneRequests={DoneRequests} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RequestContextProvider>
  );
}



export default App;
