import React from 'react';
import { Link } from 'react-router-dom'; // pour naviguer vers la page correspondante
import logementsData from '../logements.json'; // Import du fichier JSON local




function Logement_card() {
    return (
        <section className="logement-cards">
            {logementsData.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id} className="logement-card">
                    <img src={logement.cover} alt={logement.title} className="logement-cover" />
                    <h2>{logement.title}</h2>
                </Link>
            ))}
        </section>
    );
}

export default Logement_card;