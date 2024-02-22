// Navbar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faEnvelope, faInfo, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">Your Logo</div>

                <div className={`nav-links ${isMobile ? 'mobile' : ''}`}>
                    <a href="#home">
                        <FontAwesomeIcon icon={faHome} />
                        Home
                    </a>
                    <a href="#gallery">
                        <FontAwesomeIcon icon={faImages} />
                        Gallery
                    </a>
                    <a href="#contact">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Contact
                    </a>
                    <a href="#about">
                        <FontAwesomeIcon icon={faInfo} />
                        About
                    </a>
                </div>

                <div className="mobile-menu" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
