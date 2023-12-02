// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import YourBoards from './components/YourBoards';
import Board from './components/Board';
import './App.css';

function App() {
  const [user, setUser] = useState(null); // manage login status

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
    <Router>
        <div className="App">
            <Routes> {/* Replace Switch with Routes */}
                <Route path="/board/:id" element={<Board />} /> {/* Updated Route Syntax */}
                <Route path="/" element={user ? <YourBoards onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />} />
            </Routes>
        </div>
    </Router>
);
}


export default App;
