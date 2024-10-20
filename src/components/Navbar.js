"use client";
import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaFileDownload, FaEnvelope, FaTerminal } from 'react-icons/fa'; // Importujemy ikony
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const t = useTranslations('Navbar');

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar is-fixed-top py-5 ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-brand">
                    <a href="/" className="navbar-item is-size-4">
                        {process.env.NEXT_PUBLIC_NAME_SURNAME}
                    </a>

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
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-start"></div>

                    <div className="navbar-end">
                        <a href="/" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaHome className="icon" /> {t('home')}
                        </a>
                        <a href="/about" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaUser className="icon" /> {t('about')}
                        </a>
                        <a href="/projects" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaTerminal className="icon" /> {t('projects')}
                        </a>
                        <a href="/resume" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaFileDownload className="icon" /> {t('resume')}
                        </a>
                        <a href="/contact" className="navbar-item" onClick={() => setIsActive(false)}>
                            <FaEnvelope className="icon" /> {t('contact')}
                        </a>
                        <div className='navbartools'>
                            <ThemeSwitcher />
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
