import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_kasa from '../assets/svg/logo_kasa.svg';
import logo_kasa_mobile from '../assets/svg/logo_kasa_mobile.svg';
import '../assets/styles/components/header.scss'; // Pour le style


function Header() {
    return (
        <header>
            <img src={logo_kasa} className="logo_pc" alt="Logo du site" />
            <img src={logo_kasa_mobile} className="logo_mobile" alt="Logo du site" />
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