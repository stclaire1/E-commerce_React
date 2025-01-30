import React from 'react';
import './AuthTitle.css';
import { useNavigate } from 'react-router-dom';

function AuthTitle() {
    const navigate = useNavigate();

    return (
        <div className="authTitleContainer">
            <h1 onClick={() => navigate('/')}>Audio</h1>
            <p>It's modular and designed to last</p>
        </div>
    )
}

export default AuthTitle;