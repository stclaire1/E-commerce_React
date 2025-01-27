import React from 'react';
import AuthTitle from '../../components/AuthTitle/AuthTitle';
import AuthForm from '../../components/AuthForm/AuthForm';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import HaveAccount from '../../components/HaveAccount/HaveAccount';
import './SignUp.css';

function SignUp() {
    return(
        <section className="signupContainer">
            <AuthTitle />
            <AuthForm isLogin={false}/>
            <GoogleButton />
            <HaveAccount question="If you have an account?" link="Sign In here" linkPath="/login" />
        </section>
    )
}

export default SignUp;