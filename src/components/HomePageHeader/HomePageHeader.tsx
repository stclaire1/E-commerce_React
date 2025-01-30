import React, { useContext } from 'react';
import './HomePageHeader.css'
import logo from '../../../public/logo-full.svg'
import profilePic from '../../../public/profile-pic.jpg'
import { useAuth } from '../../services/context/Authentication/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../services/authServices';

function HomePageHeader() {

    const user = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();  // logout function
            navigate('/login');  // redirect to login after logout
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
                        <Link to="/shoppingCart">Shopping Cart</Link>
                    </li>
                    {user ? (
                        // if user is loggeed in "Sign Out"
                        <li><button onClick={handleLogout}>Sign Out</button></li>
                    ) : (
                        // if not "Sign In"
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