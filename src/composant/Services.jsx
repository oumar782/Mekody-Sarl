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
      features: ['Stratégie Digitale Complète', 'Référencement Naturel (SEO)', 'Publicités Gérées (SEA & Social Ads)', 'Gestion des Réseaux Sociaux ','Email Marketing Automatisé ','Analytics & Reporting'],
      href: '/Nos-services',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'Des parcours de formation innovants et modulables, adaptés aux professionnels et aux particuliers. Nous combinons expertise académique et pratique pour accompagner le développement des compétences clés du marché.',
      features: [
        'Santé',
        'Gestion des Ressources Humaines', 
        'Finance publique & gestion budgétaire',
        'Gestion Financière et Comptable', 
        'Décentralisation et développement durable',
        'Base de données et statistiques', 
        'Environnement',
        'Assistant de direction', 
        'Marchés publics' ,
        
        
        
        
       
        
          
      ],
      href: '/Nos-formations',
      gradient: 'from-purple-500 to-pink-500'
    },


    {
      icon: Heart,
      title: 'Evacuation sanitaire',
      description: 'Accompagnement complet pour vos soins médicaux au Maroc',
      features: ['Coordination médicale', 'Hébergement', 'Transport', 'Suivi post-op'],
      href: '/tourisme-medical',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Sun,
      title: 'voyage organisé au Maroc',
      description: 'Confiez-nous vos projets d\'évasion : des circuits organisés passionnants pour les adultes et des colonies de vacances éducatives et fun pour les enfants. Notre expertise au service de votre tranquillité d\'esprit. ',
      features: ['Activités ludiques', 'Encadrement expert', 'Sécurité maximale', 'Développement personnel'],
      href: '/voyage-organisé',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Code,
      title: 'Solutions digitales',
      description: 'Du développement web full-stack à la data visualisation, nous concevons l\'écosystème digital qui fait parler vos chiffres ',
      features: ['Applications web', 'Mobile apps', 'E-commerce', 'Maintenance', 'Data science'],
      href: '/solutions-digitales',
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
          <Link to="/Nos-services" className="services__cta-button">
            Découvrir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;