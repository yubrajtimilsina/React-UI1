
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header className="header">
            <a href="#" className="logo">
                <img src="images/logo.png" alt="Logo" />
            </a>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/createblog">Create Blog</Link>
            </nav>
        </header>
    );
}

export default Navbar;
