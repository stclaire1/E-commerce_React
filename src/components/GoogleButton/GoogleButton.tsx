import React from 'react';
import googleIcon from '../../../public/google-logo.svg'
import './GoogleButton.css';

function GoogleButton() {
    return (
        <div className="googleButtonContainer">
            <img src={googleIcon} alt="Logo da Google" />
            <p>Sign in with Google</p>
        </div>
    )
}

export default GoogleButton;