import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Typewriter from './Typewriter'; // Make sure to import Typewriter

const LoginPage = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);

    const switchToRegister = () => setIsLogin(false);
    const switchToLogin = () => setIsLogin(true);

    return (
        <div className="login-container">
            <Typewriter text="KanbanFriend" />
            {isLogin ? 
                <LoginForm onLogin={onLogin} onSwitchToRegister={switchToRegister} /> : 
                <RegistrationForm onSwitchToLogin={switchToLogin} />
            }
        </div>
    );
};

export default LoginPage;
