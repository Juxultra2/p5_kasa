import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/about.scss'; // Pour le style

function About() {
    return (
        <section className="notFound">
            <Header />

            {/* comentaire */}
            <div className="a_propos">
                <h1>À propos de Kasa</h1>
            </div>

            <Footer />
        </section>
    );
}

export default About;