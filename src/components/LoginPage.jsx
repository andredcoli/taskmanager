import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const LoginPage = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);

    const switchToRegister = () => setIsLogin(false);
    const switchToLogin = () => setIsLogin(true);

    return (
        <div className="login-container">
            {isLogin ? 
                <LoginForm onLogin={onLogin} onSwitchToRegister={switchToRegister} /> : 
                <RegistrationForm onSwitchToLogin={switchToLogin} />
            }
        </div>
    );
};

export default LoginPage;
