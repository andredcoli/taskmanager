// LoginPage.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    // You'll need to define onLogin and onRegister to handle submissions
    const onLogin = (credentials) => {/* ... */};
    const onRegister = (registrationData) => {/* ... */};

    return (
        <div className="login-container">
            {isLogin ? <LoginForm onLogin={onLogin} /> : <RegistrationForm onRegister={onRegister} />}
            <button onClick={toggleForm} className="switch-panel-btn">
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>
        </div>
    );
};

export default LoginPage;
