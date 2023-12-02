import React from 'react';

const LoginForm = ({ onLogin, onSwitchToRegister }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(/* credentials */);
    };

    return (
        <div className="login-panel">
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Username" />
                <input type="password" className="form-control" placeholder="Password" />
                <button type="submit" className="login-btn">Login</button>
            </form>
            <button onClick={onSwitchToRegister} className="switch-btn">Sign Up</button>
        </div>
    );
};

export default LoginForm;
