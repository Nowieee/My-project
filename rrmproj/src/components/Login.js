import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
      if (username === 'admin' && password === 'admin') {
        setIsLoggedIn(true);
        navigate('/sidebar', { state: { userName: username } });
      } else {
        alert('Invalid credentials. Please try again.');
      }
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
      };
    
      if (loggedIn) {
        return (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        );
      }

  return (
    <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-md-6 side-image">
              <div className="text">
                <p>Request for Repair and Maintenance</p>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="input-box">
                <header>USER LOGIN</header>
                <form onSubmit={handleLogin}>
                  <div className="input-field">
                    <input
                      type="text"
                      className="input"
                      id="email"
                      required
                      autoComplete="off"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="email">User</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="password"
                      className="input"
                      id="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field">
                    <input type="submit" className="submit" value={"SIGN IN"} />
                  </div>
                </form>
                <div className="signin">
                  <span>Don't have an account? Contact Administrator.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;
