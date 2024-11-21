import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/home.scss'; // Pour le style

function Home() {
    return (
        <section className="home">
            <Header />

            <h1>Bienvenue sur la page d'accueil !</h1>

            <Footer />
        </section>
    );
}

export default Home;