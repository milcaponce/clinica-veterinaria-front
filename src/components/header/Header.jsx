import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logos/MargaritaLogo.png"; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };
    
    
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
            </div>
            
            <button className="header__toggle" onClick={toggleMenu}>
            ☰
            </button>
            
            
            <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#quienes-somos">Quiénes somos</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            
            
            <div className="header__login">
                <a href="#login">🔑</a>
            </div>
        </header>
    );
};

export default Header;