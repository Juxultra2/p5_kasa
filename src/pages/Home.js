import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logement_card from '../components/Logement_card';
import '../assets/styles/pages/home.scss'; // Pour le style

function Home() {
    return (
        <section className="home">
            <Header />

            {/* Bannière */}
            <div className="home-banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="home-logment-card">
                <Logement_card />
            </div>
            <Footer />
        </section>
    );
}

export default Home;