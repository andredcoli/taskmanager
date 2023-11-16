import React from 'react';

const LoginForm = ({ onLogin }) => {
    // You can add state and form handlers here

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the login submission
        onLogin(/* credentials */);
    };

    return (
        <form className="login-panel" onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="Username" />
            <input type="password" className="form-control" placeholder="Password" />
            <button type="submit" className="login-btn">Login</button>
        </form>
    );
};

export default LoginForm;
