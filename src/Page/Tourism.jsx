import { Link } from 'react-router-dom';
import { 
  Heart, 
  Plane, 
  Shield, 
  Clock, 
  MapPin,
  Stethoscope,
  Home,
  PhoneCall,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Users,
  Award,
  FileText,
  Phone,
  MessageCircle
} from 'lucide-react';
import './Tourism.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

// Import des images pour les spécialités
import cardiologieImg from '../assets/cardiologie.webp';
import dentisteImg from '../assets/dentiste.webp';
import ophtalmologieImg from '../assets/ophtalmologie.webp';
import oncologieImg from '../assets/oncologie.webp';
import gynecologieImg from '../assets/gynecologie.webp';
import fertilitéImg from '../assets/fertilite.webp';
import orlImg from '../assets/orl.webp';
import urologieImg from '../assets/urologie.webp';
import rhumatologieImg from '../assets/rhumatologie.webp';
import gastroImg from '../assets/gastro.webp';
import endocrinologieImg from '../assets/endocrinologie.webp';
import casablancaImg from '../assets/casablanca.webp';

const TourismeMedical = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Consultation Médicale',
      description: 'Accès rapide aux praticiens certifiés et établissements de renommée internationale avec une prise en charge personnalisée selon vos besoins spécifiques.'
    },
    {
      icon: Plane,
      title: 'Organisation Voyage',
      description: 'Vols, visas et formalités gérés en toute simplicité pour un voyage sans stress. Nous nous occupons de tous les détails logistiques.'
    },
    {
      icon: Home,
      title: 'Hébergement et Transport',
      description: 'Hôtels adaptés à la convalescence et transferts privés confortables organisés par Mekody avec des options proches des centres médicaux.'
    },
    {
      icon: PhoneCall,
      title: 'Support 24/7',
      description: 'Une équipe dédiée disponible à tout moment pour répondre à vos besoins et assurer votre tranquillité d\'esprit tout au long du processus.'
    },
    {
      icon: FileText,
      title: 'Gestion de Dossier Médical',
      description: 'Centralisation, gestion sécurisée et traduction professionnelle de vos documents médicaux pour faciliter les échanges avec les spécialistes.'
    },
    {
      icon: Shield,
      title: 'Garantie Qualité',
      description: 'Partenaires médicaux rigoureusement sélectionnés et suivis par Mekody selon des critères d\'excellence internationaux.'
    },
    {
      icon: Heart,
      title: 'Téléconsultation & Suivi Post-Opératoire',
      description: 'Suivi médical personnalisé à distance pour une convalescence en toute confiance avec des professionnels dédiés.'
    }
  ];

  const destinations = [
    {
      country: 'Maroc',
      city: 'Casablanca',
      specialties: [
        'Endocrinologie(Diabete)',
        'Cardiologie',
        'Gastro enterologie',
        'ORL',
        'Dentiste',
        'Ophtalmologue',
        'Oncologie',
        'Rhumatologie',
        'Urologie',
        'Traitement de fertilite',
        'Fecondation in vitro',
        'Gynecologie obstetrique'
      ],
      savings: 'Jusqu\'à 60%',
      image: '🇲🇦',
      mainImage: casablancaImg,
      description: 'Mekody positionne Casablanca comme un pôle médical d\'excellence, où savoir-faire international et accessibilité se rejoignent. Grâce à un réseau de cliniques partenaires certifiées et des spécialistes formés dans les meilleures universités européennes, Mekody garantit aux patients un parcours de soins fluide, sécurisé et humain. Le tout dans un environnement moderne et accueillant qui fait de Casablanca une référence pour les traitements médicaux à coûts maîtrisés.',
      advantages: [
        'Expertise médicale de haut niveau avec des praticiens formés en Europe et en Amérique du Nord',
        'Équipements médicaux à la pointe des standards internationaux',
        'Gestion complète du parcours patient par Mekody : de la première consultation au suivi post-opératoire',
        'Économies substantielles allant jusqu\'à 60% par rapport aux tarifs européens',
        'Accompagnement humain et multilingue (français, anglais, arabe)',
        'Séjour médical alliant soins, confort et découverte culturelle de Casablanca',
        'Environnement méditerranéen propice à la récupération et au bien-être',
        'Réseau solide de cliniques partenaires accréditées et conformes aux normes internationales'
      ]
    }
  ];

  // Images pour les spécialités
  const specialityImages = [
    { name: 'Cardiologie', image: cardiologieImg },
    { name: 'Dentiste', image: dentisteImg },
    { name: 'Ophtalmologue', image: ophtalmologieImg },
    { name: 'Oncologie', image: oncologieImg },
    { name: 'Gynecologie obstetrique', image: gynecologieImg },
    { name: 'Traitement de fertilite', image: fertilitéImg },
    { name: 'Fecondation in vitro', image: fertilitéImg },
    { name: 'ORL', image: orlImg },
    { name: 'Urologie', image: urologieImg },
    { name: 'Rhumatologie', image: rhumatologieImg },
    { name: 'Gastro enterologie', image: gastroImg },
    { name: 'Endocrinologie(Diabete)', image: endocrinologieImg }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation gratuite',
      description: 'Analyse de votre dossier médical et recommandations personnalisées',
      icon: PhoneCall
    },
    {
      step: '02',
      title: 'Devis détaillé',
      description: 'Proposition complète incluant soins, voyage et hébergement',
      icon: FileText
    },
    {
      step: '03',
      title: 'Organisation voyage',
      description: 'Réservations, visas et préparation médicale complète',
      icon: Plane
    },
    {
      step: '04',
      title: 'Accompagnement',
      description: 'Prise en charge dès l\'arrivée jusqu\'au retour en France',
      icon: Users
    },
    {
      step: '05',
      title: 'Suivi post-op',
      description: 'Surveillance médicale et accompagnement après intervention',
      icon: Heart
    }
  ];

  const testimonials = [
    {
      name: 'Catherine Moreau',
      age: '45 ans',
      treatment: 'Chirurgie esthétique - Turquie',
      content: 'Expérience exceptionnelle ! L\'équipe Mekody m\'a accompagnée avec un professionnalisme remarquable. Résultats parfaits et économies considérables.',
      rating: 5,
      savings: '4,500€',
      avatar: '/avatars/catherine.jpg'
    },
    {
      name: 'Michel Dubois',
      age: '52 ans',
      treatment: 'Implants dentaires - Tunisie',
      content: 'Je recommande vivement Mekody. Organisation parfaite, qualité des soins excellente, et le suivi post-opératoire irréprochable.',
      rating: 5,
      savings: '3,200€',
      avatar: '/avatars/michel.jpg'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '2,000+',
      label: 'Patients satisfaits'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Sécurité garantie'
    },
    {
      icon: Calendar,
      value: '24/7',
      label: 'Support disponible'
    },
    {
      icon: Shield,
      value: 'ISO',
      label: 'Certifié qualité'
    }
  ];

  return (
    <div className="tourisme-medical">
      {/* Hero Section */}
      <Header/>
      <section className="tourisme-medical__hero">
        <div className="tourisme-medical__container">
          <div className="tourisme-medical__hero-content">
            <div className="tourisme-medical__badge">
              <Heart className="tourisme-medical__badge-icon" />
              <span className="tourisme-medical__badge-text">Tourisme Médical Premium</span>
            </div>
            <h1 className="tourisme-medical__hero-title">
              Soins médicaux <span className="tourisme-medical__hero-title-accent">d'excellence</span>
            </h1>
            <p className="tourisme-medical__hero-description">
              Accédez aux meilleurs soins médicaux internationaux avec un accompagnement 
              complet et des économies substantielles, en toute sérénité.
            </p>
            <div className="tourisme-medical__hero-cta">
              <Link to="/contact" className="tourisme-medical__cta-primary">
                Consultation gratuite
                <ArrowRight size={18} className="tourisme-medical__cta-icon" />
              </Link>
              <a href="#destinations" className="tourisme-medical__cta-secondary">
                Voir les destinations
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="tourisme-medical__trust">
              <div className="tourisme-medical__trust-item">
                <Shield size={16} className="tourisme-medical__trust-icon" />
                <span>100% Sécurisé</span>
              </div>
              <div className="tourisme-medical__trust-item">
                <Award size={16} className="tourisme-medical__trust-icon" />
                <span>Certifié ISO</span>
              </div>
              <div className="tourisme-medical__trust-item">
                <Users size={16} className="tourisme-medical__trust-icon" />
                <span>2000+ Patients satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="tourisme-medical__stats">
        <div className="tourisme-medical__container">
          <div className="tourisme-medical__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="tourisme-medical__stat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="tourisme-medical__stat-icon">
                    <IconComponent size={24} className="tourisme-medical__stat-icon-svg" />
                  </div>
                  <div className="tourisme-medical__stat-number">{stat.value}</div>
                  <div className="tourisme-medical__stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="tourisme-medical__services">
        <div className="tourisme-medical__container">
          <div className="tourisme-medical__header">
            <h2 className="tourisme-medical__title">
              Notre <span className="tourisme-medical__title-accent">Accompagnement</span>
            </h2>
            <p className="tourisme-medical__subtitle">
              Un service complet de A à Z pour garantir votre sérénité et votre réussite.
            </p>
          </div>

          <div className="tourisme-medical__services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="tourisme-medical__service"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="tourisme-medical__service-icon">
                    <IconComponent size={28} className="tourisme-medical__service-icon-svg" />
                  </div>
                  <h3 className="tourisme-medical__service-title">
                    {service.title}
                  </h3>
                  <p className="tourisme-medical__service-description">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="tourisme-medical__destinations">
        <div className="tourisme-medical__container">
          <div className="tourisme-medical__header">
            <h2 className="tourisme-medical__title">
              Nos <span className="tourisme-medical__title-accent">Destinations</span>
            </h2>
            <p className="tourisme-medical__subtitle">
              Découvrez nos destinations partenaires sélectionnées pour leur excellence médicale.
            </p>
          </div>

          <div className="tourisme-medical__destinations-grid">
            {destinations.map((destination, index) => (
              <div
                key={destination.country}
                className="tourisme-medical__destination tourisme-medical__destination--full-width"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tourisme-medical__destination-image-container">
                  <img 
                    src={destination.mainImage} 
                    alt={`${destination.city}, ${destination.country}`}
                    className="tourisme-medical__destination-image"
                  />
                  <div className="tourisme-medical__destination-overlay">
                    <span className="tourisme-medical__destination-flag">{destination.image}</span>
                    <h3 className="tourisme-medical__destination-title">
                      {destination.city}, {destination.country}
                    </h3>
                  </div>
                </div>

                <div className="tourisme-medical__destination-content">
                  <div className="tourisme-medical__destination-header">
                    <div className="tourisme-medical__destination-info">
                      <div>
                        <h3 className="tourisme-medical__destination-country">
                          {destination.country}
                        </h3>
                        <p className="tourisme-medical__destination-city">{destination.city}</p>
                      </div>
                    </div>
                    <div className="tourisme-medical__destination-savings">
                      <div className="tourisme-medical__destination-savings-amount">
                        {destination.savings}
                      </div>
                      <div className="tourisme-medical__destination-savings-label">d'économies</div>
                    </div>
                  </div>

                  <p className="tourisme-medical__destination-description">
                    {destination.description}
                  </p>

                  <div className="tourisme-medical__destination-specialties">
                    <h4 className="tourisme-medical__destination-specialties-title">Spécialités disponibles :</h4>
                    <div className="tourisme-medical__destination-specialties-grid">
                      {destination.specialties.map((specialty, idx) => {
                        const specialityImage = specialityImages.find(img => img.name === specialty) || specialityImages[0];
                        return (
                          <div key={idx} className="tourisme-medical__specialty-card">
                            <div className="tourisme-medical__specialty-image-container">
                              <img 
                                src={specialityImage.image} 
                                alt={specialty}
                                className="tourisme-medical__specialty-image"
                              />
                              <div className="tourisme-medical__specialty-overlay">
                                <span className="tourisme-medical__specialty-name">{specialty}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="tourisme-medical__destination-advantages">
                    <h4 className="tourisme-medical__destination-advantages-title">Avantages :</h4>
                    <ul className="tourisme-medical__destination-advantages-list">
                      {destination.advantages.map((advantage, idx) => (
                        <li key={idx} className="tourisme-medical__destination-advantage">
                          <CheckCircle size={16} className="tourisme-medical__destination-advantage-icon" />
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tourisme-medical__destination-cta-container">
                    <Link
                      to="/contact"
                      className="tourisme-medical__destination-cta"
                    >
                      Demander un devis personnalisé
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="tourisme-medical__process">
        <div className="tourisme-medical__container">
          <div className="tourisme-medical__header">
            <h2 className="tourisme-medical__title">
              Notre <span className="tourisme-medical__title-accent">Processus</span>
            </h2>
            <p className="tourisme-medical__subtitle">
              Un accompagnement étape par étape pour votre tranquillité d'esprit.
            </p>
          </div>

          <div className="tourisme-medical__process-list">
            {process.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="tourisme-medical__process-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="tourisme-medical__process-step">
                    <span className="tourisme-medical__process-step-number">{item.step}</span>
                    <div className="tourisme-medical__process-step-icon">
                      <IconComponent size={20} className="tourisme-medical__process-step-icon-svg" />
                    </div>
                  </div>
                  <div className="tourisme-medical__process-content">
                    <h3 className="tourisme-medical__process-title">
                      {item.title}
                    </h3>
                    <p className="tourisme-medical__process-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="tourisme-medical__testimonials">
        <div className="tourisme-medical__container">
          <div className="tourisme-medical__header">
            <h2 className="tourisme-medical__title">
              Témoignages de nos <span className="tourisme-medical__title-accent">patients</span>
            </h2>
            <p className="tourisme-medical__subtitle">
              Découvrez l'expérience de ceux qui nous ont fait confiance.
            </p>
          </div>

          <div className="tourisme-medical__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="tourisme-medical__testimonial"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tourisme-medical__testimonial-header">
                  <div className="tourisme-medical__testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="tourisme-medical__testimonial-star" />
                    ))}
                  </div>
                  <div className="tourisme-medical__testimonial-savings">
                    Économie: {testimonial.savings}
                  </div>
                </div>
                <p className="tourisme-medical__testimonial-content">
                  "{testimonial.content}"
                </p>
                <div className="tourisme-medical__testimonial-author">
                  <div className="tourisme-medical__testimonial-avatar">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    ) : (
                      <div className="tourisme-medical__testimonial-avatar-fallback">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="tourisme-medical__testimonial-info">
                    <div className="tourisme-medical__testimonial-name">{testimonial.name}</div>
                    <div className="tourisme-medical__testimonial-age">{testimonial.age}</div>
                    <div className="tourisme-medical__testimonial-treatment">{testimonial.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Gallery Section */}
      <section className="tourisme-medical__gallery">
        <div className="tourisme-medical__container">
          <div className="tourisme-medical__header">
            <h2 className="tourisme-medical__title">
              Nos <span className="tourisme-medical__title-accent">Spécialités Médicales</span>
            </h2>
            <p className="tourisme-medical__subtitle">
              Découvrez l'étendue de nos domaines d'expertise médicale
            </p>
          </div>

          <div className="tourisme-medical__gallery-grid">
            {specialityImages.map((specialty, index) => (
              <div key={index} className="tourisme-medical__gallery-item">
                <div className="tourisme-medical__gallery-image-container">
                  <img 
                    src={specialty.image} 
                    alt={specialty.name}
                    className="tourisme-medical__gallery-image"
                  />
                  <div className="tourisme-medical__gallery-overlay">
                    <span className="tourisme-medical__gallery-title">{specialty.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tourisme-medical__cta">
        <div className="tourisme-medical__container">
          <div className="tourisme-medical__cta-content">
            <h2 className="tourisme-medical__cta-title">
              Prêt à prendre soin de votre santé ?
            </h2>
            <p className="tourisme-medical__cta-description">
              Réservez dès maintenant votre consultation gratuite avec nos experts en tourisme médical.
            </p>
            <div className="tourisme-medical__cta-buttons">
              <Link to="/contact" className="tourisme-medical__cta-button-primary">
                <Calendar size={18} className="tourisme-medical__cta-button-icon" />
                Prendre rendez-vous
              </Link>
              <a
                href="tel:+33123456789"
                className="tourisme-medical__cta-button-secondary"
              >
                <Phone size={18} className="tourisme-medical__cta-button-icon" />
                Appel immédiat
              </a>
              <a
                href="https://wa.me/33123456789"
                className="tourisme-medical__cta-button-secondary"
              >
                <MessageCircle size={18} className="tourisme-medical__cta-button-icon" />
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

export default TourismeMedical;