import React from 'react';
import logo_kasa from '../assets/svg/logo_kasa.svg';


function Header() {
    return (
        <header>
            <img src={logo_kasa} alt="Logo du site" />
            <ul>
                <li>
                    Accueil
                </li>
                <li>
                    A Propos
                </li>
            </ul>
        </header>
    );
}

export default Header;