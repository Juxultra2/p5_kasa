import React from 'react';
import logo_kasablanc from '../assets/svg/logo_kasablanc.svg';


function Footer() {
    return (
        <footer>
            <img src={logo_kasablanc} alt="Logo du site" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
export default Footer;