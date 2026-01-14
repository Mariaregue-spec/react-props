import { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && (
                <button className="scroll-top-btn" onClick={scrollTop} aria-label="Volver arriba">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 5l-7 7h4v7h6v-7h4z" />
                    </svg>
                </button>
            )}


            <footer className="footer">
                <div className="footer-content">
                    <p>Proyecto React · Ciudades de Galicia</p>
                    <p className="footer-copy">
                        © {new Date().getFullYear()} · María Regueiro Ramil
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
