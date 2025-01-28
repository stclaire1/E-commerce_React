import React, { useRef } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { signIn, createAccount } from '../../services/authServices';
import './AuthForm.css';

interface AuthLoginProps {
    isLogin: boolean;
}

function AuthForm({ isLogin }: AuthLoginProps) {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
    
        if (!email || !password) {
          console.error("Email e senha são obrigatórios.");
          return;
        }
    
        try {
          if (isLogin) {
            // faz o login
            const user = await signIn(email, password);
            console.log("Usuário autenticado:", user);
            navigate("/");  // redireciona para a home após login
          } else {
            // cria um novo usuario
            const user = await createAccount(email, password);
            console.log("Novo usuário criado:", user);
            navigate("/login");  // redireciona para o login após criação do usuário
          }
        } catch (error) {
          console.error("Erro ao fazer a operação:", error);
        }
      }; 

    return (
        <form onSubmit={handleSubmit} className="authFormContainer">
            <div>
                {/* <FeatherIcon icon="mail" /> */}
                <input type="email" placeholder="Email" ref={emailRef} className="input"/>
            </div>
            <div>
                {/* <FeatherIcon icon="lock" /> */}
                <input type="password" placeholder="Password" ref={passwordRef} className="input"/>
            </div>
            <Link to="#" className="customLink">Forgot Password</Link>
            <Button type="submit" btnText={isLogin ? "Sign in" : "Sign Up"}/>
        </form>
    );
}

export default AuthForm;