import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  GraduationCap, 
  Heart, 
  Sun, 
  Code,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Clock,
  Shield,
  Star,
  Calendar
} from 'lucide-react';
import './service.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Maximisez votre présence en ligne avec nos stratégies digitales innovantes et personnalisées.',
      features: [
        'Stratégie Digitale Complète,',
        'Référencement Naturel (SEO), ',
        'Publicités Gérées (SEA & Social Ads),',
        'Gestion des Réseaux Sociaux , ',
        'Email Marketing Automatisé ,',
        'Analytics & Reporting ,'
      ],
      benefits: [
        'Augmentation du trafic qualifié',
        'Amélioration de la visibilité',
        'ROI optimisé',
        'Engagement client renforcé'
      ],
      href: '/contact',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Formations',
      description: 'Plateformes de formation sur mesure pour développer les compétences de vos équipes.',
      features: [
        'Accompagnement Personnel',
        'Contenus interactifs et multimédia',
        'Modules adaptatifs',
        'Certifications et badges',
        'Suivi de progression avancé',
        'Mobile learning'
      ],
      benefits: [
        'Accompagnement Personnel',
        'Réduction des coûts',
        'Suivi personnalisé',
        'Montée en compétences rapide'
      ],
      href: '/Nos-formations',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Evacuation sanitaire',
      description: 'Accompagnement complet pour vos soins médicaux à l\'étranger en toute sérénité.',
      features: [
        'Coordination médicale',
        'Sélection d\'établissements certifiés',
        'Organisation du voyage',
        'Hébergement premium',
        'Assistance 24/7',
        'Suivi post-opératoire'
      ],
      benefits: [
        'Économies substantielles',
        'Soins de haute qualité',
        'Accompagnement personnalisé',
        'Sécurité garantie'
      ],
      href: '/tourisme-medical',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Sun,
      title: 'voyage organisé',
      description: 'Vacances éducatives inoubliables basées sur l\'aventure, l\'apprentissage et l\'amitié.',
      features: [
        'Programmes thématiques variés',
        'Encadrement professionnel qualifié',
        'Activités ludiques et éducatives',
        'Sécurité maximale',
        'Développement personnel',
        'Suivi photo/vidéo'
      ],
      benefits: [
        'Épanouissement de l\'enfant',
        'Nouvelles amitiés',
        'Apprentissages pratiques',
        'Confiance renforcée'
      ],
      href: '/voyage-organisé',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Code,
      title: 'Solutions digitales',
      description: 'Solutions techniques sur mesure pour digitaliser et optimiser votre entreprise.',
      features: [
        'Applications web responsive',
        'Applications mobiles natives',
        'E-commerce avancé',
        'Solutions cloud',
        'Intégrations API',
        'Maintenance et support',
        'Data science'
      ],
      benefits: [
        'Automatisation des processus',
        'Amélioration de l\'efficacité',
        'Expérience utilisateur optimale',
        'Évolutivité garantie'
      ],
      href: '/solutions-digitales',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expertise reconnue',
      description: 'Une équipe de professionnels certifiés'
    },
    {
      icon: Target,
      title: 'Solutions sur mesure',
      description: 'Adaptées à vos besoins spécifiques'
    },
    {
      icon: Clock,
      title: 'Respect des délais',
      description: 'Livraison dans les temps impartis'
    },
    {
      icon: Shield,
      title: 'Qualité garantie',
      description: 'Standards de qualité élevés'
    },
    {
      icon: Star,
      title: 'Support premium',
      description: 'Accompagnement personnalisé 24/7'
    },
    {
      icon: Calendar,
      title: 'Évolutivité',
      description: 'Solutions adaptées à votre croissance'
    }
  ];

  return (
    <div className="services-page">
        <Header/>
      {/* Hero Section */}
      <section className="services-page__hero">
        <div className="services-page__container">
          <div className="services-page__hero-content">
            <h1 className="services-page__hero-title">
              Nos <span className="services-page__hero-title-accent">Services</span>
            </h1>
            <p className="services-page__hero-description">
              Découvrez notre gamme complète de services premium conçus pour 
              accélérer votre réussite et transformer vos ambitions en réalité.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="services-page__details">
        <div className="services-page__container">
          <div className="services-page__services-list">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className={`services-page__service ${index % 2 === 1 ? 'services-page__service--reverse' : ''}`}
                >
                  <div className="services-page__service-content">
                    <div className="services-page__service-header">
                      <div className={`services-page__service-icon services-page__service-icon--${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <IconComponent size={32} className="services-page__service-icon-svg" />
                      </div>
                      <h2 className="services-page__service-title">
                        {service.title}
                      </h2>
                    </div>

                    <p className="services-page__service-description">
                      {service.description}
                    </p>

                    <div className="services-page__service-features">
                      <div className="services-page__feature-column">
                        <h3 className="services-page__feature-title">
                          Nos Prestations
                        </h3>
                        <ul className="services-page__feature-list">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="services-page__feature-item">
                              <CheckCircle size={16} className="services-page__feature-icon" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="services-page__feature-column">
                        <h3 className="services-page__feature-title">
                          Bénéfices Clients
                        </h3>
                        <ul className="services-page__feature-list">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="services-page__feature-item">
                              <div className="services-page__benefit-bullet"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      to={service.href}
                      className="services-page__service-cta"
                    >
                      En savoir plus
                      <ArrowRight size={18} className="services-page__cta-icon" />
                    </Link>
                  </div>

                  <div className="services-page__service-card">
                    <div className="services-page__why-card">
                      <h3 className="services-page__why-title">
                        Pourquoi choisir Mekody ?
                      </h3>
                      <ul className="services-page__why-list">
                        <li className="services-page__why-item">
                          <CheckCircle size={18} className="services-page__why-icon" />
                          <span>Expertise reconnue et certifiée</span>
                        </li>
                        <li className="services-page__why-item">
                          <CheckCircle size={18} className="services-page__why-icon" />
                          <span>Accompagnement personnalisé</span>
                        </li>
                        <li className="services-page__why-item">
                          <CheckCircle size={18} className="services-page__why-icon" />
                          <span>Technologies de pointe</span>
                        </li>
                        <li className="services-page__why-item">
                          <CheckCircle size={18} className="services-page__why-icon" />
                          <span>Support client premium</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="services-page__why">
        <div className="services-page__container">
          <div className="services-page__why-header">
            <h2 className="services-page__why-main-title">
              Pourquoi nous choisir ?
            </h2>
            <p className="services-page__why-subtitle">
              Découvrez ce qui fait de Mekody votre partenaire idéal pour la réussite de vos projets
            </p>
          </div>

          <div className="services-page__why-grid">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="services-page__why-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="services-page__why-card-icon">
                    <IconComponent size={24} className="services-page__why-card-icon-svg" />
                  </div>
                  <h3 className="services-page__why-card-title">{item.title}</h3>
                  <p className="services-page__why-card-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-page__cta">
        <div className="services-page__container">
          <div className="services-page__cta-content">
            <h2 className="services-page__cta-title">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="services-page__cta-description">
              Contactez nos experts pour une consultation gratuite et découvrez 
              comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <Link to="/contact" className="services-page__cta-button">
              Consultation gratuite
            </Link>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
};

export default Services;