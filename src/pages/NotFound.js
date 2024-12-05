import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/notFound.scss'; // Pour le style

function NotFound() {
    return (
        <section className="notFound">
            <Header />

            {/* comentaire */}
            <div className="the404">
                <h1>404</h1>
                <p>Oups! La page que vous&nbsp;demandez&nbsp;n'existe&nbsp;pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>

            <Footer />
        </section>
    );
}

export default NotFound;



