import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Target, HeadphonesIcon } from 'lucide-react';
import heroImage from '../assets/1756931043.webp';
import '../style/Hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background Image with Overlay */}
      <div className="hero__background">
        <img 
          src={heroImage} 
          alt="Équipe marketing digital Mekody"
          className="hero__background-image"
        />
        <div className="hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            {/* Badge */}
            <div className="hero__badge">
              <Star className="hero__badge-icon" />
              <span className="hero__badge-text">Solution Premium Certifiée</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero__title">
              Excellence en
              <span className="hero__title-accent">
                Marketing Digital
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero__description">
            Stratégie digitale & Formation pour conquérir le web. Evacuation sanitaire & Voyages pour conquérir le monde. Chez Mekody Chaque projet devient une aventure inoubliable
            </p>

            {/* Stats */}
            <div className="hero__stats">
              <div className="hero__stat">
                <Users className="hero__stat-icon" />
                <div className="hero__stat-number">500+</div>
                <div className="hero__stat-label">Clients Satisfaits</div>
              </div>
              <div className="hero__stat">
                <Target className="hero__stat-icon" />
                <div className="hero__stat-number">98%</div>
                <div className="hero__stat-label">Taux de Réussite</div>
              </div>
              <div className="hero__stat">
                <HeadphonesIcon className="hero__stat-icon" />
                <div className="hero__stat-number">24/7</div>
                <div className="hero__stat-label">Support Dédié</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero__cta">
              <Link to="/contact" className="hero__cta-primary">
                Démarrer votre projet
                <ArrowRight className="hero__cta-icon" />
              </Link>
              <button className="hero__cta-secondary">
                <Play className="hero__cta-play" />
                Voir nos réalisations
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="hero__trust">
              <div className="hero__trust-label">
                Certifié par :
              </div>
              <div className="hero__trust-badges">
                <div className="hero__trust-badge">
                  <span className="hero__trust-text">ISO</span>
                </div>
                <div className="hero__trust-badge">
                  <span className="hero__trust-text">GOOGLE</span>
                </div>
                <div className="hero__trust-badge">
                  <span className="hero__trust-text">META</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-circle">
          <div className="hero__scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;