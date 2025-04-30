import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/portfolio" 
          className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
        >
          Work
        </Link>
        <Link 
          to="/about" 
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}