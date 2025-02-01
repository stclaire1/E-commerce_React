import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { signIn, createAccount } from '../../services/authServices';
import './AuthForm.css';

interface AuthLoginProps {
  isLogin: boolean;
}

function AuthForm({ isLogin }: AuthLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      console.error("Email and password are required.");
      return;
    }

    try {
      if (isLogin) {
        // log the user in
        const user = await signIn(email, password);
        console.log("User authenticated:", user);
        navigate("/");  // redirect to home after login
      } else {
        // create a new user
        const user = await createAccount(email, password);
        console.log("New user created:", user);
        navigate("/login");  // redirect to login after creating a new user
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="authFormContainer">
      <div>
        {/* <FeatherIcon icon="mail" /> */}
        <input type="email" placeholder="Email" value={email} className="input" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        {/* <FeatherIcon icon="lock" /> */}
        <input type="password" placeholder="Password" value={password} className="input" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <Link to="#" className="customLink">Forgot Password</Link>
      <Button type="submit" btnText={isLogin ? "Sign in" : "Sign Up"} />
    </form>
  );
}

export default AuthForm;