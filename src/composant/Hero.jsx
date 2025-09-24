import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Target, HeadphonesIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImage from '../assets/1756931043.webp';
import '../style/Hero.css';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const texts = [
    "Marketing Digital",
    "Stratégie Digitale",
    "Formation Professionnelle",
    "Evacuation Sanitaire",
    "Voyages d'Exception"
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 1500;

    const timer = setTimeout(() => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      if (!isDeleting) {
        // Écriture
        setCurrentText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);

        if (currentIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Suppression
        setCurrentText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);

        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, texts]);

  return (
    <section className="hero">
      {/* Background avec particules animées */}
      <div className="hero__background">
        <img 
          src={heroImage} 
          alt="Équipe marketing digital Mekody"
          className="hero__background-image"
        />
        <div className="hero__overlay"></div>
        <div className="hero__particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="hero__particle"></div>
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            {/* Badge animé */}
            <div className="hero__badge">
              <Star className="hero__badge-icon" />
              <span className="hero__badge-text">Solution Premium Certifiée</span>
              <div className="hero__badge-glow"></div>
            </div>

            {/* Titre principal avec effet machine à écrire */}
            <h1 className="hero__title">
              Excellence en
              <span className="hero__title-accent">
                <span className="hero__typing-text">{currentText}</span>
                <span className="hero__cursor">|</span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero__description">
              Stratégie digitale & Formation pour conquérir le web. Evacuation sanitaire & Voyages pour conquérir le monde. Chez Mekody Chaque projet devient une aventure inoubliable
            </p>

            {/* Statistiques avec animations */}
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-icon-wrapper">
                  <Users className="hero__stat-icon" />
                </div>
                <div className="hero__stat-number" data-target="500">50</div>
                <div className="hero__stat-label">Clients Satisfaits</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-icon-wrapper">
                  <Target className="hero__stat-icon" />
                </div>
                <div className="hero__stat-number" data-target="98">98%</div>
                <div className="hero__stat-label">Taux de Réussite</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-icon-wrapper">
                  <HeadphonesIcon className="hero__stat-icon" />
                </div>
                <div className="hero__stat-number">24/7</div>
                <div className="hero__stat-label">Support Dédié</div>
              </div>
            </div>

            {/* Boutons CTA avec effets */}
            <div className="hero__cta">
              <Link to="/contact" className="hero__cta-primary">
                <span>Démarrer votre projet</span>
                <div className="hero__cta-icon-wrapper">
                  <ArrowRight className="hero__cta-icon" />
                </div>
                <div className="hero__cta-shine"></div>
              </Link>
              <button className="hero__cta-secondary">
                <div className="hero__cta-play-wrapper">
                  <Play className="hero__cta-play" />
                </div>
                <span>Voir nos catalogues</span>
              </button>
            </div>

            {/* Indicateurs de confiance */}
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

      {/* Indicateur de défilement amélioré */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-text">Scroll</div>
        <div className="hero__scroll-circle">
          <div className="hero__scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;