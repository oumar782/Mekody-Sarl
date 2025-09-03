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
      title: 'Marketing Digital Professionnel',
      duration: '6 semaines',
      level: 'Intermédiaire',
      students: '2,500+',
      description: 'Maîtrisez les stratégies digitales modernes : SEO, SEA, réseaux sociaux, analytics.',
      modules: [
        'Fondamentaux du marketing digital',
        'SEO et référencement naturel',
        'Publicité Google Ads & Facebook',
        'Social Media Management',
        'Analytics et ROI'
      ],
      price: '599€',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Développement Web Full-Stack',
      duration: '12 semaines',
      level: 'Avancé',
      students: '1,800+',
      description: 'Formation complète pour devenir développeur web : HTML, CSS, JavaScript, React, Node.js.',
      modules: [
        'HTML5 et CSS3 avancés',
        'JavaScript ES6+',
        'React et composants modernes',
        'Node.js et API REST',
        'Bases de données et déploiement'
      ],
      price: '1,299€',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Management et Leadership',
      duration: '8 semaines',
      level: 'Professionnel',
      students: '3,200+',
      description: 'Développez vos compétences managériales et votre leadership pour exceller.',
      modules: [
        'Psychologie du leadership',
        'Communication et persuasion',
        'Gestion d\'équipe',
        'Prise de décision stratégique',
        'Innovation et changement'
      ],
      price: '799€',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Science et IA',
      duration: '10 semaines',
      level: 'Expert',
      students: '1,200+',
      description: 'Exploitez le pouvoir des données : Python, Machine Learning, analyse prédictive.',
      modules: [
        'Python pour la data science',
        'Analyse et visualisation',
        'Machine Learning',
        'Deep Learning basics',
        'Projets pratiques'
      ],
      price: '1,599€',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Digital Marketing Manager',
      company: 'TechCorp',
      content: 'La formation marketing digital de Mekody m\'a permis d\'obtenir une promotion en 3 mois. Le contenu est exceptionnellement bien structuré.',
      rating: 5,
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Thomas Dubois',
      role: 'Développeur Full-Stack',
      company: 'StartupLab',
      content: 'Formation complète et pratique. Les projets concrets m\'ont donné l\'expérience nécessaire pour décrocher mon poste de rêve.',
      rating: 5,
      avatar: '/avatars/thomas.jpg'
    },
    {
      name: 'Marie Leclerc',
      role: 'Chef d\'équipe',
      company: 'InnovCorp',
      content: 'Les modules de leadership ont transformé ma façon de manager. Mon équipe est plus motivée et performante.',
      rating: 5,
      avatar: '/avatars/marie.jpg'
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
              Développez vos compétences avec nos formations en ligne de haute qualité,
              conçues par des experts pour accélérer votre carrière.
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

      {/* Testimonials Section */}
      <section className="formations__testimonials">
        <div className="formations__container">
          <div className="formations__header">
            <h2 className="formations__title">
              Témoignages de nos <span className="formations__title-accent">diplômés</span>
            </h2>
            <p className="formations__subtitle">
              Découvrez comment nos formations ont transformé leur carrière.
            </p>
          </div>

          <div className="formations__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="formations__testimonial"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="formations__testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="formations__testimonial-star" fill="currentColor" />
                  ))}
                </div>
                <p className="formations__testimonial-content">"{testimonial.content}"</p>
                <div className="formations__testimonial-author">
                  <div className="formations__testimonial-avatar">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={`Photo de ${testimonial.name}`} />
                    ) : (
                      <div className="formations__testimonial-avatar-fallback">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
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
              <Link to="/services" className="formations__cta-button-secondary">
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