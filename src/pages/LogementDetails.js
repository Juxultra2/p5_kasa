import React from 'react';
import { useParams } from 'react-router-dom'; // permet de capturer une valeur dans l'URL
import logementsData from '../logements.json'; // Import du fichier JSON local
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
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
                    <img src={logement.pictures} alt={logement.title} className="logement-pictures" />
                </div>

                <div className="logementDetails-fiche-info">
                    <div className="logementDetails-fiche-info-top">
                        <div className="logementDetails-fiche-info-top-gauche">
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>
                            <ul>
                                    {logement.tags.map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))}
                                </ul>
                        </div> 
                        <div className="logementDetails-fiche-info-top-droite">
                            <div className="logementDetails-fiche-info-top-droite-profil">
                                <p>{logement.host.name}</p>
                                <img src={logement.host.picture} alt={logement.host.name} className="host-pictures" />
                            </div>
                            <p>Rating: {logement.rating}</p>
                        </div>
                    </div>
                    <div className="logementDetails-fiche-info-accordion">
                        <Accordion title="Description">
                            <p>{logement.description}</p>
                        </Accordion>

                        <Accordion title="Équipements">
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </Accordion>
                    </div>

                </div>
            </section>

            <Footer />
        </section>
    );
}

export default LogementDetails;