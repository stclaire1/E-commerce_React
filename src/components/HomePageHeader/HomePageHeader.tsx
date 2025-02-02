import React, { useContext, useState } from 'react';
import './HomePageHeader.css'
import logo from '../../../public/logo-full.svg'
import profilePic from '../../../public/profile-pic.jpg'
import { useAuth } from '../../services/context/Authentication/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../services/authServices';

function HomePageHeader() {
    const [menuOpen, setMenuOpen] = useState(true);

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

    const toggleMenu = () => {
        setMenuOpen((current) => !current);
    };

    return (
        <div className="homeHeaderContainer">
            <div>
            <button
                className="menuToggle"
                id="menuToggle"
                aria-label="Menu button"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
            >
                {menuOpen ? "☰" : "✖"}
            </button>
            <nav className={`navLinks ${menuOpen ? "" : "menuActive"}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleMenu} className="menuItem">Home</Link>
                    </li>
                    <li>
                        <Link to="/search" onClick={toggleMenu} className="menuItem">Search</Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={toggleMenu} className="menuItem">Explore Products</Link>
                    </li>
                    <li>
                        <Link to="/shoppingCart" onClick={toggleMenu} className="menuItem">Shopping Cart</Link>
                    </li>
                    {user ? (
                        <li>
                            <button onClick={handleLogout} className="signOutButton">Sign Out</button>
                        </li>
                    ) : (
                        <li>
                            <Link to="/login" onClick={toggleMenu} className="menuItem">Sign In</Link>
                        </li>
                    )}
                </ul>
            </nav>
            </div>
            <img src={logo} alt="Logo of the Audio App" />
            <img src={profilePic} alt="User profile picture" className="homeProfilePic"/>
        </div>
    )
}

export default HomePageHeader;