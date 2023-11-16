// App.js
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import YourBoards from './components/YourBoards';
import './App.css';

function App() {
  const [user, setUser] = useState(null); // User state to manage login status

  // Example login handler (to be replaced with actual authentication logic)
  const handleLogin = (credentials) => {
    console.log('Login credentials:', credentials);
    // Placeholder for authentication logic
    setUser({ name: 'Logged In User' });
  };

  // Example logout handler
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <YourBoards onLogout={handleLogout} /> 
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
