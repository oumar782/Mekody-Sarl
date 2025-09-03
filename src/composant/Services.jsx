import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  GraduationCap, 
  Heart, 
  Sun, 
  Code,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import '../style/Services.css';
const ServicesOverview = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Stratégies digitales innovantes pour maximiser votre visibilité et ROI.',
      features: ['SEO/SEA', 'Réseaux sociaux', 'Content marketing', 'Analytics'],
      href: '/services',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'E-learning',
      description: 'Plateformes de formation sur mesure pour professionnels et particuliers.',
      features: ['LMS personnalisé', 'Contenus interactifs', 'Certifications', 'Suivi avancé'],
      href: '/formations',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Tourisme Médical',
      description: 'Accompagnement complet pour vos soins médicaux à l\'étranger.',
      features: ['Coordination médicale', 'Hébergement', 'Transport', 'Suivi post-op'],
      href: '/tourisme-medical',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Sun,
      title: 'Colonies de Vacances',
      description: 'Aventures éducatives inoubliables basées sur l\'apprentissage et l\'amitié.',
      features: ['Activités ludiques', 'Encadrement expert', 'Sécurité maximale', 'Développement personnel'],
      href: '/colonies-vacances',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Solutions techniques sur mesure pour digitaliser votre entreprise.',
      features: ['Applications web', 'Mobile apps', 'E-commerce', 'Maintenance'],
      href: '/developpement',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="services">
      <div className="services__container">
        {/* Section Header */}
        <div className="services__header">
          <h2 className="services__title">
            Nos <span className="services__title-accent">Expertises</span>
          </h2>
          <p className="services__subtitle">
            Découvrez nos domaines d'excellence et comment nous transformons 
            les défis en opportunités de croissance pour votre entreprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services__grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="services__card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Title */}
                <div className="services__card-header">
                  <div className={`services__card-icon services__card-icon--${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <IconComponent size={28} className="services__card-icon-svg" />
                  </div>
                  <h3 className="services__card-title">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="services__card-description">
                  {service.description}
                </p>

                {/* Features */}
                <div className="services__card-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="services__card-feature">
                      <CheckCircle size={16} className="services__card-feature-icon" />
                      <span className="services__card-feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={service.href}
                  className="services__card-link"
                >
                  En savoir plus
                  <ArrowRight size={16} className="services__card-link-icon" />
                </Link>

                {/* Background Decoration */}
                <div className="services__card-decoration"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="services__cta">
          <Link to="/services" className="services__cta-button">
            Découvrir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;