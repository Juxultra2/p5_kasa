import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants des pages
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
    return (
    <Router>
        <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Page À propos */}
        <Route path="/about" element={<About />} />

        {/* Page d'erreur */}
        <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    );
};

export default AppRouter;
