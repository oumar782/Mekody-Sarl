import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  BookOpen,
  Target,
  Play,
  Star,
  ArrowRight,
  Shield,
  Heart,
  TrendingUp,
  Calendar,
  UserCheck,
  Code,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './for.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Formations = () => {
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    success: 0,
    access: 0,
    teachers: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Statistiques inchangées (valeurs génériques)
  const stats = [
    { icon: Users, value: '10,000+', label: 'Professionnels formés', target: 10000 },
    { icon: Award, value: '98%', label: 'Taux de réussite', target: 98 },
    { icon: Calendar, value: '24/7', label: 'Accompagnement', target: 100 },
    { icon: UserCheck, value: '50+', label: 'Experts formateurs', target: 50 }
  ];

  // Témoignages génériques mais neutres
  const testimonials = [
    {
      name: 'Dr. Leila Benali',
      role: 'Médecin spécialiste',
      company: 'Hôpital Régional',
      content: 'La formation en santé m’a permis d’actualiser mes connaissances avec des contenus rigoureux et pratiques.',
      rating: 5,
      avatar: 'LB'
    },
    {
      name: 'Karim Touati',
      role: 'Responsable Financier',
      company: 'Collectivité Territoriale',
      content: 'Les modules sur la gestion budgétaire publique sont d’une grande clarté et directement applicables.',
      rating: 5,
      avatar: 'KT'
    },
    {
      name: 'Fatima Zahra Naji',
      role: 'Chef de Projet Développement Durable',
      company: 'Agence Nationale de l’Environnement',
      content: 'Une expertise solide sur la décentralisation et le développement durable. Très enrichissant professionnellement.',
      rating: 5,
      avatar: 'FZ'
    }
  ];

  // Nouvelles formations — uniquement celles demandées
  const programs = [
    {
      title: 'Santé',
      description: 'Formations spécialisées couvrant les bonnes pratiques, la réglementation sanitaire, et les enjeux contemporains du secteur de la santé.'
    },
    {
      title: 'Environnement',
      description: 'Programmes axés sur la gestion des ressources naturelles, les politiques environnementales, et la transition écologique.'
    },
    {
      title: 'Base de données et statistique',
      description: 'Maîtrise des outils d’analyse de données, modélisation statistique, et gestion de bases de données pour la prise de décision.'
    },
    {
      title: 'GRH (Gestion des Ressources Humaines)',
      description: 'Stratégies de gestion du personnel, droit du travail, pilotage RH et accompagnement du changement organisationnel.'
    },
    {
      title: 'Finance publique & gestion budgétaire',
      description: 'Compréhension des mécanismes de la finance publique, élaboration, exécution et contrôle du budget public.'
    },
    {
      title: 'Marchés publics',
      description: 'Formation complète sur les procédures, la réglementation, et la gestion des marchés publics conformément au cadre légal.'
    },
    {
      title: 'Décentralisation et développement durable',
      description: 'Approfondissement des politiques de décentralisation, gouvernance locale, et intégration du développement durable dans les territoires.'
    },
    {
      title: 'Assistance de direction',
      description: 'Compétences en organisation, communication, gestion administrative et support stratégique aux cadres dirigeants.'
    },
    {
      title: 'Gestion des projets et programmes',
      description: 'Méthodologies de pilotage de projets, planification, suivi-évaluation, et gestion des parties prenantes.'
    },
    {
      title: 'Gestion financière et comptable',
      description: 'Maîtrise des principes comptables, analyse financière, contrôle de gestion et conformité fiscale.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const animateValue = (start, end, duration, key) => {
            const startTime = performance.now();
            const updateValue = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              setAnimatedStats(prev => ({
                ...prev,
                [key]: key === 'success'
                  ? Math.floor(progress * (end - start) + start)
                  : Math.floor(progress * (end - start) + start)
              }));
              if (progress < 1) {
                requestAnimationFrame(updateValue);
              }
            };
            requestAnimationFrame(updateValue);
          };
          animateValue(0, 10000, 2500, 'students');
          animateValue(0, 98, 1800, 'success');
          animateValue(0, 100, 1200, 'access');
          animateValue(0, 50, 1500, 'teachers');
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="formations">
      <Header />
      {/* Hero Section */}
      <section className="formations__hero">
        <div className="formations__hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="formations__hero-particle"></div>
          ))}
        </div>
        <div className="formations__container">
          <div className="formations__hero-content">
            <div className="formations__badge">
              <GraduationCap size={20} className="formations__badge-icon" />
              <span className="formations__badge-text">Formations Professionnelles</span>
              <div className="formations__badge-glow"></div>
            </div>
            <h1 className="formations__hero-title">
              Formations <span className="formations__hero-title-accent">Spécialisées</span>
            </h1>
            <p className="formations__hero-description">
              Des programmes conçus pour les professionnels des secteurs publics et privés, centrés sur l’excellence opérationnelle et la conformité réglementaire.
            </p>
            <div className="formations__hero-cta">
              <Link to="/catalogue" className="formations__cta-primary">
                <span>Voir nos catalogues</span>
                <div className="formations__cta-icon-wrapper">
                  <ArrowRight size={18} className="formations__cta-icon" />
                </div>
                <div className="formations__cta-shine"></div>
              </Link>
              <Link to="/contact" className="formations__cta-secondary">
                <span>Demander le programme</span>
              </Link>
            </div>
            <div className="formations__trust">
              <div className="formations__trust-item">
                <div className="formations__trust-icon-wrapper">
                  <Shield size={16} className="formations__trust-icon" />
                </div>
                <span>Certifications reconnues</span>
              </div>
              <div className="formations__trust-item">
                <div className="formations__trust-icon-wrapper">
                  <Heart size={16} className="formations__trust-icon" />
                </div>
                <span>98% de satisfaction</span>
              </div>
              <div className="formations__trust-item">
                <div className="formations__trust-icon-wrapper">
                  <TrendingUp size={16} className="formations__trust-icon" />
                </div>
                <span>Carrière boostée</span>
              </div>
            </div>
          </div>
        </div>
        <div className="formations__hero-scroll">
          <div className="formations__hero-scroll-text">Découvrir</div>
          <div className="formations__hero-scroll-arrow"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="formations__stats" ref={statsRef}>
        <div className="formations__stats-bg"></div>
        <div className="formations__container">
          <div className="formations__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const displayValue = isVisible ? 
                (stat.label === 'Taux de réussite' ? animatedStats.success + '%' :
                 stat.label === 'Accompagnement' ? '24/7' :
                 stat.label === 'Experts formateurs' ? animatedStats.teachers + '+' :
                 animatedStats.students + '+') : 
                '0' + (stat.label === 'Taux de réussite' ? '%' : '+');
              return (
                <div
                  key={stat.label}
                  className="formations__stat"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="formations__stat-icon">
                    <IconComponent size={24} className="formations__stat-icon-svg" />
                    <div className="formations__stat-icon-ring"></div>
                  </div>
                  <div className="formations__stat-number">{displayValue}</div>
                  <div className="formations__stat-label">{stat.label}</div>
                  <div className="formations__stat-bar">
                    <div 
                      className="formations__stat-progress" 
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section — une seule section */}
      <section className="formations__programs">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <BookOpen className="formations__header-badge-icon" />
              <span>Nos domaines d’expertise</span>
            </div>
            <h2 className="formations__title">
              Formations <span className="formations__title-accent">Professionnelles</span>
            </h2>
            <p className="formations__subtitle">
              Découvrez nos programmes conçus pour répondre aux exigences des secteurs publics, privés et de la santé.
            </p>
          </div>
          <div className="formations__programs-grid">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="formations__program"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="formations__program-glow"></div>
                <h3 className="formations__program-title">{program.title}</h3>
                <p className="formations__program-description">{program.description}</p>
                <div className="formations__program-buttons">
                  <Link to="/catalogue" className="formations__program-btn">
                    Voir nos catalogues
                  </Link>
                  <Link to="/contact" className="formations__program-btn formations__program-btn-outline">
                    Demander le programme
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="formations__testimonials">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <Star className="formations__header-badge-icon" />
              <span>Témoignages</span>
            </div>
            <h2 className="formations__title">
              Ils nous <span className="formations__title-accent">font confiance</span>
            </h2>
            <p className="formations__subtitle">
              Retours d’expérience de professionnels ayant suivi nos formations.
            </p>
          </div>
          <div className="formations__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="formations__testimonial"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="formations__testimonial-glow"></div>
                <div className="formations__testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="formations__testimonial-star" />
                  ))}
                </div>
                <p className="formations__testimonial-content">
                  "{testimonial.content}"
                </p>
                <div className="formations__testimonial-author">
                  <div className="formations__testimonial-avatar">
                    <div className="formations__testimonial-avatar-fallback">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div className="formations__testimonial-info">
                    <div className="formations__testimonial-name">{testimonial.name}</div>
                    <div className="formations__testimonial-role">{testimonial.role}</div>
                    <div className="formations__testimonial-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="formations__cta">
        <div className="formations__cta-pattern"></div>
        <div className="formations__container">
          <div className="formations__cta-content">
            <div className="formations__cta-badge">
              <GraduationCap className="formations__cta-badge-icon" />
              <span>Votre avenir commence ici</span>
            </div>
            <h2 className="formations__cta-title">Prêt à transformer votre carrière ?</h2>
            <p className="formations__cta-description">
              Rejoignez des milliers de professionnels formés dans des domaines stratégiques.
            </p>
            <div className="formations__cta-buttons">
              <Link to="/catalogue" className="formations__cta-button-primary">
                <span>Voir nos catalogues</span>
                <div className="formations__cta-button-shine"></div>
              </Link>
              <Link to="/contact" className="formations__cta-button-secondary">
                <span>Demander le programme</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formations;