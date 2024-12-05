import React, { useState } from 'react'; // Ajout de useState
import { useParams } from 'react-router-dom'; // permet de capturer une valeur dans l'URL
import logementsData from '../logements.json'; // Import du fichier JSON local
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import NotFound from '../pages/NotFound';
import PrevIcon from '../assets/svg/vector-prev.svg';
import NextIcon from '../assets/svg/vector-next.svg';
import PrevIcon_mobile from '../assets/svg/vector_mobile-prev.svg';
import NextIcon_mobile from '../assets/svg/vector_mobile-next.svg';
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
        return <NotFound /> ;
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
    };

    const hasMultipleImages = logement.pictures.length > 1; // Vérifie s'il y a plusieurs images
    
    return (
        <section className="logementDetails">
            <Header />

            <section className="logementDetails-fiche">
                {/* Carrousel */}
                <div className="logementDetails-fiche-carrousel">
                    {hasMultipleImages && (
                        <button onClick={prevImage} className="carousel-button prev">
                            <img src={PrevIcon} alt="Précédent" className="carousel-icon" />
                            {/* Img pour les mobiles */}
                            <img src={PrevIcon_mobile} alt="Précédent" className="carousel-icon_mobile" />
                        </button>
                    )}
                    <img
                        src={logement.pictures[currentImageIndex]}
                        alt={logement.title}
                        className="logement-pictures"
                    />
                    {hasMultipleImages && (
                        <button onClick={nextImage} className="carousel-button next">
                            <img src={NextIcon} alt="Suivant" className="carousel-icon" />
                            {/* Img pour les mobiles */}
                            <img src={NextIcon_mobile} alt="Suivant" className="carousel-icon_mobile" />
                        </button>
                    )}
                    {/* Indicateur d'index */}
                    {hasMultipleImages && (
                        <div className="carousel-indicator">
                            {currentImageIndex + 1}/{logement.pictures.length}
                        </div>
                    )}
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