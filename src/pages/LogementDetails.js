import React, { useState } from 'react'; // Ajout de useState
import { useParams } from 'react-router-dom'; // permet de capturer une valeur dans l'URL
import logementsData from '../logements.json'; // Import du fichier JSON local
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import PrevIcon from '../assets/svg/vector-prev.svg';
import NextIcon from '../assets/svg/vector-next.svg';
import EtoileRouge from '../assets/svg/etoile_red.svg';
import EtoileGrise from '../assets/svg/etoile_gray.svg';
import '../assets/styles/pages/logementDetails.scss'; // Pour le style



function generateStars(rating) {
    const totalStars = 5; // Total d'étoiles
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <img
                key={i}
                src={i <= rating ? EtoileRouge : EtoileGrise}
                alt="Étoile"
                className="star"
            />
        );
    }

    return stars;
}


function LogementDetails() {
    // Récupération de l'id du logement dans l'URL
    const { id } = useParams();

    // Recherche du logement correspondant à l'id
    const logement = logementsData.find(logement => logement.id === id);

    // Déclaration des hooks (toujours au début)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Si le logement n'est pas trouvé
    if (!logement) {
        return <p>Logement non trouvé</p>;
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="logementDetails">
            <Header />

            <section className="logementDetails-fiche">
                {/* Carrousel */}
                <div className="logementDetails-fiche-carrousel">
                    <button onClick={prevImage} className="carousel-button prev">
                        <img src={PrevIcon} alt="Précédent" className="carousel-icon" />
                    </button>
                    <img
                        src={logement.pictures[currentImageIndex]}
                        alt={logement.title}
                        className="logement-pictures"
                    />
                    <button onClick={nextImage} className="carousel-button next">
                        <img src={NextIcon} alt="Suivant" className="carousel-icon" />
                    </button>
                    {/* Indicateur d'index */}
                    <div className="carousel-indicator">
                        {currentImageIndex + 1}/{logement.pictures.length}
                    </div>
                </div>

                {/* Informations sur le logement */}
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
                            <div className="logementDetails-fiche-info-top-droite-rating">
                                {generateStars(parseInt(logement.rating))}
                            </div>
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