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
  BarChart3
} from 'lucide-react';
import './for.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Formations = () => {
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
      gradient: 'from-blue-500 to-cyan-500'
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
      price: '€',
      gradient: 'from-purple-500 to-pink-500'
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
      gradient: 'from-green-500 to-emerald-500'
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
      gradient: 'from-orange-500 to-red-500'
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
      gradient: 'from-indigo-500 to-blue-500'
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
      gradient: 'from-purple-600 to-indigo-600'
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
      gradient: 'from-teal-500 to-green-500'
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
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];



  const stats = [
    { icon: Users, value: '10,000+', label: 'Étudiants formés' },
    { icon: Award, value: '98%', label: 'Taux de réussite' },
    { icon: Calendar, value: '24/7', label: 'Accès permanent' },
    { icon: UserCheck, value: '50+', label: 'Formateurs experts' }
  ];

  return (
    <div className="formations">
      <Header />
      
      {/* Hero Section */}
      <section className="formations__hero">
        <div className="formations__container">
          <div className="formations__hero-content">
            <div className="formations__badge">
              <GraduationCap size={20} className="formations__badge-icon" />
              <span className="formations__badge-text">Plateforme E-learning Premium</span>
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
                Commencer maintenant
                <ArrowRight size={18} className="formations__cta-icon" />
              </Link>
              <button
                type="button"
                className="formations__cta-secondary"
                aria-label="Voir la démo vidéo"
              >
                <Play size={18} className="formations__cta-play" />
                Voir la démo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="formations__stats">
        <div className="formations__container">
          <div className="formations__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="formations__stat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="formations__stat-icon">
                    <IconComponent size={24} className="formations__stat-icon-svg" />
                  </div>
                  <div className="formations__stat-number">{stat.value}</div>
                  <div className="formations__stat-label">{stat.label}</div>
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
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="formations__feature-icon">
                    <IconComponent size={28} className="formations__feature-icon-svg" />
                  </div>
                  <h3 className="formations__feature-title">{feature.title}</h3>
                  <p className="formations__feature-description">{feature.description}</p>
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
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="formations__program-header">
                  <div className={`formations__program-level formations__program-level--${program.level.toLowerCase()}`}>
                    {program.level}
                  </div>
                  <div
                    className="formations__program-price"
                    style={{
                      background: `linear-gradient(90deg, var(--${program.gradient.split(' ')[1]}), var(--${program.gradient.split(' ')[3]}))`
                    }}
                  >
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
                  S'inscrire maintenant
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
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="formations__program-header">
                  <div className={`formations__program-level formations__program-level--${program.level.toLowerCase()}`}>
                    {program.level}
                  </div>
                  <div
                    className="formations__program-price"
                    style={{
                      background: `linear-gradient(90deg, var(--${program.gradient.split(' ')[1]}), var(--${program.gradient.split(' ')[3]}))`
                    }}
                  >
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
                  S'inscrire maintenant
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="formations__cta">
        <div className="formations__container">
          <div className="formations__cta-content">
            <h2 className="formations__cta-title">Prêt à transformer votre carrière ?</h2>
            <p className="formations__cta-description">
              Rejoignez plus de 10,000 professionnels qui ont fait confiance à nos formations.
            </p>
            <div className="formations__cta-buttons">
              <Link to="/contact" className="formations__cta-button-primary">
                Commencer gratuitement
              </Link>
              <Link to="/Nos-services" className="formations__cta-button-secondary">
                Explorer tous nos services
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