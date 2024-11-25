import React from 'react';
import { Link } from 'react-router-dom'; // pour naviguer vers la page correspondante
import logementsData from '../logements.json'; // Import du fichier JSON local
import '../assets/styles/components/logement_card.scss'; // Pour le style



function Logement_card() {
    return (
        <section className="logementCards">
            {logementsData.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id} className="logementCards-card">
                    <img src={logement.cover} alt={logement.title} className="logementCards-card-cover" />
                    <h2>{logement.title}</h2>
                </Link>
            ))}
        </section>
    );
}

export default Logement_card;