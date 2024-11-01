import React, { useState } from 'react';
import {Link} from "react-router-dom";

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
                <Link to="/Navbar">Home</Link>
                <Link to="/Blog">Blog</Link>
                <a href="#services">Contact Me</a>
            </div>
        </div>
    );
};

export default Hamburger;
