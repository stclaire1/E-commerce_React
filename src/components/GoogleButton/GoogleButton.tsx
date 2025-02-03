import React, { useContext, useEffect } from 'react';
import googleIcon from '../../../public/google-logo.svg'
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from '../../services/context/Authentication/AuthProvider'
import { useNavigate } from "react-router-dom";
import './GoogleButton.css';
import { useAuth } from '../../services/context/Authentication/AuthContext';

function GoogleButton() {

    const navigate = useNavigate();
    const user = useAuth();
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider);
      };
    
      if (user) {
        navigate("/");
        return null;
      }

    return (
        <div className="googleButtonContainer" onClick={handleGoogleSignIn}>
            <img src={googleIcon} alt="Logo da Google" />
            <p>Sign in with Google</p>
        </div>
    )
}

export default GoogleButton;