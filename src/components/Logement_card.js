import React from 'react';
import logementsData from '../logements.json'; // Import du fichier JSON local




function Logement_card() {
    return (
        <section className="logement-cards">
            {logementsData.map((logement) => (
                <article key={logement.id} className="logement-card">
                    <img src={logement.cover} alt={logement.title} className="logement-cover" />
                    <h2>{logement.title}</h2>
                </article>
            ))}
        </section>
    );
}

export default Logement_card;