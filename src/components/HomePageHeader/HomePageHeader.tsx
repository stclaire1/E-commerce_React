import React, { useContext } from 'react';
import './HomePageHeader.css'
import logo from '../../../public/logo-full.svg'
import profilePic from '../../../public/profile-pic.jpg'
import { AuthContext } from '../../services/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../services/authServices';

function HomePageHeader() {

    const user = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();  // Chama a função de logout
            navigate('/login');  // Redireciona para a página de login após logout
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };


    return(
        <div className="homeHeaderContainer">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/products">Explore Products</Link>
                    </li>
                    <li>
                        <Link to="/shoppingcart">Shopping Cart</Link>
                    </li>
                    {user ? (
                        // se o usuário estiver logado exibe "Sign Out"
                        <li><button onClick={handleLogout}>Sign Out</button></li>
                    ) : (
                        // caso contrário exibe "Sign In"
                        <li><Link to="/login">Sign In</Link></li>
                    )}
                </ul>
            </nav>
            <img src={logo} alt="Logo of the Audio App" />
            <img src={profilePic} alt="User profile picture" />
        </div>
    )
}

export default HomePageHeader;