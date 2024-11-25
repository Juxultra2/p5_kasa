import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_kasa from '../assets/svg/logo_kasa.svg';
import '../assets/styles/components/header.scss'; // Pour le style


function Header() {
    return (
        <header>
            <img src={logo_kasa} className="logo" alt="Logo du site" />
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                        À Propos
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;