import React from 'react';
import { Link } from 'react-router-dom';
import logo_kasa from '../assets/svg/logo_kasa.svg';


function Header() {
    return (
        <header>
            <img src={logo_kasa} alt="Logo du site" />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À Propos</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;