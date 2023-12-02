import React from 'react';

const RegistrationForm = ({ onRegister, onSwitchToLogin }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister(/* registration data */);
    };

    return (
        <div className="registration-panel">
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Username" />
                <input type="password" className="form-control" placeholder="Password" />
                <input type="password" className="form-control" placeholder="Confirm Password" />
                <button type="submit" className="register-btn">Register</button>
            </form>
            <button onClick={onSwitchToLogin} className="switch-btn">Log In</button>
        </div>
    );
};

export default RegistrationForm;
