import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  BookOpen,
  Target,
  CheckCircle,
  Play,
  Star,
  ArrowRight,
  Laptop,
  Smartphone,
  Globe,
  Calendar,
  UserCheck,
  BarChart3,
  Zap,
  Shield,
  Heart,
  TrendingUp
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './for.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Formations = () => {
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    success: 0,
    access: 0,
    teachers: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const features = [
    {
      icon: Laptop,
      title: 'Plateforme LMS Avancée',
      description: 'Interface intuitive et moderne pour une expérience d\'apprentissage optimale'
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning',
      description: 'Accès complet depuis tous vos appareils, partout et à tout moment'
    },
    {
      icon: Users,
      title: 'Accompagnement Personnel',
      description: 'Formateurs experts disponibles pour un suivi individualisé'
    },
    {
      icon: BookOpen,
      title: 'Contenus Interactifs',
      description: 'Modules multimédias avec exercices pratiques et études de cas'
    },
    {
      icon: Globe,
      title: 'Communauté Internationale',
      description: 'Échangez avec des apprenants du monde entier'
    },
    {
      icon: Zap,
      title: 'Apprentissage Adaptatif',
      description: 'Contenu qui s\'adapte à votre rythme et niveau de compréhension'
    }
  ];

  // Nouvelles formations strictement limitées aux thèmes demandés
  const programs = [
    {
      title: 'Formation Santé',
      description: 'Renforcement des compétences dans les domaines de la santé publique, la gestion hospitalière et les politiques sanitaires.',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      title: 'Environnement',
      description: 'Approfondissement des enjeux environnementaux, politiques de durabilité et gestion des ressources naturelles.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Base de Données et Statistique',
      description: 'Maîtrise des outils de collecte, traitement et analyse des données au service de la décision publique et managériale.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Gestion des Ressources Humaines (GRH)',
      description: 'Formation aux pratiques modernes de gestion du personnel dans les administrations et organisations publiques.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Finance Publique & Gestion Budgétaire',
      description: 'Compréhension des mécanismes de la finance publique, de l’élaboration, l’exécution et le suivi des budgets.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Marchés Publics',
      description: 'Maîtrise du cadre juridique, des procédures et bonnes pratiques en matière de passation des marchés publics.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Décentralisation et Développement Durable',
      description: 'Appui aux acteurs locaux dans la mise en œuvre de politiques de développement territorial durable.',
      gradient: 'from-teal-500 to-green-600'
    },
    {
      title: 'Assistance de Direction',
      description: 'Renforcement des compétences des assistants de direction dans la gestion administrative, organisationnelle et relationnelle.',
      gradient: 'from-gray-500 to-slate-600'
    },
    {
      title: 'Gestion des Projets et Programmes',
      description: 'Méthodologies et outils pour la conception, la mise en œuvre et l’évaluation de projets et programmes publics.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Gestion Financière et Comptable',
      description: 'Formation aux normes comptables publiques, à la gestion financière et au contrôle interne dans les institutions.',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Étudiants formés', target: 10000 },
    { icon: Award, value: '98%', label: 'Taux de réussite', target: 98 },
    { icon: Calendar, value: '24/7', label: 'Accès permanent', target: 100 },
    { icon: UserCheck, value: '50+', label: 'Formateurs experts', target: 50 }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Responsable RH',
      company: 'TechCorp International',
      content: 'La formation en digitalisation RH a transformé notre département. Les outils pratiques et l\'accompagnement personnalisé ont fait toute la différence.',
      rating: 5,
      avatar: 'MD'
    },
    {
      name: 'Ahmed El Mansouri',
      role: 'Directeur des Ressources Humaines',
      company: 'Groupe Santé Plus',
      content: 'Excellente plateforme avec un contenu très actuel. Le suivi individualisé m\'a permis d\'appliquer directement les concepts dans mon entreprise.',
      rating: 5,
      avatar: 'AE'
    },
    {
      name: 'Sophie Martin',
      role: 'Consultante en Gouvernance',
      company: 'Cabinet Conseil Stratégique',
      content: 'La certification IMA en gouvernance est d\'une qualité exceptionnelle. Les études de cas réelles et l\'expertise des formateurs sont remarquables.',
      rating: 5,
      avatar: 'SM'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const animateValue = (start, end, duration, key) => {
            const startTime = performance.now();
            const updateValue = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              if (key === 'success') {
                setAnimatedStats(prev => ({
                  ...prev,
                  [key]: Math.floor(progress * (end - start) + start)
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
          animateValue(0, 10000, 2500, 'students');
          animateValue(0, 98, 1800, 'success');
          animateValue(0, 100, 1200, 'access');
          animateValue(0, 50, 1500, 'teachers');
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
    <div className="formations">
      <Header />
      {/* Hero Section avec particules */}
      <section className="formations__hero">
        <div className="formations__hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="formations__hero-particle"></div>
          ))}
        </div>
        <div className="formations__container">
          <div className="formations__hero-content">
            <div className="formations__badge">
              <GraduationCap size={20} className="formations__badge-icon" />
              <span className="formations__badge-text">Formations Professionnelles</span>
              <div className="formations__badge-glow"></div>
            </div>
            <h1 className="formations__hero-title">
              Formations <span className="formations__hero-title-accent">Spécialisées</span>
            </h1>
            <p className="formations__hero-description">
              Des parcours de formation conçus pour renforcer les compétences clés dans les domaines publics, sociaux et techniques.
            </p>
            <div className="formations__hero-cta">
              <Link to="/contact" className="formations__cta-primary">
                <span>Demander le programme</span>
                <div className="formations__cta-icon-wrapper">
                  <ArrowRight size={18} className="formations__cta-icon" />
                </div>
                <div className="formations__cta-shine"></div>
              </Link>
              <Link to="/catalogue" className="formations__cta-secondary">
                <span>Voir nos catalogues</span>
              </Link>
            </div>
            {/* Trust indicators */}
            <div className="formations__trust">
              <div className="formations__trust-item">
                <div className="formations__trust-icon-wrapper">
                  <Shield size={16} className="formations__trust-icon" />
                </div>
                <span>Contenus certifiés</span>
              </div>
              <div className="formations__trust-item">
                <div className="formations__trust-icon-wrapper">
                  <Heart size={16} className="formations__trust-icon" />
                </div>
                <span>98% de satisfaction</span>
              </div>
              <div className="formations__trust-item">
                <div className="formations__trust-icon-wrapper">
                  <TrendingUp size={16} className="formations__trust-icon" />
                </div>
                <span>Impact professionnel</span>
              </div>
            </div>
          </div>
        </div>
        <div className="formations__hero-scroll">
          <div className="formations__hero-scroll-text">Découvrir</div>
          <div className="formations__hero-scroll-arrow"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="formations__stats" ref={statsRef}>
        <div className="formations__stats-bg"></div>
        <div className="formations__container">
          <div className="formations__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const displayValue = isVisible ? 
                (stat.label === 'Taux de réussite' ? animatedStats.success + '%' :
                 stat.label === 'Accès permanent' ? '24/7' :
                 stat.label === 'Formateurs experts' ? animatedStats.teachers + '+' :
                 animatedStats.students + '+') : 
                '0' + (stat.label === 'Taux de réussite' ? '%' : '+');
              return (
                <div
                  key={stat.label}
                  className="formations__stat"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="formations__stat-icon">
                    <IconComponent size={24} className="formations__stat-icon-svg" />
                    <div className="formations__stat-icon-ring"></div>
                  </div>
                  <div className="formations__stat-number">{displayValue}</div>
                  <div className="formations__stat-label">{stat.label}</div>
                  <div className="formations__stat-bar">
                    <div 
                      className="formations__stat-progress" 
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

      {/* Features Section */}
      <section className="formations__features">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <Zap className="formations__header-badge-icon" />
              <span>Notre approche</span>
            </div>
            <h2 className="formations__title">
              Pourquoi choisir nos <span className="formations__title-accent">formations</span> ?
            </h2>
            <p className="formations__subtitle">
              Une expérience d'apprentissage moderne et personnalisée pour maximiser vos résultats.
            </p>
          </div>
          <div className="formations__features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="formations__feature"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="formations__feature-glow"></div>
                  <div className="formations__feature-icon">
                    <IconComponent size={28} className="formations__feature-icon-svg" />
                    <div className="formations__feature-icon-bg"></div>
                  </div>
                  <h3 className="formations__feature-title">{feature.title}</h3>
                  <p className="formations__feature-description">{feature.description}</p>
                  <div className="formations__feature-decoration">
                    <div className="formations__feature-dot"></div>
                    <div className="formations__feature-dot"></div>
                    <div className="formations__feature-dot"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="formations__programs">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <BookOpen className="formations__header-badge-icon" />
              <span>Nos domaines de formation</span>
            </div>
            <h2 className="formations__title">
              Nos <span className="formations__title-accent">Formations</span>
            </h2>
            <p className="formations__subtitle">
              Découvrez nos parcours spécialisés dans les domaines prioritaires du secteur public et social.
            </p>
          </div>
          <div className="formations__programs-grid">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="formations__program"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="formations__program-glow"></div>
                <div className="formations__program-header">
                  <div className="formations__program-icon"></div>
                  <div className="formations__program-price"></div>
                </div>
                <h3 className="formations__program-title">{program.title}</h3>
                <p className="formations__program-description">{program.description}</p>
                <div className="formations__program-buttons">
                  <Link to="/catalogue" className="formations__program-cta formations__program-cta--catalog">
                    <span>Voir nos catalogues</span>
                  </Link>
                  <Link to="/contact" className="formations__program-cta formations__program-cta--request">
                    <span>Demander le programme</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="formations__testimonials">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <Star className="formations__header-badge-icon" />
              <span>Témoignages</span>
            </div>
            <h2 className="formations__title">
              Ils nous <span className="formations__title-accent">font confiance</span>
            </h2>
            <p className="formations__subtitle">
              Découvrez ce que pensent nos anciens étudiants de leur expérience de formation.
            </p>
          </div>
          <div className="formations__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="formations__testimonial"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="formations__testimonial-glow"></div>
                <div className="formations__testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="formations__testimonial-star" />
                  ))}
                </div>
                <p className="formations__testimonial-content">
                  "{testimonial.content}"
                </p>
                <div className="formations__testimonial-author">
                  <div className="formations__testimonial-avatar">
                    <div className="formations__testimonial-avatar-fallback">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div className="formations__testimonial-info">
                    <div className="formations__testimonial-name">{testimonial.name}</div>
                    <div className="formations__testimonial-role">{testimonial.role}</div>
                    <div className="formations__testimonial-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="formations__cta">
        <div className="formations__cta-pattern"></div>
        <div className="formations__container">
          <div className="formations__cta-content">
            <div className="formations__cta-badge">
              <GraduationCap className="formations__cta-badge-icon" />
              <span>Votre avenir commence ici</span>
            </div>
            <h2 className="formations__cta-title">Prêt à transformer votre carrière ?</h2>
            <p className="formations__cta-description">
              Rejoignez plus de 10,000 professionnels qui ont fait confiance à nos formations.
            </p>
            <div className="formations__cta-buttons">
              <Link to="/catalogue" className="formations__cta-button-primary">
                <span>Voir nos catalogues</span>
                <div className="formations__cta-button-shine"></div>
              </Link>
              <Link to="/contact" className="formations__cta-button-secondary">
                <span>Demander le programme</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Formations;