import React from 'react';
import { useParams } from 'react-router-dom'; // permet de capturer une valeur dans l'URL
import logementsData from '../logements.json'; // Import du fichier JSON local
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/logementDetails.scss'; // Pour le style

function LogementDetails() {
    // Récupération de l'id du logement dans l'URL
    const { id } = useParams();

    // Recherche du logement correspondant à l'id
    const logement = logementsData.find(logement => logement.id === id);

    // Si le logement n'est pas trouvé
    if (!logement) {
        return <p>Logement non trouvé</p>;
    }

    return (
        <section className="logementDetails">
            <Header />

            <section className="logementDetails-fiche">
                <div className="logementDetails-fiche-carrousel">
                    <img src={logement.cover} alt={logement.title} className="logement-cover" />
                </div>

                <div className="logementDetails-fiche-info">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <p>{logement.description}</p>
                    <p>Rating: {logement.rating}</p>
                    <p><strong>Équipements:</strong> {logement.equipments.join(", ")}</p>
                </div>
            </section>

            <Footer />
        </section>
    );
}

export default LogementDetails;