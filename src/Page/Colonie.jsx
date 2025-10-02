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
      title: 'Expertise',
      description: 'Équipe de professionnels expérimentés et passionnés par le Maroc',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Votre sécurité et votre bien-être sont notre priorité absolue',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Personnalisation',
      description: 'Nous créons avec vous le voyage de vos rêves, authentique et sur mesure',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const programs = [
    {
      title: 'Voyages Organisés – L\'Émotion',
      age: 'Tous publics',
      duration: 'Sur mesure',
      location: 'Tout le Maroc',
      image: '',
      description: 'Un voyage au Maroc est une immersion dans un monde de couleurs, de saveurs et de traditions.',
      activities: [
        'Paysages époustouflants',
        'Rencontres inoubliables',
        'Expériences authentiques',
        'Culture riche et diverse',
        'Traditions préservées'
      ],
      price: 'Sur devis',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Voyages d\'Étude',
      age: 'Groupes éducatifs',
      duration: 'Programmes adaptés',
      location: 'Régions ciblées',
      image: '',
      description: 'Approche pédagogique innovante pour comprendre les enjeux économiques, sociaux et culturels.',
      activities: [
        'Immersion culturelle',
        'Rencontres professionnelles',
        'Études de terrain',
        'Ateliers pédagogiques',
        'Découvertes interactives'
      ],
      price: 'Sur devis',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Assistance Médicale',
      age: 'Particuliers & Groupes',
      duration: '24/7',
      location: 'Tout le Maroc',
      image: '',
      description: 'Service médical fiable, rapide et personnalisé pour que vous voyagiez en toute sérénité.',
      activities: [
        'Assistance médicale 24/7',
        'Transport médicalisé',
        'Coordination hospitalière',
        'Suivi personnalisé',
        'Évacuation sanitaire'
      ],
      price: 'Sur devis',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Équipe Expérimentée',
      description: 'Professionnels passionnés par le Maroc, à votre écoute pour vous conseiller'
    },
    {
      icon: Shield,
      title: 'Sécurité Prioritaire',
      description: 'Assistance rapide et efficace en toute circonstance pour votre bien-être'
    },
    {
      icon: Heart,
      title: 'Expérience Personnalisée',
      description: 'Nous créons avec vous le voyage de vos rêves, authentique et adapté'
    },
    {
      icon: BookOpen,
      title: 'Voyages d\'Étude Immersifs',
      description: 'Conçus pour être immersifs et répondre aux besoins spécifiques de chaque groupe'
    },
    {
      icon: Smile,
      title: 'Service Médical Complet',
      description: 'Santé et sécurité prioritaires avec service médical fiable et personnalisé'
    },
    {
      icon: TrendingUp,
      title: 'Expertise & Sérénité',
      description: 'Expertise, sécurité et accompagnement personnalisé pour tous vos besoins'
    }
  ];

  const testimonials = [
    {
      parentName: 'Client Satisfait',
      childName: 'Voyage Culturel',
      program: 'Circuit Découverte',
      content: 'Une équipe professionnelle qui a su nous faire découvrir le vrai Maroc avec passion et expertise. Notre sécurité et notre bien-être étaient leur priorité.',
      rating: 5,
      avatar: '/avatars/client1.jpg'
    },
    {
      parentName: 'Groupe d\'Étude',
      childName: 'Université Paris',
      program: 'Voyage d\'Étude',
      content: 'Un voyage d\'étude parfaitement organisé, immersif et adapté à nos besoins pédagogiques. Approche innovante et rencontres enrichissantes.',
      rating: 5,
      avatar: '/avatars/etude.jpg'
    },
    {
      parentName: 'Patient Médical',
      childName: 'Assistance 24/7',
      program: 'Service Santé',
      content: 'Service médical exceptionnel lors de notre séjour. Assistance rapide, professionnelle et rassurante. La tranquillité d\'esprit garantie !',
      rating: 5,
      avatar: '/avatars/medical.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Quels types de voyages proposez-vous ?',
      answer: 'Nous proposons des voyages organisés pour découvrir le Maroc, des voyages d\'étude immersifs, et des services d\'assistance médicale complète.'
    },
    {
      question: 'Comment assurez-vous la sécurité des voyageurs ?',
      answer: 'Votre sécurité est notre priorité. Nous assurons une assistance rapide et efficace en toute circonstance avec un service médical 24/7 disponible.'
    },
    {
      question: 'Proposez-vous des voyages personnalisés ?',
      answer: 'Absolument ! Nous créons avec vous le voyage de vos rêves, en vous offrant une expérience authentique et personnalisée selon vos envies.'
    },
    {
      question: 'Quelle est votre expérience ?',
      answer: 'Notre équipe est composée de professionnels expérimentés et passionnés par le Maroc, avec des années d\'expérience dans l\'organisation de voyages.'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Clients satisfaits',
      target: 500
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

          animateValue(0, 500, 2000, 'travelers');
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
              <span className="colonie-vacances__badge-text">Mekody Service Santé</span>
              <div className="colonie-vacances__badge-glow"></div>
            </div>
            <h1 className="colonie-vacances__hero-title">
              Votre Partenaire de <span className="colonie-vacances__hero-title-accent">Confiance</span> au Maroc
            </h1>
            <p className="colonie-vacances__hero-description">
              Choisir Mekody, c'est faire le choix de la sérénité. Expertise, sécurité et accompagnement personnalisé pour répondre à tous vos besoins.
            </p>
            <div className="colonie-vacances__hero-cta">
              <Link to="/contact" className="colonie-vacances__cta-primary">
                <span>Contactez-nous</span>
                <div className="colonie-vacances__cta-icon-wrapper">
                  <ArrowRight size={18} className="colonie-vacances__cta-icon" />
                </div>
                <div className="colonie-vacances__cta-shine"></div>
              </Link>
              <a href="#programmes" className="colonie-vacances__cta-secondary">
                <span>Nos services</span>
                <div className="colonie-vacances__cta-arrow"></div>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="colonie-vacances__trust">
              <div className="colonie-vacances__trust-item">
                <div className="colonie-vacances__trust-icon-wrapper">
                  <Shield size={16} className="colonie-vacances__trust-icon" />
                </div>
                <span>Sécurité et bien-être prioritaires</span>
              </div>
              <div className="colonie-vacances__trust-item">
                <div className="colonie-vacances__trust-icon-wrapper">
                  <Star size={16} className="colonie-vacances__trust-icon" />
                </div>
                <span>Équipe expérimentée et passionnée</span>
              </div>
              <div className="colonie-vacances__trust-item">
                <div className="colonie-vacances__trust-icon-wrapper">
                  <Users size={16} className="colonie-vacances__trust-icon" />
                </div>
                <span>Assistance 24/7</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="colonie-vacances__hero-scroll">
          <div className="colonie-vacances__hero-scroll-text">Découvrir</div>
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
              <span>Notre approche</span>
            </div>
            <h2 className="colonie-vacances__title">
              Pourquoi nous <span className="colonie-vacances__title-accent">choisir</span> ?
            </h2>
            <p className="colonie-vacances__subtitle">
              Choisir Mekody, c'est opter pour la tranquillité, l'authenticité et un accompagnement de qualité.
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
              Une gamme complète de services pour garantir une expérience inoubliable et sécurisée au Maroc.
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
                    <div className="colonie-vacances__program-price-label">sur mesure</div>
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
                  <h4 className="colonie-vacances__program-activities-title">Services inclus :</h4>
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
                  En savoir plus
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
              Notre <span className="colonie-vacances__title-accent">expertise</span>
            </h2>
            <p className="colonie-vacances__subtitle">
              Nous mettons tout en œuvre pour que chaque expérience au Maroc soit unique et mémorable.
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
              Découvrez les retours de nos clients sur nos différents services.
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
              <span>Questions</span>
            </div>
            <h2 className="colonie-vacances__title">
              Questions fréquentes
            </h2>
            <p className="colonie-vacances__subtitle">
              Tout ce que vous devez savoir sur nos services au Maroc.
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
              <span>Contactez-nous</span>
            </div>
            <h2 className="colonie-vacances__cta-title">
              Prêt à créer votre expérience sur mesure au Maroc ?
            </h2>
            <p className="colonie-vacances__cta-description">
              Contactez-nous pour discuter de votre projet de voyage, d'étude ou pour en savoir plus sur nos services d'assistance.
            </p>
            <div className="colonie-vacances__cta-buttons">
              <Link to="/contact" className="colonie-vacances__cta-button-primary">
                <span>Discuter de votre projet</span>
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