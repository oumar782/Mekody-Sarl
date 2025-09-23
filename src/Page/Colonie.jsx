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
import { useEffect, useRef, useState } from 'react';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import './Colonie.css';

const ColonieVacances = () => {
  const [animatedStats, setAnimatedStats] = useState({
    travelers: 0,
    satisfaction: 0,
    experience: 0,
    coverage: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const pillars = [
    {
      icon: Compass,
      title: 'Authenticité',
      description: 'Immersion totale dans la culture et les traditions marocaines',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BookOpen,
      title: 'Découverte',
      description: 'Exploration des trésors cachés et sites emblématiques du Maroc',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Accueil chaleureux et accompagnement personnalisé tout au long du séjour',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const programs = [
    {
      title: 'Aventure Impériale',
      age: 'Familles & Adultes',
      duration: '8 jours / 7 nuits',
      location: 'Marrakech • Atlas • Désert',
      image: '🏰',
      description: 'Découverte des villes impériales, des montagnes de l\'Atlas et d\'une nuit en bivouac dans le désert.',
      activities: [
        'Visite des médinas historiques',
        'Randonnée dans l\'Atlas',
        'Nuit en bivouac saharien',
        'Spectacle de folklore',
        'Dégustation culinaire'
      ],
      price: 'À partir de 890€',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Trésors Côtiers',
      age: 'Familles & Couples',
      duration: '10 jours / 9 nuits',
      location: 'Casablanca • Essaouira • Agadir',
      image: '🌊',
      description: 'Circuit along the Atlantic coast discovering fishing villages, argan cooperatives and golden beaches.',
      activities: [
        'Visite de la mosquée Hassan II',
        'Découverte des criques cachées',
        'Ateliers de cuisine traditionnelle',
        'Observation des dauphins',
        'Dégustation de produits locaux'
      ],
      price: 'À partir de 1,290€',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Expérience Berbère',
      age: 'Aventuriers & Randonneurs',
      duration: '12 jours / 11 nuits',
      location: 'Vallées du Draa • Désert • Gorges',
      image: '🏜️',
      description: 'Immersion complète dans la culture berbère à travers les paysages les plus spectaculaires du Sud marocain.',
      activities: [
        'Rencontres avec les communautés locales',
        'Randonnées chamelières',
        'Nuits chez l\'habitant',
        'Ateliers artisanaux',
        'Observation des étoiles'
      ],
      price: 'À partir de 1,690€',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Sécurité Garantie',
      description: 'Chauffeurs professionnels et guides certifiés, véhicules conformes aux normes'
    },
    {
      icon: Users,
      title: 'Petits Groupes',
      description: 'Maximum 8 personnes pour une expérience personnalisée et authentique'
    },
    {
      icon: Camera,
      title: 'Concierge 24/7',
      description: 'Assistance permanente pendant tout votre séjour au Maroc'
    },
    {
      icon: Smile,
      title: 'Flexibilité',
      description: 'Itinéraires modulables selon vos envies et préférences'
    },
    {
      icon: Heart,
      title: 'Authenticité',
      description: 'Rencontres vraies avec la population locale et expériences uniques'
    },
    {
      icon: TrendingUp,
      title: 'Exclusivité',
      description: 'Accès à des sites et expériences normalement inaccessibles aux touristes'
    }
  ];

  const testimonials = [
    {
      parentName: 'Sophie et Marc',
      childName: 'Circuit Aventure Impériale',
      program: 'Voyage en couple',
      content: 'Un service impeccable qui nous a fait découvrir le vrai Maroc. Notre guide Mohamed était incroyablement attentionné et connaissait parfaitement les meilleurs endroits.',
      rating: 5,
      avatar: '/avatars/sophie-marc.jpg'
    },
    {
      parentName: 'Famille Dubois',
      childName: 'Avec enfants 8 et 12 ans',
      program: 'Trésors Côtiers',
      content: 'Nos enfants ont adoré ce voyage ! Entre les plages, les marchés colorés et l\'accueil chaleureux des Marocains, nous avons vécu des moments magiques en famille.',
      rating: 5,
      avatar: '/avatars/dubois.jpg'
    },
    {
      parentName: 'Thomas Leroux',
      childName: 'Voyage entre amis',
      program: 'Expérience Berbère',
      content: 'Une aventure humaine incroyable. Dormir chez l\'habitant, partager des repas traditionnels, randonner dans des paysages à couper le souffle... Le Maroc authentique existe et Mekody nous l\'a fait découvrir !',
      rating: 5,
      avatar: '/avatars/thomas.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Quelle est la meilleure période pour visiter le Maroc ?',
      answer: 'Le printemps (mars-mai) et l\'automne (septembre-novembre) offrent des températures idéales. L\'hiver est parfait pour le désert, et l\'été pour les régions côtières.'
    },
    {
      question: 'Faut-il un visa pour le Maroc ?',
      answer: 'Pour la plupart des nationalités européennes, canadiennes et américaines, aucun visa n\'est requis pour des séjours de moins de 90 jours. Un passeport valide est suffisant.'
    },
    {
      question: 'Comment se déroulent les transports ?',
      answer: 'Nous utilisons des véhicules privés climatisés avec chauffeur professionnel. Pour certaines étapes, nous pouvons organiser des trajets en train pour une expérience authentique.'
    },
    {
      question: 'Quelle est la monnaie locale ?',
      answer: 'La monnaie est le Dirham marocain (MAD). Nous vous conseillons sur le change et les moyens de paiement les plus adaptés pendant votre séjour.'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '2,500+',
      label: 'Voyageurs satisfaits',
      target: 2500
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Satisfaction clients',
      target: 4.9
    },
    {
      icon: Calendar,
      value: '10 ans',
      label: 'D\'expérience',
      target: 10
    },
    {
      icon: MapPin,
      value: '100%',
      label: 'Couverture du Maroc',
      target: 100
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
              
              if (key === 'satisfaction') {
                setAnimatedStats(prev => ({
                  ...prev,
                  [key]: Number((start + progress * (end - start)).toFixed(1))
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

          animateValue(0, 2500, 2000, 'travelers');
          animateValue(0, 4.9, 1800, 'satisfaction');
          animateValue(0, 10, 1500, 'experience');
          animateValue(0, 100, 1200, 'coverage');
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
    <div className="colonie-vacances">
      <Header />

      {/* Hero Section avec motifs marocains */}
      <section className="colonie-vacances__hero">
        <div className="colonie-vacances__hero-pattern"></div>
        <div className="colonie-vacances__hero-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="colonie-vacances__hero-particle"></div>
          ))}
        </div>
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__hero-content">
            <div className="colonie-vacances__badge">
              <Sun className="colonie-vacances__badge-icon" />
              <span className="colonie-vacances__badge-text">Voyages Sur Mesure au Maroc</span>
              <div className="colonie-vacances__badge-glow"></div>
            </div>
            <h1 className="colonie-vacances__hero-title">
              Votre Aventure <span className="colonie-vacances__hero-title-accent">Marocaine</span>
            </h1>
            <p className="colonie-vacances__hero-description">
              Découvrez le Maroc authentique à travers des expériences uniques et personnalisées, 
              alliant confort, culture et aventures inoubliables.
            </p>
            <div className="colonie-vacances__hero-cta">
              <Link to="/contact" className="colonie-vacances__cta-primary">
                <span>Créer mon voyage</span>
                <div className="colonie-vacances__cta-icon-wrapper">
                  <ArrowRight size={18} className="colonie-vacances__cta-icon" />
                </div>
                <div className="colonie-vacances__cta-shine"></div>
              </Link>
              <a href="#programmes" className="colonie-vacances__cta-secondary">
                <span>Découvrir nos circuits</span>
                <div className="colonie-vacances__cta-arrow"></div>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="colonie-vacances__trust">
              <div className="colonie-vacances__trust-item">
                <div className="colonie-vacances__trust-icon-wrapper">
                  <Shield size={16} className="colonie-vacances__trust-icon" />
                </div>
                <span>Agrément Tourisme Maroc</span>
              </div>
              <div className="colonie-vacances__trust-item">
                <div className="colonie-vacances__trust-icon-wrapper">
                  <Star size={16} className="colonie-vacances__trust-icon" />
                </div>
                <span>4.9/5 - 500+ avis voyageurs</span>
              </div>
              <div className="colonie-vacances__trust-item">
                <div className="colonie-vacances__trust-icon-wrapper">
                  <Users size={16} className="colonie-vacances__trust-icon" />
                </div>
                <span>10 ans d'expérience</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="colonie-vacances__hero-scroll">
          <div className="colonie-vacances__hero-scroll-text">Explorer</div>
          <div className="colonie-vacances__hero-scroll-arrow"></div>
        </div>
      </section>

      {/* Stats Section avec animations */}
      <section className="colonie-vacances__stats" ref={statsRef}>
        <div className="colonie-vacances__stats-bg"></div>
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const displayValue = isVisible ? 
                (stat.label === 'Satisfaction clients' ? animatedStats.satisfaction + '/5' :
                 stat.label === 'Couverture du Maroc' ? animatedStats.coverage + '%' :
                 stat.label === 'D\'expérience' ? animatedStats.experience + ' ans' :
                 animatedStats.travelers + '+') : 
                '0' + (stat.label === 'Satisfaction clients' ? '/5' : 
                       stat.label === 'Couverture du Maroc' ? '%' : 
                       stat.label === 'D\'expérience' ? ' ans' : '+');
              
              return (
                <div
                  key={stat.label}
                  className="colonie-vacances__stat"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="colonie-vacances__stat-icon">
                    <IconComponent size={24} className="colonie-vacances__stat-icon-svg" />
                    <div className="colonie-vacances__stat-icon-glow"></div>
                  </div>
                  <div className="colonie-vacances__stat-number">{displayValue}</div>
                  <div className="colonie-vacances__stat-label">{stat.label}</div>
                  <div className="colonie-vacances__stat-bar">
                    <div 
                      className="colonie-vacances__stat-progress" 
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

      {/* Pillars Section */}
      <section className="colonie-vacances__pillars">
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__header">
            <div className="colonie-vacances__header-badge">
              <Compass className="colonie-vacances__header-badge-icon" />
              <span>Notre philosophie</span>
            </div>
            <h2 className="colonie-vacances__title">
              Nos 3 <span className="colonie-vacances__title-accent">Engagements</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Une approche unique pour vous faire vivre une expérience marocaine authentique et personnalisée.
            </p>
          </div>

          <div className="colonie-vacances__pillars-grid">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="colonie-vacances__pillar"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="colonie-vacances__pillar-glow"></div>
                  <div className={`colonie-vacances__pillar-icon colonie-vacances__pillar-icon--${index}`}>
                    <IconComponent size={32} className="colonie-vacances__pillar-icon-svg" />
                    <div className="colonie-vacances__pillar-icon-bg"></div>
                  </div>
                  <h3 className="colonie-vacances__pillar-title">
                    {pillar.title}
                  </h3>
                  <p className="colonie-vacances__pillar-description">
                    {pillar.description}
                  </p>
                  <div className="colonie-vacances__pillar-decoration">
                    <div className="colonie-vacances__pillar-dot"></div>
                    <div className="colonie-vacances__pillar-dot"></div>
                    <div className="colonie-vacances__pillar-dot"></div>
                  </div>
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
            <div className="colonie-vacances__header-badge">
              <MapPin className="colonie-vacances__header-badge-icon" />
              <span>Itinéraires exclusifs</span>
            </div>
            <h2 className="colonie-vacances__title">
              Nos <span className="colonie-vacances__title-accent">Circuits</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Des itinéraires conçus pour révéler la diversité et la beauté du Maroc.
            </p>
          </div>

          <div className="colonie-vacances__programs-grid">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="colonie-vacances__program"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="colonie-vacances__program-glow"></div>
                <div className="colonie-vacances__program-header">
                  <div className="colonie-vacances__program-info">
                    <div className="colonie-vacances__program-emoji">{program.image}</div>
                    <div className={`colonie-vacances__program-age colonie-vacances__program-age--${index}`}>
                      {program.age}
                    </div>
                  </div>
                  <div className="colonie-vacances__program-price">
                    <div className="colonie-vacances__program-price-amount">{program.price}</div>
                    <div className="colonie-vacances__program-price-label">par personne</div>
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
                  <h4 className="colonie-vacances__program-activities-title">Expériences incluses :</h4>
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
                  Personnaliser ce circuit
                  <div className="colonie-vacances__program-cta-arrow"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="colonie-vacances__features">
        <div className="colonie-vacances__features-pattern"></div>
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__header">
            <div className="colonie-vacances__header-badge">
              <Trophy className="colonie-vacances__header-badge-icon" />
              <span>Notre différence</span>
            </div>
            <h2 className="colonie-vacances__title">
              Pourquoi nous <span className="colonie-vacances__title-accent">choisir</span> ?
            </h2>
            <p className="colonie-vacances__subtitle">
              L'expertise locale et l'accompagnement personnalisé font toute la différence.
            </p>
          </div>

          <div className="colonie-vacances__features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="colonie-vacances__feature"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="colonie-vacances__feature-glow"></div>
                  <div className="colonie-vacances__feature-icon">
                    <IconComponent size={28} className="colonie-vacances__feature-icon-svg" />
                    <div className="colonie-vacances__feature-icon-bg"></div>
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
            <div className="colonie-vacances__header-badge">
              <Heart className="colonie-vacances__header-badge-icon" />
              <span>Ils nous font confiance</span>
            </div>
            <h2 className="colonie-vacances__title">
              Témoignages des <span className="colonie-vacances__title-accent">voyageurs</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Découvrez ce que pensent ceux qui ont déjà vécu l'expérience Mekody.
            </p>
          </div>

          <div className="colonie-vacances__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.parentName}
                className="colonie-vacances__testimonial"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="colonie-vacances__testimonial-glow"></div>
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
                    <div className="colonie-vacances__testimonial-child">{testimonial.childName}</div>
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
            <div className="colonie-vacances__header-badge">
              <BookOpen className="colonie-vacances__header-badge-icon" />
              <span>Informations pratiques</span>
            </div>
            <h2 className="colonie-vacances__title">
              Questions fréquentes
            </h2>
            <p className="colonie-vacances__subtitle">
              Tout ce que vous devez savoir avant de planifier votre voyage au Maroc.
            </p>
          </div>

          <div className="colonie-vacances__faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="colonie-vacances__faq-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="colonie-vacances__faq-glow"></div>
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
        <div className="colonie-vacances__cta-pattern"></div>
        <div className="colonie-vacances__container">
          <div className="colonie-vacances__cta-content">
            <div className="colonie-vacances__cta-badge">
              <Sun className="colonie-vacances__cta-badge-icon" />
              <span>Votre aventure vous attend</span>
            </div>
            <h2 className="colonie-vacances__cta-title">
              Prêt à vivre votre aventure marocaine ?
            </h2>
            <p className="colonie-vacances__cta-description">
              Contactez-nous dès maintenant pour créer le voyage sur mesure de vos rêves.
            </p>
            <div className="colonie-vacances__cta-buttons">
              <Link to="/contact" className="colonie-vacances__cta-button-primary">
                <span>Demander un devis</span>
                <div className="colonie-vacances__cta-button-shine"></div>
              </Link>
              <a
                href="tel:+212524439600"
                className="colonie-vacances__cta-button-secondary"
              >
                <Phone size={18} className="colonie-vacances__cta-button-icon" />
                <span>+212 524 439 600</span>
              </a>
              <a
                href="https://wa.me/212624567890"
                className="colonie-vacances__cta-button-secondary"
              >
                <MessageCircle size={18} className="colonie-vacances__cta-button-icon" />
                <span>WhatsApp</span>
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