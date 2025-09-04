import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Zap,
  Shield,
  Palette,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Award,
  Layers,
  TrendingUp,
  Cpu,
  Server,
  SmartphoneIcon,
  Layout,
  Cloud,
  GitBranch,
  BarChart3,
  Phone,
  MessageCircle
} from 'lucide-react';
import './Developpement.css'
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Developpement = () => {
  const services = [ 
    {
      icon: Globe,
      title: 'Applications Web',
      description: 'Sites web modernes, performants et optimisés SEO',
      technologies: ['React', 'Vue.js', 'Node.js', 'Laravel'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Apps natives et cross-platform pour iOS et Android',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Systèmes Backend',
      description: 'APIs robustes et architectures scalables',
      technologies: ['Python', 'Node.js', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitives et expériences utilisateur optimales',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Solutions Cloud',
      description: 'Infrastructure scalable et sécurisée sur AWS/Azure',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Sécurité & DevOps',
      description: 'Sécurisation des applications et automatisation des déploiements',
      technologies: ['SSL/TLS', 'CI/CD', 'Monitoring', 'Backups'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const projects = [
    {
      title: 'Plateforme E-commerce',
      category: 'Application Web',
      description: 'Marketplace B2B avec gestion multi-vendeurs, paiements sécurisés et analytics avancés.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      results: [
        '+300% conversion rate',
        '50ms temps de chargement',
        '99.9% uptime garanti',
        'Support multi-devises'
      ],
      timeline: '3 mois',
      investment: 'À partir de 15k€'
    },
    {
      title: 'App Mobile Fitness',
      category: 'Application Mobile',
      description: 'Application de coaching sportif avec IA, suivi biométrique et communauté sociale.',
      image: '💪',
      technologies: ['React Native', 'TensorFlow', 'Firebase', 'HealthKit'],
      results: [
        '100k+ téléchargements',
        '4.8/5 rating stores',
        'Synchronisation multi-devices',
        'Coaching IA personnalisé'
      ],
      timeline: '4 mois',
      investment: 'À partir de 25k€'
    },
    {
      title: 'ERP Entreprise',
      category: 'Système Backend',
      description: 'Système de gestion intégré pour optimiser tous les processus métier.',
      image: '⚙️',
      technologies: ['Python', 'Django', 'React', 'Docker'],
      results: [
        '-60% temps de traitement',
        'Automatisation complète',
        'Reporting en temps réel',
        'Sécurité enterprise-grade'
      ],
      timeline: '6 mois',
      investment: 'À partir de 35k€'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analyse & Stratégie',
      description: 'Audit complet de vos besoins et définition de la stratégie technique optimale',
      duration: '1-2 semaines',
      icon: BarChart3
    },
    {
      step: '02',
      title: 'Design & Prototypage',
      description: 'Conception UX/UI et création de prototypes interactifs validés',
      duration: '2-3 semaines',
      icon: Layout
    },
    {
      step: '03',
      title: 'Développement',
      description: 'Codage en méthodologie agile avec livraisons itératives',
      duration: '4-12 semaines',
      icon: Code
    },
    {
      step: '04',
      title: 'Tests & Optimisation',
      description: 'Tests complets, optimisation des performances et sécurisation',
      duration: '1-2 semaines',
      icon: Shield
    },
    {
      step: '05',
      title: 'Déploiement & Suivi',
      description: 'Mise en production, formation et maintenance continue',
      duration: 'Continu',
      icon: Rocket
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95, icon: Globe },
    { name: 'Node.js', category: 'Backend', level: 92, icon: Server },
    { name: 'Python', category: 'Backend', level: 90, icon: Cpu },
    { name: 'React Native', category: 'Mobile', level: 88, icon: SmartphoneIcon },
    { name: 'PostgreSQL', category: 'Database', level: 85, icon: Database },
    { name: 'AWS', category: 'Cloud', level: 87, icon: Cloud },
    { name: 'Docker', category: 'DevOps', level: 83, icon: GitBranch },
    { name: 'TypeScript', category: 'Language', level: 91, icon: Code }
  ];

  const testimonials = [
    {
      company: 'TechStartup',
      representative: 'Julie Moreau, CTO',
      project: 'Plateforme SaaS',
      content: 'Mekody a transformé notre vision en réalité. Leur expertise technique et leur approche méthodique ont dépassé toutes nos attentes.',
      rating: 5,
      results: '+200% croissance utilisateurs',
      avatar: '/avatars/julie.jpg'
    },
    {
      company: 'RetailCorp',
      representative: 'Marc Dubois, Directeur Digital',
      project: 'E-commerce B2B',
      content: 'ROI exceptionnel ! Notre nouvelle plateforme a révolutionné nos ventes en ligne. L\'équipe Mekody est remarquable.',
      rating: 5,
      results: '+150% chiffre d\'affaires',
      avatar: '/avatars/marc.jpg'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '150+',
      label: 'Projets livrés'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Clients satisfaits'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support technique'
    },
    {
      icon: TrendingUp,
      value: '+300%',
      label: 'ROI moyen clients'
    }
  ];

  return (
    <div className="developpement">
      {/* Hero Section */}
      <Header/>
      <section className="developpement__hero">
        <div className="developpement__container">
          <div className="developpement__hero-content">
            <div className="developpement__badge">
              <Code className="developpement__badge-icon" />
              <span className="developpement__badge-text">Développement Premium</span>
            </div>
            <h1 className="developpement__hero-title">
              Solutions <span className="developpement__hero-title-accent">Techniques</span>
            </h1>
            <p className="developpement__hero-description">
              Transformez vos idées en applications web et mobiles performantes avec nos solutions 
              techniques sur mesure et notre expertise de pointe.
            </p>
            <div className="developpement__hero-cta">
              <Link to="/contact" className="developpement__cta-primary">
                Démarrer votre projet
                <ArrowRight size={18} className="developpement__cta-icon" />
              </Link>
              <a href="#portfolio" className="developpement__cta-secondary">
                Voir nos réalisations
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="developpement__trust">
              <div className="developpement__trust-item">
                <Shield size={16} className="developpement__trust-icon" />
                <span>Code sécurisé & testé</span>
              </div>
              <div className="developpement__trust-item">
                <Rocket size={16} className="developpement__trust-icon" />
                <span>Livraison garantie</span>
              </div>
              <div className="developpement__trust-item">
                <Award size={16} className="developpement__trust-icon" />
                <span>Expertise certifiée</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="developpement__stats">
        <div className="developpement__container">
          <div className="developpement__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="developpement__stat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="developpement__stat-icon">
                    <IconComponent size={24} className="developpement__stat-icon-svg" />
                  </div>
                  <div className="developpement__stat-number">{stat.value}</div>
                  <div className="developpement__stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="developpement__services">
        <div className="developpement__container">
          <div className="developpement__header">
            <h2 className="developpement__title">
              Nos <span className="developpement__title-accent">Expertises</span>
            </h2>
            <p className="developpement__subtitle">
              Des solutions complètes adaptées à vos besoins spécifiques et votre secteur d'activité.
            </p>
          </div>

          <div className="developpement__services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="developpement__service"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`developpement__service-icon developpement__service-icon--${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <IconComponent size={28} className="developpement__service-icon-svg" />
                  </div>
                  <h3 className="developpement__service-title">
                    {service.title}
                  </h3>
                  <p className="developpement__service-description">
                    {service.description}
                  </p>
                  <div className="developpement__service-technologies">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="developpement__service-technology"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="developpement__portfolio">
        <div className="developpement__container">
          <div className="developpement__header">
            <h2 className="developpement__title">
              Nos <span className="developpement__title-accent">Réalisations</span>
            </h2>
            <p className="developpement__subtitle">
              Découvrez quelques projets qui illustrent notre expertise et notre capacité d'innovation.
            </p>
          </div>

          <div className="developpement__portfolio-grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="developpement__project"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="developpement__project-header">
                  <div className="developpement__project-info">
                    <span className="developpement__project-emoji">{project.image}</span>
                    <div className="developpement__project-category">
                      {project.category}
                    </div>
                  </div>
                  <div className="developpement__project-meta">
                    <div className="developpement__project-timeline">{project.timeline}</div>
                    <div className="developpement__project-investment">{project.investment}</div>
                  </div>
                </div>

                <h3 className="developpement__project-title">
                  {project.title}
                </h3>
                <p className="developpement__project-description">
                  {project.description}
                </p>

                <div className="developpement__project-technologies">
                  <h4 className="developpement__project-technologies-title">Technologies :</h4>
                  <div className="developpement__project-technologies-list">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="developpement__project-technology"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="developpement__project-results">
                  <h4 className="developpement__project-results-title">Résultats :</h4>
                  <ul className="developpement__project-results-list">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="developpement__project-result">
                        <TrendingUp size={14} className="developpement__project-result-icon" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="developpement__project-cta"
                >
                  Projet similaire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="developpement__technologies">
        <div className="developpement__container">
          <div className="developpement__header">
            <h2 className="developpement__title">
              Notre <span className="developpement__title-accent">Stack Technique</span>
            </h2>
            <p className="developpement__subtitle">
              Maîtrise des technologies les plus performantes du marché.
            </p>
          </div>

          <div className="developpement__technologies-grid">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="developpement__technology"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="developpement__technology-header">
                    <div className="developpement__technology-info">
                      <div className="developpement__technology-icon">
                        <IconComponent size={20} className="developpement__technology-icon-svg" />
                      </div>
                      <div>
                        <div className="developpement__technology-name">{tech.name}</div>
                        <div className="developpement__technology-category">{tech.category}</div>
                      </div>
                    </div>
                    <div className="developpement__technology-level">{tech.level}%</div>
                  </div>
                  <div className="developpement__technology-bar">
                    <div
                      className="developpement__technology-progress"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="developpement__process">
        <div className="developpement__container">
          <div className="developpement__header">
            <h2 className="developpement__title">
              Notre <span className="developpement__title-accent">Méthodologie</span>
            </h2>
            <p className="developpement__subtitle">
              Un processus éprouvé pour garantir la réussite de votre projet.
            </p>
          </div>

          <div className="developpement__process-list">
            {process.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="developpement__process-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="developpement__process-step">
                    <span className="developpement__process-step-number">{item.step}</span>
                    <div className="developpement__process-step-icon">
                      <IconComponent size={20} className="developpement__process-step-icon-svg" />
                    </div>
                  </div>
                  <div className="developpement__process-content">
                    <h3 className="developpement__process-title">
                      {item.title}
                    </h3>
                    <p className="developpement__process-description">
                      {item.description}
                    </p>
                    <div className="developpement__process-duration">{item.duration}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="developpement__testimonials">
        <div className="developpement__container">
          <div className="developpement__header">
            <h2 className="developpement__title">
              Témoignages <span className="developpement__title-accent">clients</span>
            </h2>
            <p className="developpement__subtitle">
              La satisfaction de nos clients est notre meilleure référence.
            </p>
          </div>

          <div className="developpement__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.company}
                className="developpement__testimonial"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="developpement__testimonial-header">
                  <div className="developpement__testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="developpement__testimonial-star" />
                    ))}
                  </div>
                  <div className="developpement__testimonial-results">
                    {testimonial.results}
                  </div>
                </div>
                <p className="developpement__testimonial-content">
                  "{testimonial.content}"
                </p>
                <div className="developpement__testimonial-author">
                  <div className="developpement__testimonial-avatar">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.representative} />
                    ) : (
                      <div className="developpement__testimonial-avatar-fallback">
                        {testimonial.representative.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="developpement__testimonial-info">
                    <div className="developpement__testimonial-name">{testimonial.representative}</div>
                    <div className="developpement__testimonial-company">{testimonial.company}</div>
                    <div className="developpement__testimonial-project">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="developpement__cta">
        <div className="developpement__container">
          <div className="developpement__cta-content">
            <h2 className="developpement__cta-title">
              Prêt à digitaliser votre entreprise ?
            </h2>
            <p className="developpement__cta-description">
              Discutons de votre projet et découvrez comment nous pouvons vous accompagner vers le succès.
            </p>
            <div className="developpement__cta-buttons">
              <Link to="/contact" className="developpement__cta-button-primary">
                Demander un devis
              </Link>
              <a
                href="tel:+33123456789"
                className="developpement__cta-button-secondary"
              >
                <Phone size={18} className="developpement__cta-button-icon" />
                Appel découverte
              </a>
              <a
                href="https://wa.me/33123456789"
                className="developpement__cta-button-secondary"
              >
                <MessageCircle size={18} className="developpement__cta-button-icon" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
};

export default Developpement;