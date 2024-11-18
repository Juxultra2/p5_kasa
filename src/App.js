import './assets/styles/App.scss';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Importation des composants des pages
// import Home from './pages/Home';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Route pour la page d'accueil */}
//         <Route path="/" element={<Home />} />

//         {/* Route pour la page À propos */}
//         <Route path="/about" element={<About />} />

//         {/* Route pour les erreurs */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import AppRouter from './routes/Router';

function App() {
  return <AppRouter />;
}

export default App;