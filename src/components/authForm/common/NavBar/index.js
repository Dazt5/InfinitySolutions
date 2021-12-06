import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/static/logoinfinity.png';

import './styles.css';

export const NavBar = ({ login, signup }) => {

    const [mobileMenu, setHide] = useState(false);

    const handleMenu = () => {
        setHide(!mobileMenu);
    }

    return (
        <nav className="color">
            <div className="logo">
                <img src={Logo} alt="Logo infinity Solutions" />
            </div>
            <ul className={mobileMenu ? "nav-links nav-active" : "nav-links"}>
                <li>
                    <a href={"https://geraldovillalobos.github.io/InfinitySolutionsIndex/"}>HOME</a>
                </li>
                <li>
                    <a href={"https://geraldovillalobos.github.io/InfinitySolutionsIndex/#about"}>ABOUT</a>
                </li>
                <li>
                <a href={"https://geraldovillalobos.github.io/InfinitySolutionsIndex/#team"}>DEVELOPERS</a>
                </li>
                {signup && <li>
                    <Link to={"/signup"}>SIGN UP</Link>
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