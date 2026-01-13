import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="https://www.coruna.gal" target="_blank" rel="noopener noreferrer">A Coruña</a></li>
                <li><a href="https://www.lugo.gal" target="_blank" rel="noopener noreferrer">Lugo</a></li>
                <li><a href="https://www.santiagodecompostela.gal" target="_blank" rel="noopener noreferrer">Santiago</a></li>
                <li><a href="https://hoxe.vigo.org" target="_blank" rel="noopener noreferrer">Vigo</a></li>
                <li><a href="https://www.ourense.gal" target="_blank" rel="noopener noreferrer">Ourense</a></li>
            </ul>
        </nav>
    );
}
