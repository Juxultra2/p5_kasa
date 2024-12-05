import React, { useState } from 'react';
import '../assets/styles/components/accordion.scss';
import ArrowIcon from '../assets/svg/arrow_back_ios.svg';
import ArrowIcon_mobile from '../assets/svg/arrow_back_ios_mobile.svg';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <img 
                src={ArrowIcon} 
                alt="Icone de fléche" 
                className={`arrow ${isOpen ? 'down' : ''}`} 
                />
                <img 
                src={ArrowIcon_mobile} 
                alt="Icone de fléche" 
                className={`arrow_mobile ${isOpen ? 'down' : ''}`} 
                />
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;