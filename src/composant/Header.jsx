import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';
import '../style/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/A-propos' },
    { name: 'Services', href: '/Nos-services' },
    { name: 'Formations', href: '/Nos-formations' },
    { name: 'Evacuation sanitaire', href: '/tourisme-medical' },
    { name: 'Voyage organisé', href: '/voyage-organisé' },
    { name: 'Solutions digitales', href: '/solutions-digitales' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__content">
          {/* Logo avec taille agrandie */}
          <Link to="/" className="header__logo">
            <img 
              src={Logo} 
              alt="Mekody Sarl" 
              className="header__logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = document.querySelector('.header__logo-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Solution de repli si l'image ne charge pas */}
            <div className="header__logo-fallback">
              <span className="header__logo-letter">M</span>
              <div className="header__logo-text">
                <div className="header__logo-title">Mekody</div>
                <div className="header__logo-subtitle">Sarl</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`header__nav-link ${
                  isActive(item.href) ? 'header__nav-link--active' : ''
                }`}
              >
                {item.name}
                <span className="header__nav-indicator"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="header__cta">
            <Link to="/contact" className="header__cta-button">
              Nous contacter
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header__menu-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`header__mobile ${isMenuOpen ? 'header__mobile--open' : ''}`}>
          <nav className="header__mobile-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`header__mobile-link ${
                  isActive(item.href) ? 'header__mobile-link--active' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="header__mobile-cta">
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="header__mobile-button"
              >
                Nous contacter
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;