import { useState } from 'react';
import './Navbar.css';

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
                <li><a href="#coruna">A Coruña</a></li>
                <li><a href="#lugo">Lugo</a></li>
                <li><a href="#santiago">Santiago</a></li>
                <li><a href="#vigo">Vigo</a></li>
                <li><a href="#ourense">Ourense</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

