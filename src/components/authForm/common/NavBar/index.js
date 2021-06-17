import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/static/logo.png';

import './styles.css';

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
                    <Link to={"#"}>Home</Link>
                </li>
                <li>
                    <Link to={"#"}>About</Link>
                </li>
                <li>
                    <Link to={"#"}>Contact</Link>
                </li>
                {signup && <li>
                    <Link to={"/signup"}>Sign Up</Link>
                </li>}

                {login && <li>
                    <Link to={"/login"}>Log In</Link>
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