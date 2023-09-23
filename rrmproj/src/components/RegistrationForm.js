import React, { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new user object
    const newUser = {
      username,
      password, 
    };
    // Call the onRegister function to handle user registration
    onRegister(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
