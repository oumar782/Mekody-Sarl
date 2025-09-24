import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Shield,
  Palette,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Cpu,
  Server,
  Layout,
  Cloud,
  GitBranch,
  BarChart3,
  Phone,
  MessageCircle,
  Brain,
  BarChart,
  LineChart,
  Microscope
} from 'lucide-react';
import './Developpement.css'
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Developpement = () => {
  const services = [ 
    {
      icon: Globe,
      title: 'Applications Web',
      description: 'Sites web modernes, performants et optimisés SEO avec architectures scalables',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Laravel'],
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Apps natives et cross-platform avec expériences utilisateur exceptionnelles',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
    {
      icon: Database,
      title: 'Systèmes Backend',
      description: 'APIs robustes, microservices et architectures cloud-native',
      technologies: ['Python', 'Node.js', 'Java SpringBoot', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: Brain,
      title: 'Data Science & IA',
      description: 'Solutions intelligentes basées sur l\'analyse de données et l\'apprentissage automatique',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Tableaux de bord interactifs et analyses décisionnelles en temps réel',
      technologies: ['Power BI', 'Tableau', 'Apache Superset', 'SQL', 'Python'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitives et expériences utilisateur optimisées pour la conversion',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'User Testing', 'Prototypage'],
    }
  ];

  const projects = [
    {
      title: 'Plateforme E-commerce Intelligent',
      category: 'Application Web & Data Science',
      description: 'Marketplace B2B avec recommandations IA, analyse prédictive du comportement utilisateur et optimisation automatique des prix.',
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'TensorFlow'],
      results: [
        '+300% taux de conversion',
        'Recommandations IA: +45% ventes croisées',
        '50ms temps de chargement',
        '99.9% uptime garanti'
      ],
      timeline: '4 mois',
      investment: 'À partir de 25k€'
    },
    {
      title: 'App Mobile Fitness avec IA',
      category: 'Application Mobile & Data Science',
      description: 'Application de coaching sportif avec analyse biométrique en temps réel, programmes personnalisés par IA et communauté sociale.',
      technologies: ['React Native', 'TensorFlow', 'Firebase', 'HealthKit', 'Python'],
      results: [
        '100k+ téléchargements',
        '4.8/5 rating stores',
        'Réduction de 30% du taux d\'abandon',
        'Coaching IA personnalisé'
      ],
      timeline: '5 mois',
      investment: 'À partir de 35k€'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analyse & Stratégie Data',
      description: 'Audit complet de vos besoins, analyse des données existantes et définition de la stratégie technique et analytique',
      duration: '1-2 semaines',
      icon: BarChart3
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Conception UX/UI, architecture technique et modélisation des données',
      duration: '2-3 semaines',
      icon: Layout
    },
    {
      step: '03',
      title: 'Développement & Intégration',
      description: 'Codage agile, intégration des APIs et mise en place des pipelines de données',
      duration: '4-16 semaines',
      icon: Code
    },
    {
      step: '04',
      title: 'Tests & Validation',
      description: 'Tests complets, validation des modèles IA et optimisation des performances',
      duration: '2-3 semaines',
      icon: Microscope
    },
    {
      step: '05',
      title: 'Déploiement & Monitoring',
      description: 'Mise en production, formation et monitoring continu avec tableaux de bord',
      duration: 'Continu',
      icon: Rocket
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95, icon: Globe },
    { name: 'Node.js', category: 'Backend', level: 92, icon: Server },
    { name: 'Python', category: 'Data Science', level: 94, icon: Cpu },
    { name: 'TensorFlow', category: 'IA/ML', level: 88, icon: Brain },
    { name: 'React Native', category: 'Mobile', level: 90, icon: Smartphone },
    { name: 'PostgreSQL', category: 'Database', level: 89, icon: Database },
    { name: 'AWS', category: 'Cloud', level: 91, icon: Cloud },
    { name: 'Docker', category: 'DevOps', level: 87, icon: GitBranch }
  ];

  const dataScienceServices = [
    {
      icon: LineChart,
      title: 'Analytics Avancé',
      description: 'Analyse prédictive et descriptive de vos données métier',
      features: ['Tableaux de bord interactifs', 'Reporting automatisé', 'KPI tracking']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Développement de modèles IA sur mesure pour votre business',
      features: ['Recommandation systems', 'Computer Vision', 'NLP']
    },
    {
      icon: Database,
      title: 'Big Data',
      description: 'Solutions scalables pour le traitement de volumes massifs de données',
      features: ['Data Pipelines', 'Data Warehousing', 'Real-time processing']
    },
    {
      icon: BarChart3,
      title: 'Data Engineering',
      description: 'Architecture et optimisation de vos infrastructures données',
      features: ['ETL/ELT', 'Data Quality', 'Data Governance']
    }
  ];

  const testimonials = [
    {
      company: 'TechStartup',
      representative: 'Julie Moreau, CTO',
      project: 'Plateforme SaaS avec IA',
      content: 'Mekody a transformé notre vision en une plateforme data-driven exceptionnelle. Leur expertise en machine learning a révolutionné notre produit.',
      rating: 5,
      results: '+200% croissance utilisateurs'
    },
    {
      company: 'RetailCorp',
      representative: 'Marc Dubois, Directeur Digital',
      project: 'E-commerce B2B avec Analytics',
      content: 'L\'intégration des analytics en temps réel nous a permis d\'optimiser notre stratégie commerciale avec une précision remarquable.',
      rating: 5,
      results: '+150% chiffre d\'affaires'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '200+',
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
      <Header/>
      
      {/* Hero Section */}
      <section className="developpement__hero">
        <div className="developpement__container">
          <div className="developpement__hero-content">
            <div className="developpement__badge">
              <Code className="developpement__badge-icon" />
              <span className="developpement__badge-text">Développement & Data Science</span>
            </div>
            <h1 className="developpement__hero-title">
              Solutions <span className="developpement__hero-title-accent">Technologiques Intelligentes</span>
            </h1>
            <p className="developpement__hero-description">
              Transformez vos idées en applications intelligentes avec notre expertise en développement 
              full-stack et data science. De la conception à l'IA, nous créons des solutions qui propulsent votre business.
            </p>
            <div className="developpement__hero-cta">
              <Link to="/contact" className="developpement__cta-primary">
                Démarrer votre projet
                <ArrowRight className="developpement__cta-icon" />
              </Link>
              <a href="#portfolio" className="developpement__cta-secondary">
                Voir nos réalisations
              </a>
            </div>
            
            <div className="developpement__trust">
              <div className="developpement__trust-item">
                <Shield className="developpement__trust-icon" />
                <span>Code sécurisé & testé</span>
              </div>
              <div className="developpement__trust-item">
                <Brain className="developpement__trust-icon" />
                <span>Expertise IA & Data Science</span>
              </div>
              <div className="developpement__trust-item">
                <Rocket className="developpement__trust-icon" />
                <span>Livraison garantie</span>
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
                <div key={stat.label} className="developpement__stat">
                  <div className="developpement__stat-icon">
                    <IconComponent className="developpement__stat-icon-svg" />
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
              Des solutions complètes alliant développement de pointe et intelligence artificielle.
            </p>
          </div>

          <div className="developpement__services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.title} className="developpement__service">
                  <div className="developpement__service-icon">
                    <IconComponent className="developpement__service-icon-svg" />
                  </div>
                  <h3 className="developpement__service-title">{service.title}</h3>
                  <p className="developpement__service-description">{service.description}</p>
                  <div className="developpement__service-technologies">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="developpement__service-technology">{tech}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section className="developpement__datascience">
        <div className="developpement__container">
          <div className="developpement__header">
            <h2 className="developpement__title">
              Expertise <span className="developpement__title-accent">Data Science</span>
            </h2>
            <p className="developpement__subtitle">
              Transformez vos données en avantage concurrentiel avec nos solutions d'intelligence artificielle.
            </p>
          </div>

          <div className="developpement__datascience-grid">
            {dataScienceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.title} className="developpement__datascience-service">
                  <div className="developpement__datascience-icon">
                    <IconComponent className="developpement__datascience-icon-svg" />
                  </div>
                  <h3 className="developpement__datascience-title">{service.title}</h3>
                  <p className="developpement__datascience-description">{service.description}</p>
                  <ul className="developpement__datascience-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="developpement__datascience-feature">
                        <CheckCircle className="developpement__datascience-feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              Découvrez des projets innovants combinant développement et intelligence artificielle.
            </p>
          </div>

          <div className="developpement__portfolio-grid">
            {projects.map((project, index) => (
              <div key={project.title} className="developpement__project">
                <div className="developpement__project-header">
                  <div className="developpement__project-category">{project.category}</div>
                  <div className="developpement__project-meta">
                    <div className="developpement__project-timeline">{project.timeline}</div>
                    <div className="developpement__project-investment">{project.investment}</div>
                  </div>
                </div>

                <h3 className="developpement__project-title">{project.title}</h3>
                <p className="developpement__project-description">{project.description}</p>

                <div className="developpement__project-technologies">
                  <h4 className="developpement__project-technologies-title">Technologies :</h4>
                  <div className="developpement__project-technologies-list">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="developpement__project-technology">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="developpement__project-results">
                  <h4 className="developpement__project-results-title">Résultats :</h4>
                  <ul className="developpement__project-results-list">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="developpement__project-result">
                        <TrendingUp className="developpement__project-result-icon" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="developpement__project-cta">
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
              Maîtrise des technologies les plus performantes en développement et data science.
            </p>
          </div>

          <div className="developpement__technologies-grid">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="developpement__technology">
                  <div className="developpement__technology-header">
                    <div className="developpement__technology-info">
                      <div className="developpement__technology-icon">
                        <IconComponent className="developpement__technology-icon-svg" />
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
              Un processus éprouvé intégrant data science et développement agile.
            </p>
          </div>

          <div className="developpement__process-list">
            {process.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.step} className="developpement__process-item">
                  <div className="developpement__process-step">
                    <span className="developpement__process-step-number">{item.step}</span>
                    <div className="developpement__process-step-icon">
                      <IconComponent className="developpement__process-step-icon-svg" />
                    </div>
                  </div>
                  <div className="developpement__process-content">
                    <h3 className="developpement__process-title">{item.title}</h3>
                    <p className="developpement__process-description">{item.description}</p>
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
              <div key={testimonial.company} className="developpement__testimonial">
                <div className="developpement__testimonial-header">
                  <div className="developpement__testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="developpement__testimonial-star" />
                    ))}
                  </div>
                  <div className="developpement__testimonial-results">{testimonial.results}</div>
                </div>
                <p className="developpement__testimonial-content">"{testimonial.content}"</p>
                <div className="developpement__testimonial-author">
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
              Prêt à transformer vos données en opportunités ?
            </h2>
            <p className="developpement__cta-description">
              Discutons de votre projet et découvrez comment l'IA et le développement peuvent propulser votre entreprise.
            </p>
            <div className="developpement__cta-buttons">
              <Link to="/contact" className="developpement__cta-button-primary">
                Demander un devis
              </Link>
              <a href="tel:+33123456789" className="developpement__cta-button-secondary">
                <Phone className="developpement__cta-button-icon" />
                Appel découverte
              </a>
              <a href="https://wa.me/33123456789" className="developpement__cta-button-secondary">
                <MessageCircle className="developpement__cta-button-icon" />
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