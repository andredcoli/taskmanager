// RegistrationForm.js
import React from 'react';

const RegistrationForm = ({ onRegister }) => {
    // You can add state and form handlers here

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the registration submission
        onRegister(/* registration data */);
    };

    return (
        <form className="registration-panel" onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="Username" />
            <input type="password" className="form-control" placeholder="Password" />
            <input type="password" className="form-control" placeholder="Confirm Password" />
            <button type="submit" className="register-btn">Register</button>
        </form>
    );
};

export default RegistrationForm;
