import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/notFound.scss'; // Pour le style

function NotFound() {
    return (
        <section className="notFound">
            <Header />

            {/* comentaire */}
            <div className="404">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>

            <Footer />
        </section>
    );
}

export default NotFound;



