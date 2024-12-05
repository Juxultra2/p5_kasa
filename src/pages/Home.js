import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logement_card from '../components/Logement_card';
import '../assets/styles/pages/home.scss'; // Pour le style

function Home() {
    return (
        <section className="home">
            <Header />

            <section className="home-contenu">
                {/* Bannière */}
                <div className="home-contenu-banner">
                    <h1>Chez vous, partout&nbsp;et&nbsp;ailleurs</h1>
                </div>
                <div className="home-contenu-logements">
                    <Logement_card />
                </div>
            </section>
            
            <Footer />
        </section>
    );
}

export default Home;