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
      title: 'Voyages Organisés – L\'Émotion',
      age: 'Familles & Adultes',
      duration: '8 jours / 7 nuits',
      location: 'Marrakech • Atlas • Désert',
      image: '',
      description: 'Découverte des villes impériales, des montagnes de l\'Atlas et d\'une nuit en bivouac dans le désert.',
      activities: [
        'Visite des médinas historiques',
        'Randonnée dans l\'Atlas',
        'Nuit en bivouac saharien',
        'Spectacle de folklore',
        'Dégustation culinaire'
      ],
      price: 'sur devis',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Voyages d\'Étude',
      age: 'Étudiants & Groupes',
      duration: 'Sur mesure',
      location: 'Tout le Maroc',
      image: '',
      description: 'Nos voyages d\'étude au Maroc offrent une approche pédagogique innovante pour comprendre les enjeux économiques, sociaux et culturels du monde.',
      activities: [
        'Rencontres avec des professionnels',
        'Visites d\'entreprises et institutions',
        'Ateliers interactifs',
        'Analyses de cas concrets',
        'Échanges culturels enrichissants'
      ],
      price: 'Sur devis',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Colonie de Vacances',
      age: 'Enfants & Adolescents',
      duration: '10-15 jours',
      location: 'Stations balnéaires & Montagne',
      image: '',
      description: 'Expériences immersives et éducatives conçues pour être enrichissantes et répondre aux besoins spécifiques de chaque groupe.',
      activities: [
        'Activités ludiques et éducatives',
        'Sports nautiques et randonnées',
        'Ateliers culturels et artisanaux',
        'Veillées autour du feu',
        'Apprentissage linguistique'
      ],
      price: 'Sur devis',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Sécurité Garantie',
      description: 'Votre sécurité et votre bien-être sont notre priorité. Nous assurons une assistance rapide et efficace en toute circonstance.'
    },
    {
      icon: Users,
      title: 'Équipe Expérimentée',
      description: 'Notre équipe est composée de professionnels expérimentés et passionnés par le Maroc, à votre écoute pour vous conseiller.'
    },
    {
      icon: Camera,
      title: 'Expériences Authentiques',
      description: 'Nous créons avec vous le voyage de vos rêves, en vous offrant une expérience authentique et personnalisée.'
    },
    {
      icon: Smile,
      title: 'Accompagnement Personnalisé',
      description: 'Choisir Mekody, c\'est opter pour la tranquillité, l\'authenticité et un accompagnement de qualité.'
    },
    {
      icon: Heart,
      title: 'Services Complets',
      description: 'Nous proposons une gamme complète de services pour garantir une expérience inoubliable et sécurisée au Maroc.'
    },
    {
      icon: TrendingUp,
      title: 'Expertise Locale',
      description: 'Avec nous, chaque expérience devient un souvenir unique, qu\'il s\'agisse d\'une découverte culturelle ou d\'un voyage d\'étude.'
    }
  ];

  const testimonials = [
    {
      parentName: 'Bintou Koita',
      childName: 'Circuit Aventure Impériale',
      program: 'Voyage en couple',
      content: 'Un service impeccable qui nous a fait découvrir le vrai Maroc. Notre guide était incroyablement attentionné et connaissait parfaitement les meilleurs endroits.',
      rating: 5,
    },
    {
      parentName: 'Groupe Universitaire ',
      childName: 'Voyage d\'étude médicale',
      program: 'Université De Bamako',
      content: 'Une expérience académique exceptionnelle ! L\'approche pédagogique innovante nous a permis de comprendre les enjeux économiques du Maroc de façon concrète.',
      rating: 5,
    },
    {
      parentName: 'Famille Konaté',
      childName: 'Colonie de vacances enfants',
      program: 'Séjour été 2025',
      content: 'Nos enfants sont revenus enchantés de leur colonie ! Entre les activités éducatives et les découvertes culturelles, ils ont vécu des moments magiques.',
      rating: 5,
    }
  ];

  const faqs = [
    {
      question: 'Quelle est la meilleure période pour visiter le Maroc ?',
      answer: 'Le printemps (mars-mai) et l\'automne (septembre-novembre) offrent des températures idéales. L\'hiver est parfait pour le désert, et l\'été pour les régions côtières.'
    },
    {
      question: 'Proposez-vous des voyages adaptés aux enfants ?',
      answer: 'Absolument ! Nos colonies de vacances sont spécialement conçues pour les enfants et adolescents, avec des activités adaptées à chaque âge et un encadrement professionnel.'
    },
    {
      question: 'Comment se déroulent les voyages d\'étude ?',
      answer: 'Nos voyages d\'étude sont conçus pour être immersifs et répondre aux besoins spécifiques de chaque groupe, avec une approche pédagogique innovante.'
    },
    {
      question: 'Quelle est votre politique de sécurité ?',
      answer: 'Votre sécurité et votre bien-être sont notre priorité. Nous assurons une assistance rapide et efficace en toute circonstance avec des professionnels dédiés.'
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
              Découvrez le <span className="colonie-vacances__hero-title-accent">Maroc Authentique</span>
            </h1>
            <p className="colonie-vacances__hero-description">
              Un voyage au Maroc est une immersion dans un monde de couleurs, de saveurs et de traditions. 
              Laissez-vous guider à travers des paysages époustouflants et des rencontres inoubliables.
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
                <span>Sécurité et bien-être garantis</span>
              </div>
              <div className="colonie-vacances__trust-item">
                <div className="colonie-vacances__trust-icon-wrapper">
                  <Star size={16} className="colonie-vacances__trust-icon" />
                </div>
                <span>Équipe de professionnels expérimentés</span>
              </div>
              <div className="colonie-vacances__trust-item">
                <div className="colonie-vacances__trust-icon-wrapper">
                  <Users size={16} className="colonie-vacances__trust-icon" />
                </div>
                <span>Expériences authentiques et personnalisées</span>
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
              Pourquoi nous <span className="colonie-vacances__title-accent">choisir</span> ?
            </h2>
            <p className="colonie-vacances__subtitle">
              Choisir Mekody, c'est faire le choix de la sérénité. Nous mettons à votre disposition expertise, 
              sécurité et accompagnement personnalisé pour répondre à tous vos besoins, où que vous soyez.
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
              <span>Nos services</span>
            </div>
            <h2 className="colonie-vacances__title">
              Ce que nous <span className="colonie-vacances__title-accent">offrons</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Nous proposons une gamme complète de services pour garantir une expérience inoubliable 
              et sécurisée au Maroc, que ce soit pour la découverte, l'apprentissage ou votre tranquillité d'esprit.
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
                  <h4 className="colonie-vacances__program-activities-title">Ce qui est inclus :</h4>
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
              <span>Nos avantages</span>
            </div>
            <h2 className="colonie-vacances__title">
              Nos <span className="colonie-vacances__title-accent">avantages</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Choisir notre agence, c'est opter pour la tranquillité, l'authenticité et un accompagnement de qualité.
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
              <span>Témoignages</span>
            </div>
            <h2 className="colonie-vacances__title">
              Ils nous font <span className="colonie-vacances__title-accent">confiance</span>
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
              Prêt à créer votre expérience sur mesure au Maroc ?
            </h2>
            <p className="colonie-vacances__cta-description">
              Contactez-nous pour discuter de votre projet de voyage, d'étude ou pour en savoir plus sur nos services.
            </p>
            <div className="colonie-vacances__cta-buttons">
              <Link to="/contact" className="colonie-vacances__cta-button-primary">
                <span>Demander un devis</span>
                <div className="colonie-vacances__cta-button-shine"></div>
              </Link>
              <a
                href="tel:+212669712186"
                className="colonie-vacances__cta-button-secondary"
              >
                <Phone size={18} className="colonie-vacances__cta-button-icon" />
                <span>+212 669-712186</span>
              </a>
              <a
                href="mailto:mekodysarl@gmail.com"
                className="colonie-vacances__cta-button-secondary"
              >
                <MessageCircle size={18} className="colonie-vacances__cta-button-icon" />
                <span>Email</span>
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