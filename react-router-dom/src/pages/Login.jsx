import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username || !password) {
      window.alert('Both username and password are required.');
      return;
    }

    window.alert(`Logging in with Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password" 
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input className="button" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
