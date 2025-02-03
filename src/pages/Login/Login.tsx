import React from 'react';
import AuthTitle from '../../components/AuthTitle/AuthTitle';
import AuthForm from '../../components/AuthForm/AuthForm';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import HaveAccount from '../../components/HaveAccount/HaveAccount';
import './Login.css';

function Login() {
    return(
        <section className="loginContainer">
            <AuthTitle />
            <AuthForm isLogin={true}/>
            <GoogleButton />
            <HaveAccount question="Didn't have any account?" link="Sign Up here" linkPath="/signup" />
        </section>
    )
}

export default Login;