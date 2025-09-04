import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
// Note: TikTok n'est pas disponible dans lucide-react, nous allons créer un composant personnalisé
import '../style/Footer.css';

// Composant personnalisé pour TikTok car il n'est pas inclus dans lucide-react
const Tiktok = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.527V7.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Marketing Digital', href: '/services' },
    { name: 'E-learning', href: '/formations' },
    { name: 'Tourisme Médical', href: '/tourisme-medical' },
    { name: 'Colonies de Vacances', href: '/colonies-vacances' },
    { name: 'Développement Web', href: '/developpement' },
  ];

  const company = [
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/19QDMsyrEE/?mibextid=wwXIfr' },
    { name: 'TikTok', icon: Tiktok, href: 'https://www.tiktok.com/@mekodysarl07?_t=ZS-8zQkSoPcNhi&_r=1' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/mekody-sarl/' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Company Info */}
          <div className="footer__section">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <span className="footer__logo-letter">M</span>
              </div>
              <div className="footer__logo-text">
                <div className="footer__logo-title">Mekody</div>
                <div className="footer__logo-subtitle">Sarl</div>
              </div>
            </div>
            <p className="footer__description">
              Votre partenaire de confiance pour des solutions digitales innovantes 
              et un accompagnement professionnel de haute qualité.
            </p>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h3 className="footer__title">Nos Services</h3>
            <ul className="footer__links">
              {services.map((service) => (
                <li key={service.name} className="footer__link-item">
                  <Link to={service.href} className="footer__link">
                    <ArrowRight size={14} className="footer__link-arrow" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer__section">
            <h3 className="footer__title">Entreprise</h3>
            <ul className="footer__links">
              {company.map((item) => (
                <li key={item.name} className="footer__link-item">
                  <Link to={item.href} className="footer__link">
                    <ArrowRight size={14} className="footer__link-arrow" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <MapPin size={18} className="footer__contact-icon" />
                <div className="footer__contact-text">
                  <p>123 Avenue de l'Innovation</p>
                  <p>75001 Paris, France</p>
                </div>
              </div>
              <div className="footer__contact-item">
                <Phone size={18} className="footer__contact-icon" />
                <span className="footer__contact-text">+33 1 23 45 67 89</span>
              </div>
              <div className="footer__contact-item">
                <Mail size={18} className="footer__contact-icon" />
                <span className="footer__contact-text">contact@mekody.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer__newsletter">
          <h3 className="footer__newsletter-title">Restez informé</h3>
          <p className="footer__newsletter-text">
            Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres exclusives.
          </p>
          <form className="footer__newsletter-form">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="footer__newsletter-input"
              required 
            />
            <button type="submit" className="footer__newsletter-button">
              S'inscrire
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Mekody Sarl. Tous droits réservés.
              <span className="footer__made-with">
                Fait avec <Heart size={14} /> en France
              </span>
            </p>
            <div className="footer__legal">
              <Link to="#" className="footer__legal-link">
                Politique de confidentialité
              </Link>
              <Link to="#" className="footer__legal-link">
                Mentions légales
              </Link>
              <Link to="#" className="footer__legal-link">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;