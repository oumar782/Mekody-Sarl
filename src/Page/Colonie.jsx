import { Link } from 'react-router-dom';
import { 
  Sun, 
  Heart, 
  Trophy, 
  Shield, 
  Camera,
  Compass,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Smile,
  Phone,
  MessageCircle,
  BookOpen,
  Mountain,
  Palette,
  TrendingUp
} from 'lucide-react';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import './Colonie.css';

const ColonieVacances = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Aventure',
      description: 'Découvertes passionnantes et activités outdoor stimulantes',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BookOpen,
      title: 'Apprentissage',
      description: 'Développement de nouvelles compétences et talents',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Amitié',
      description: 'Création de liens durables et épanouissement social',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const programs = [
    {
      title: 'Explorateurs de la Nature',
      age: '6-10 ans',
      duration: '2 semaines',
      location: 'Alpes françaises',
      image: '',
      description: 'Découverte de la faune et flore alpine avec des activités ludiques et éducatives.',
      activities: [
        'Randonnées adaptées',
        'Observation des animaux',
        'Ateliers nature',
        'Jeux de piste',
        'Bivouac étoilé'
      ],
      price: '890€',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Aventuriers Créatifs',
      age: '11-14 ans',
      duration: '3 semaines',
      location: 'Côte Atlantique',
      image: '',
      description: 'Fusion parfaite entre activités créatives et sports nautiques.',
      activities: [
        'Surf et bodyboard',
        'Ateliers artistiques',
        'Théâtre et musique',
        'Construction cabanes',
        'Spectacle final'
      ],
      price: '1,290€',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Leaders de Demain',
      age: '15-17 ans',
      duration: '4 semaines',
      location: 'Provence',
      image: '',
      description: 'Programme de leadership et d\'entrepreneuriat avec projets concrets.',
      activities: [
        'Ateliers leadership',
        'Création d\'entreprise',
        'Projets solidaires',
        'Escalade et via ferrata',
        'Certification compétences'
      ],
      price: '1,690€',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Sécurité Maximale',
      description: 'Encadrement qualifié BAFA/BAFD et protocoles de sécurité stricts'
    },
    {
      icon: Users,
      title: 'Groupes Réduits',
      description: 'Maximum 12 enfants par animateur pour un suivi personnalisé'
    },
    {
      icon: Camera,
      title: 'Suivi Photographique',
      description: 'Photos et vidéos quotidiennes partagées avec les parents'
    },
    {
      icon: Smile,
      title: 'Épanouissement',
      description: 'Développement de l\'autonomie et de la confiance en soi'
    },
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Environnement positif et inclusif pour tous les enfants'
    },
    {
      icon: TrendingUp,
      title: 'Progression',
      description: 'Suivi personnalisé des compétences acquises pendant le séjour'
    }
  ];

  const testimonials = [
    {
      parentName: 'Marie Dubois',
      childName: 'Lucas, 12 ans',
      program: 'Aventuriers Créatifs',
      content: 'Lucas est revenu transformé ! Plus confiant, autonome et avec des souvenirs inoubliables. L\'équipe Mekody est exceptionnelle.',
      rating: 5,
      avatar: '/avatars/marie.jpg'
    },
    {
      parentName: 'Pierre Martin',
      childName: 'Emma, 9 ans',
      program: 'Explorateurs de la Nature',
      content: 'Emma ne parlait que de sa colonie pendant des mois ! Elle a découvert sa passion pour la nature et s\'est fait de vrais amis.',
      rating: 5,
      avatar: '/avatars/pierre.jpg'
    },
    {
      parentName: 'Sophie Leroux',
      childName: 'Thomas, 16 ans',
      program: 'Leaders de Demain',
      content: 'Programme exceptionnel qui a révélé le potentiel de leadership de Thomas. Il a même lancé son premier projet entrepreneurial !',
      rating: 5,
      avatar: '/avatars/sophie.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Quel est l\'encadrement prévu ?',
      answer: 'Nous respectons un ratio de 1 animateur pour 8 enfants (6-12 ans) et 1 pour 12 adolescents (13-17 ans). Tous nos animateurs sont diplômés BAFA/BAFD.'
    },
    {
      question: 'Comment suivre mon enfant pendant le séjour ?',
      answer: 'Les parents reçoivent quotidiennement des photos et nouvelles via notre application dédiée. Un blog de colonie est également mis à jour chaque jour.'
    },
    {
      question: 'Que faire si mon enfant ne se plaît pas ?',
      answer: 'Notre équipe est formée pour accompagner chaque enfant. En cas de difficulté persistante, nous vous contactons pour trouver la meilleure solution ensemble.'
    },
    {
      question: 'Quels sont les repas proposés ?',
      answer: 'Nos menus sont équilibrés, variés et préparés sur place avec des produits frais. Nous adaptons aux régimes spécifiques et allergies.'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '2,500+',
      label: 'Enfants accueillis'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Satisfaction parents'
    },
    {
      icon: Calendar,
      value: '15 ans',
      label: 'D\'expérience'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Sécurité garantie'
    }
  ];

  return (
    <div className="colonie-vacances">
      <Header />

    
      {/* Hero Section */}
      <section className="colonie-vacances__hero">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__hero-content">
            <div className="colonie-vacances__badge">
              <Sun className="colonie-vacances__badge-icon" />
              <span className="colonie-vacances__badge-text">Colonies de Vacances Premium</span>
            </div>
            <h1 className="colonie-vacances__hero-title">
              Vacances <span className="colonie-vacances__hero-title-accent">Inoubliables</span>
            </h1>
            <p className="colonie-vacances__hero-description">
              Offrez à vos enfants des vacances extraordinaires alliant aventure, apprentissage et amitié 
              dans un cadre sécurisé et bienveillant.
            </p>
            <div className="colonie-vacances__hero-cta">
              <Link to="/contact" className="colonie-vacances__cta-primary">
                Inscrire mon enfant
                <ArrowRight size={18} className="colonie-vacances__cta-icon" />
              </Link>
              <a href="#programmes" className="colonie-vacances__cta-secondary">
                Découvrir les programmes
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="colonie-vacances__trust">
              <div className="colonie-vacances__trust-item">
                <Shield size={16} className="colonie-vacances__trust-icon" />
                <span>Agrément Jeunesse & Sports</span>
              </div>
              <div className="colonie-vacances__trust-item">
                <Star size={16} className="colonie-vacances__trust-icon" />
                <span>4.9/5 - 500+ avis parents</span>
              </div>
              <div className="colonie-vacances__trust-item">
                <Users size={16} className="colonie-vacances__trust-icon" />
                <span>15 ans d'expérience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="colonie-vacances__stats">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="colonie-vacances__stat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="colonie-vacances__stat-icon">
                    <IconComponent size={24} className="colonie-vacances__stat-icon-svg" />
                  </div>
                  <div className="colonie-vacances__stat-number">{stat.value}</div>
                  <div className="colonie-vacances__stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="colonie-vacances__pillars">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__header">
            <h2 className="colonie-vacances__title">
              Nos 3 <span className="colonie-vacances__title-accent">Piliers</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Une philosophie unique basée sur trois valeurs fondamentales pour l'épanouissement de votre enfant.
            </p>
          </div>

          <div className="colonie-vacances__pillars-grid">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="colonie-vacances__pillar"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`colonie-vacances__pillar-icon colonie-vacances__pillar-icon--${pillar.title.toLowerCase()}`}>
                    <IconComponent size={32} className="colonie-vacances__pillar-icon-svg" />
                  </div>
                  <h3 className="colonie-vacances__pillar-title">
                    {pillar.title}
                  </h3>
                  <p className="colonie-vacances__pillar-description">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programmes" className="colonie-vacances__programs">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__header">
            <h2 className="colonie-vacances__title">
              Nos <span className="colonie-vacances__title-accent">Programmes</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Des séjours adaptés à chaque tranche d'âge pour une expérience sur mesure.
            </p>
          </div>

          <div className="colonie-vacances__programs-grid">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="colonie-vacances__program"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="colonie-vacances__program-header">
                  <div className="colonie-vacances__program-info">
                    <span className="colonie-vacances__program-emoji">{program.image}</span>
                    <div className={`colonie-vacances__program-age colonie-vacances__program-age--${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {program.age}
                    </div>
                  </div>
                  <div className="colonie-vacances__program-price">
                    <div className="colonie-vacances__program-price-amount">{program.price}</div>
                    <div className="colonie-vacances__program-price-label">Tout inclus</div>
                  </div>
                </div>

                <h3 className="colonie-vacances__program-title">
                  {program.title}
                </h3>
                <p className="colonie-vacances__program-description">
                  {program.description}
                </p>

                <div className="colonie-vacances__program-meta">
                  <div className="colonie-vacances__program-meta-item">
                    <Calendar size={16} className="colonie-vacances__program-meta-icon" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="colonie-vacances__program-meta-item">
                    <MapPin size={16} className="colonie-vacances__program-meta-icon" />
                    <span>{program.location}</span>
                  </div>
                </div>

                <div className="colonie-vacances__program-activities">
                  <h4 className="colonie-vacances__program-activities-title">Activités incluses :</h4>
                  <ul className="colonie-vacances__program-activities-list">
                    {program.activities.map((activity, idx) => (
                      <li key={idx} className="colonie-vacances__program-activities-item">
                        <CheckCircle size={16} className="colonie-vacances__program-activities-icon" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="colonie-vacances__program-cta"
                >
                  Réserver maintenant
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="colonie-vacances__features">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__header">
            <h2 className="colonie-vacances__title">
              Pourquoi nous <span className="colonie-vacances__title-accent">choisir</span> ?
            </h2>
            <p className="colonie-vacances__subtitle">
              La sécurité et l'épanouissement de votre enfant sont nos priorités absolues.
            </p>
          </div>

          <div className="colonie-vacances__features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="colonie-vacances__feature"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="colonie-vacances__feature-icon">
                    <IconComponent size={28} className="colonie-vacances__feature-icon-svg" />
                  </div>
                  <h3 className="colonie-vacances__feature-title">
                    {feature.title}
                  </h3>
                  <p className="colonie-vacances__feature-description">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="colonie-vacances__testimonials">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__header">
            <h2 className="colonie-vacances__title">
              Témoignages des <span className="colonie-vacances__title-accent">parents</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Découvrez ce que pensent les familles qui nous font confiance.
            </p>
          </div>

          <div className="colonie-vacances__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.parentName}
                className="colonie-vacances__testimonial"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="colonie-vacances__testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="colonie-vacances__testimonial-star" />
                  ))}
                </div>
                <p className="colonie-vacances__testimonial-content">
                  "{testimonial.content}"
                </p>
                <div className="colonie-vacances__testimonial-author">
                  <div className="colonie-vacances__testimonial-avatar">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.parentName} />
                    ) : (
                      <div className="colonie-vacances__testimonial-avatar-fallback">
                        {testimonial.parentName.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="colonie-vacances__testimonial-info">
                    <div className="colonie-vacances__testimonial-name">{testimonial.parentName}</div>
                    <div className="colonie-vacances__testimonial-child">Parent de {testimonial.childName}</div>
                    <div className="colonie-vacances__testimonial-program">{testimonial.program}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="colonie-vacances__faq">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__header">
            <h2 className="colonie-vacances__title">
              Questions fréquentes
            </h2>
            <p className="colonie-vacances__subtitle">
              Tout ce que vous devez savoir avant d'inscrire votre enfant.
            </p>
          </div>

          <div className="colonie-vacances__faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="colonie-vacances__faq-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="colonie-vacances__faq-question">
                  {faq.question}
                </h3>
                <p className="colonie-vacances__faq-answer">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="colonie-vacances__cta">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__cta-content">
            <h2 className="colonie-vacances__cta-title">
              Prêt à offrir des souvenirs inoubliables ?
            </h2>
            <p className="colonie-vacances__cta-description">
              Inscrivez votre enfant dès maintenant et bénéficiez de nos tarifs préférentiels.
            </p>
            <div className="colonie-vacances__cta-buttons">
              <Link to="/contact" className="colonie-vacances__cta-button-primary">
                Inscription immédiate
              </Link>
              <a
                href="tel:+33123456789"
                className="colonie-vacances__cta-button-secondary"
              >
                <Phone size={18} className="colonie-vacances__cta-button-icon" />
                Conseils par téléphone
              </a>
              <a
                href="https://wa.me/33123456789"
                className="colonie-vacances__cta-button-secondary"
              >
                <MessageCircle size={18} className="colonie-vacances__cta-button-icon" />
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

export default ColonieVacances;