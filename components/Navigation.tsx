'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => scrollToSection('hero')}>
                    高效慢活學
                </div>

                {/* Desktop Menu */}
                <ul className={styles.menu}>
                    <li><button onClick={() => scrollToSection('about')}>簡介</button></li>
                    <li><button onClick={() => scrollToSection('testimonials')}>客戶見證</button></li>
                    <li><button onClick={() => scrollToSection('services')}>核心服務</button></li>
                    <li><button onClick={() => scrollToSection('about-me')}>關於我</button></li>
                    <li>
                        <a
                            href="https://www.mankind01.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnLink}
                        >
                            電子報
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.mankind01.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnLink}
                        >
                            部落格
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={styles.hamburger}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="選單"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <button onClick={() => scrollToSection('about')}>簡介</button>
                    <button onClick={() => scrollToSection('testimonials')}>客戶見證</button>
                    <button onClick={() => scrollToSection('services')}>核心服務</button>
                    <button onClick={() => scrollToSection('about-me')}>關於我</button>
                    <a
                        href="https://www.mankind01.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        電子報
                    </a>
                    <a
                        href="https://www.mankind01.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        部落格
                    </a>
                </div>
            )}
        </nav>
    );
}
