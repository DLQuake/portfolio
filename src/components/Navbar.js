"use client"; // Oznaczamy komponent jako klienta
import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram, FaFileDownload, FaEnvelope } from 'react-icons/fa'; // Importujemy ikony

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar is-fixed-top pt-5 pb-4">
            <div className="container">
                <div className="navbar-brand">
                    <Link href="/" className="navbar-item is-size-4">
                        Dominik Lewczyński
                    </Link>

                    <a
                        role="button"
                        className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded={isActive}
                        data-target="navbarBasicExample"
                        onClick={toggleMenu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                    </div>

                    <div className="navbar-end">
                        <Link href="/" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaHome className="icon" /> Strona główna
                        </Link>
                        <Link href="/about" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaUser className="icon" /> O mnie
                        </Link>
                        <Link href="/projects" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaProjectDiagram className="icon" /> Projekty
                        </Link>
                        <Link href="/resume" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaFileDownload className="icon" /> Pobierz CV
                        </Link>
                        <Link href="/contact" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaEnvelope className="icon" /> Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
