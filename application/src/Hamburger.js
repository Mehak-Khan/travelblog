import React, { useState } from 'react';
// import './Hamburger.css';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-container">
            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">Blog</a>
                <a href="#services">Contact Me</a>
            </div>
        </div>
    );
};

export default Hamburger;
