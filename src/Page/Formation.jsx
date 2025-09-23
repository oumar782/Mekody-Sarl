import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  BookOpen,
  Target,
  CheckCircle,
  Play,
  Star,
  ArrowRight,
  Laptop,
  Smartphone,
  Globe,
  Calendar,
  UserCheck,
  BarChart3,
  Zap,
  Shield,
  Heart,
  TrendingUp
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

  const features = [
    {
      icon: Laptop,
      title: 'Plateforme LMS Avancée',
      description: 'Interface intuitive et moderne pour une expérience d\'apprentissage optimale'
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning',
      description: 'Accès complet depuis tous vos appareils, partout et à tout moment'
    },
    {
      icon: Users,
      title: 'Accompagnement Personnel',
      description: 'Formateurs experts disponibles pour un suivi individualisé'
    },
    {
      icon: BookOpen,
      title: 'Contenus Interactifs',
      description: 'Modules multimédias avec exercices pratiques et études de cas'
    },
    {
      icon: Globe,
      title: 'Communauté Internationale',
      description: 'Échangez avec des apprenants du monde entier'
    },
    {
      icon: Zap,
      title: 'Apprentissage Adaptatif',
      description: 'Contenu qui s\'adapte à votre rythme et niveau de compréhension'
    }
  ];

  const programs = [
    {
      title: 'Andrologie & Embryologie',
      duration: 'Variable selon module',
      level: 'Expert',
      students: '500+',
      description: 'Formation spécialisée en biologie de la reproduction et techniques de procréation médicalement assistée.',
      modules: [
        'Fondamentaux de l\'andrologie',
        'Techniques d\'exploration du spermogramme',
        'Embryologie clinique',
        'Cryoconservation des gamètes',
        'Législation et éthique'
      ],
      price: 'Sur devis',
      gradient: 'from-blue-500 to-cyan-500',
      icon: ''
    },
    {
      title: 'Digitalisation & RH Data-Driven',
      duration: '4-6 semaines',
      level: 'Avancé',
      students: '1,200+',
      description: 'Maîtrisez la transformation digitale des RH et l\'utilisation des données pour la prise de décision stratégique.',
      modules: [
        'Fondamentaux de la digitalisation RH',
        'Outils et plateformes RH digitales',
        'Analytics et métriques RH',
        'Data visualisation pour les RH',
        'Implémentation d\'une stratégie data-driven'
      ],
      price: '1,499€',
      gradient: 'from-purple-500 to-pink-500',
      icon: ''
    },
    {
      title: 'Talent Acquisition & Marque Employeur',
      duration: '5 semaines',
      level: 'Intermédiaire',
      students: '2,800+',
      description: 'Développez des stratégies efficaces d\'acquisition de talents et construisez une marque employeur attractive.',
      modules: [
        'Stratégies de sourcing innovantes',
        'Construction de la marque employeur',
        'Processus de recrutement optimisé',
        'Onboarding et intégration',
        'Mesure de l\'expérience candidat'
      ],
      price: '899€',
      gradient: 'from-green-500 to-emerald-500',
      icon: ''
    },
    {
      title: 'Stratégie & Business Partnering RH',
      duration: '8 semaines',
      level: 'Professionnel',
      students: '1,500+',
      description: 'Devenez partenaire stratégique des business units et contribuez directement à la performance organisationnelle.',
      modules: [
        'Fondements du business partnering',
        'Alignement stratégique RH',
        'Consulting interne et influence',
        'Gestion du changement',
        'Tableaux de bord et reporting stratégique'
      ],
      price: '1,299€',
      gradient: 'from-orange-500 to-red-500',
      icon: ''
    }
  ];

  const additionalPrograms = [
    {
      title: 'Modules Stratégiques & Leadership',
      duration: 'Variable',
      level: 'Direction',
      students: '800+',
      description: 'Programmes sur mesure pour dirigeants et cadres supérieurs visant le développement du leadership stratégique.',
      modules: [
        'Leadership transformationnel',
        'Prise de décision stratégique',
        'Gestion de crise',
        'Négociation complexe',
        'Communication executive'
      ],
      price: 'Sur mesure',
      gradient: 'from-indigo-500 to-blue-500',
      icon: ''
    },
    {
      title: 'Certification Gouvernance',
      duration: '11 jours (modulaire)',
      level: 'Expert',
      students: '400+',
      description: 'Certification IMA en 5 modules couvrant tous les aspects de la gouvernance d\'entreprise moderne.',
      modules: [
        'Module 1: Principes fondamentaux de gouvernance',
        'Module 2: Comités et conseils d\'administration',
        'Module 3: Conformité et gestion des risques',
        'Module 4: Rémunération des dirigeants',
        'Module 5: Gouvernance et développement durable'
      ],
      price: '4,999€',
      gradient: 'from-purple-600 to-indigo-600',
      icon: ''
    },
    {
      title: 'Parcours RSE',
      duration: '4 jours (échelonnés)',
      level: 'Professionnel',
      students: '950+',
      description: 'Parcours certifiant IMA sur 4 à 5 mois pour maîtriser la responsabilité sociétale des entreprises.',
      modules: [
        'Fondements et enjeux de la RSE',
        'Stratégie RSE et parties prenantes',
        'Reporting et indicateurs RSE',
        'Implémentation et mesure d\'impact'
      ],
      price: '2,499€',
      gradient: 'from-teal-500 to-green-500',
      icon: ''
    },
    {
      title: 'Management Public & Gouvernance',
      duration: '6 semaines',
      level: 'Avancé',
      students: '1,100+',
      description: 'Formation spécialisée pour les professionnels du secteur public sur le management et la gouvernance publique.',
      modules: [
        'Enjeux du management public moderne',
        'Gouvernance et politiques publiques',
        'Gestion des ressources humaines publiques',
        'Contrôle de gestion et performance publique',
        'Innovation et transformation digitale dans le public'
      ],
      price: '1,799€',
      gradient: 'from-blue-600 to-cyan-600',
      icon: ''
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Étudiants formés', target: 10000 },
    { icon: Award, value: '98%', label: 'Taux de réussite', target: 98 },
    { icon: Calendar, value: '24/7', label: 'Accès permanent', target: 100 },
    { icon: UserCheck, value: '50+', label: 'Formateurs experts', target: 50 }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Responsable RH',
      company: 'TechCorp International',
      content: 'La formation en digitalisation RH a transformé notre département. Les outils pratiques et l\'accompagnement personnalisé ont fait toute la différence.',
      rating: 5,
      avatar: 'MD'
    },
    {
      name: 'Ahmed El Mansouri',
      role: 'Directeur des Ressources Humaines',
      company: 'Groupe Santé Plus',
      content: 'Excellente plateforme avec un contenu très actuel. Le suivi individualisé m\'a permis d\'appliquer directement les concepts dans mon entreprise.',
      rating: 5,
      avatar: 'AE'
    },
    {
      name: 'Sophie Martin',
      role: 'Consultante en Gouvernance',
      company: 'Cabinet Conseil Stratégique',
      content: 'La certification IMA en gouvernance est d\'une qualité exceptionnelle. Les études de cas réelles et l\'expertise des formateurs sont remarquables.',
      rating: 5,
      avatar: 'SM'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animation des statistiques
          const animateValue = (start, end, duration, key) => {
            const startTime = performance.now();
            const updateValue = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              if (key === 'success') {
                setAnimatedStats(prev => ({
                  ...prev,
                  [key]: Math.floor(progress * (end - start) + start)
                }));
              } else {
                setAnimatedStats(prev => ({
                  ...prev,
                  [key]: Math.floor(progress * (end - start) + start)
                }));
              }

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
      
      {/* Hero Section avec particules */}
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
              <span className="formations__badge-text">Plateforme E-learning Premium</span>
              <div className="formations__badge-glow"></div>
            </div>
            <h1 className="formations__hero-title">
              Formations <span className="formations__hero-title-accent">Professionnelles</span>
            </h1>
            <p className="formations__hero-description">
              Des parcours de formation innovants et modulables, adaptés aux professionnels et aux particuliers. 
              Nous combinons expertise académique et pratique pour accompagner le développement des compétences clés du marché.
            </p>
            <div className="formations__hero-cta">
              <Link to="/contact" className="formations__cta-primary">
                <span>Commencer maintenant</span>
                <div className="formations__cta-icon-wrapper">
                  <ArrowRight size={18} className="formations__cta-icon" />
                </div>
                <div className="formations__cta-shine"></div>
              </Link>
              <button
                type="button"
                className="formations__cta-secondary"
                aria-label="Voir la démo vidéo"
              >
                <div className="formations__cta-play-wrapper">
                  <Play size={18} className="formations__cta-play" />
                </div>
                <span>Voir la démo</span>
              </button>
            </div>

            {/* Trust indicators */}
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

        {/* Scroll indicator */}
        <div className="formations__hero-scroll">
          <div className="formations__hero-scroll-text">Découvrir</div>
          <div className="formations__hero-scroll-arrow"></div>
        </div>
      </section>

      {/* Stats Section avec animations */}
      <section className="formations__stats" ref={statsRef}>
        <div className="formations__stats-bg"></div>
        <div className="formations__container">
          <div className="formations__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const displayValue = isVisible ? 
                (stat.label === 'Taux de réussite' ? animatedStats.success + '%' :
                 stat.label === 'Accès permanent' ? '24/7' :
                 stat.label === 'Formateurs experts' ? animatedStats.teachers + '+' :
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

      {/* Features Section */}
      <section className="formations__features">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <Zap className="formations__header-badge-icon" />
              <span>Notre différence</span>
            </div>
            <h2 className="formations__title">
              Pourquoi choisir notre <span className="formations__title-accent">plateforme</span> ?
            </h2>
            <p className="formations__subtitle">
              Une expérience d'apprentissage moderne et personnalisée pour maximiser vos résultats.
            </p>
          </div>

          <div className="formations__features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="formations__feature"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="formations__feature-glow"></div>
                  <div className="formations__feature-icon">
                    <IconComponent size={28} className="formations__feature-icon-svg" />
                    <div className="formations__feature-icon-bg"></div>
                  </div>
                  <h3 className="formations__feature-title">{feature.title}</h3>
                  <p className="formations__feature-description">{feature.description}</p>
                  <div className="formations__feature-decoration">
                    <div className="formations__feature-dot"></div>
                    <div className="formations__feature-dot"></div>
                    <div className="formations__feature-dot"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="formations__programs">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <BookOpen className="formations__header-badge-icon" />
              <span>Programmes certifiants</span>
            </div>
            <h2 className="formations__title">
              Nos <span className="formations__title-accent">Formations</span>
            </h2>
            <p className="formations__subtitle">
              Découvrez notre catalogue de formations conçues pour vous faire exceller dans votre domaine.
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
                <div className="formations__program-header">
                  <div className="formations__program-icon">{program.icon}</div>
                  <div className={`formations__program-level formations__program-level--${program.level.toLowerCase()}`}>
                    {program.level}
                  </div>
                  <div className="formations__program-price">
                    <div className="formations__program-price-amount">{program.price}</div>
                    <div className="formations__program-price-label">Paiement unique</div>
                  </div>
                </div>

                <h3 className="formations__program-title">{program.title}</h3>
                <p className="formations__program-description">{program.description}</p>

                <div className="formations__program-meta">
                  <div className="formations__program-meta-item">
                    <Clock size={16} className="formations__program-meta-icon" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="formations__program-meta-item">
                    <Users size={16} className="formations__program-meta-icon" />
                    <span>{program.students} étudiants</span>
                  </div>
                </div>

                <div className="formations__program-modules">
                  <h4 className="formations__program-modules-title">Modules inclus :</h4>
                  <ul className="formations__program-modules-list">
                    {program.modules.map((module, idx) => (
                      <li key={idx} className="formations__program-modules-item">
                        <CheckCircle size={16} className="formations__program-modules-icon" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="formations__program-cta">
                  <span>S'inscrire maintenant</span>
                  <div className="formations__program-cta-arrow"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs Section */}
      <section className="formations__programs formations__programs--additional">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <Target className="formations__header-badge-icon" />
              <span>Spécialisations avancées</span>
            </div>
            <h2 className="formations__title">
              Autres <span className="formations__title-accent">Parcours Spécialisés</span>
            </h2>
            <p className="formations__subtitle">
              Des formations sur mesure pour répondre à des besoins spécifiques et développer des compétences pointues.
            </p>
          </div>

          <div className="formations__programs-grid">
            {additionalPrograms.map((program, index) => (
              <div
                key={program.title}
                className="formations__program"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="formations__program-glow"></div>
                <div className="formations__program-header">
                  <div className="formations__program-icon">{program.icon}</div>
                  <div className={`formations__program-level formations__program-level--${program.level.toLowerCase()}`}>
                    {program.level}
                  </div>
                  <div className="formations__program-price">
                    <div className="formations__program-price-amount">{program.price}</div>
                    <div className="formations__program-price-label">Paiement unique</div>
                  </div>
                </div>

                <h3 className="formations__program-title">{program.title}</h3>
                <p className="formations__program-description">{program.description}</p>

                <div className="formations__program-meta">
                  <div className="formations__program-meta-item">
                    <Clock size={16} className="formations__program-meta-icon" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="formations__program-meta-item">
                    <Users size={16} className="formations__program-meta-icon" />
                    <span>{program.students} étudiants</span>
                  </div>
                </div>

                <div className="formations__program-modules">
                  <h4 className="formations__program-modules-title">Modules inclus :</h4>
                  <ul className="formations__program-modules-list">
                    {program.modules.map((module, idx) => (
                      <li key={idx} className="formations__program-modules-item">
                        <CheckCircle size={16} className="formations__program-modules-icon" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="formations__program-cta">
                  <span>S'inscrire maintenant</span>
                  <div className="formations__program-cta-arrow"></div>
                </Link>
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
              Découvrez ce que pensent nos anciens étudiants de leur expérience de formation.
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

      {/* CTA Section */}
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
              Rejoignez plus de 10,000 professionnels qui ont fait confiance à nos formations.
            </p>
            <div className="formations__cta-buttons">
              <Link to="/contact" className="formations__cta-button-primary">
                <span>Commencer gratuitement</span>
                <div className="formations__cta-button-shine"></div>
              </Link>
              <Link to="/Nos-services" className="formations__cta-button-secondary">
                <span>Explorer tous nos services</span>
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