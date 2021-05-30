import React, { useState } from 'react';
import Logo from '../../../assets/static/logo.png'

import './styles.css'

export const NavBar = ({ login, signup }) => {

    const [mobileMenu, setHide] = useState(false);

    const handleMenu = () => {
        setHide(!mobileMenu);
    }

    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo infinity Solutions" />
            </div>
            <ul className={mobileMenu ? "nav-links nav-active" : "nav-links"}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                {login && <li>
                    <a href="/signup">Sign Up</a>
                </li>}

                {signup && <li>
                    <a href="/login">Log In</a>
                </li>}

            </ul>
            <div className={mobileMenu ? "burger toggle" : "burger"} onClick={handleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}