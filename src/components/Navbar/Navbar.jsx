import { useState } from 'react';
import '../Navbar/Navbar.css';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Galicia
            </div>

            {/* Botón hamburguesa */}
            <button
                className="hamburger"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* Links */}
            <ul className={`navbar-links ${open ? 'open' : ''}`}>
                <li><a href="https://www.coruna.gal/" target="_blank">A Coruña</a></li>
                <li><a href="https://concellodelugo.gal/" target="_blank">Lugo</a></li>
                <li><a href="https://santiagodecompostela.gal/gl" target="_blank">Santiago</a></li>
                <li><a href="https://hoxe.vigo.org/" target="_blank">Vigo</a></li>
                <li><a href="https://ourense.gal/gl/" target="_blank">Ourense</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

