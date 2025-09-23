import { Target, Users, Award, Globe, Star, Clock, Calendar, HeadphonesIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './About.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    satisfaction: 0
  });
  
  const sectionRef = useRef(null);

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, garantissant des résultats qui dépassent vos attentes.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Notre approche collaborative nous permet de créer des solutions parfaitement adaptées à vos besoins.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Nous restons à la pointe des dernières technologies pour vous offrir des solutions innovantes.'
    },
    {
      icon: Globe,
      title: 'Impact Global',
      description: 'Nos solutions créent un impact positif et durable pour votre entreprise et votre communauté.'
    }
  ];

  const stats = [
    {
      icon: Calendar,
      value: '5+',
      label: 'Années d\'expérience',
      target: 5
    },
    {
      icon: Star,
      value: '500+',
      label: 'Projets réalisés',
      target: 500
    },
    {
      icon: Award,
      value: '98%',
      label: 'Clients satisfaits',
      target: 98
    },
    {
      icon: HeadphonesIcon,
      value: '24/7',
      label: 'Support technique'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animation des statistiques
          if (entry.isIntersecting) {
            const animateValue = (start, end, duration, key) => {
              const startTime = performance.now();
              const updateValue = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                setAnimatedStats(prev => ({
                  ...prev,
                  [key]: Math.floor(progress * (end - start) + start)
                }));

                if (progress < 1) {
                  requestAnimationFrame(updateValue);
                }
              };
              requestAnimationFrame(updateValue);
            };

            animateValue(0, 5, 2000, 'experience');
            animateValue(0, 500, 2500, 'projects');
            animateValue(0, 98, 1800, 'satisfaction');
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
      <Header />
      
      {/* Hero Section avec particules */}
      <section className="about__hero">
        <div className="about__particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="about__particle"></div>
          ))}
        </div>
        <div className="about__container">
          <div className="about__hero-content">
            <div className="about__hero-badge">
              <Star className="about__hero-badge-icon" />
              <span>Leader en Transformation Digitale</span>
            </div>
            <h1 className="about__hero-title">
              À propos de <span className="about__hero-title-accent">Mekody</span>
            </h1>
            <p className="about__hero-description">
              Depuis notre création, nous accompagnons les entreprises dans leur transformation digitale 
              avec passion, expertise et innovation.
            </p>
            <div className="about__hero-scroll">
              <div className="about__hero-scroll-arrow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about__mission">
        <div className="about__container">
          <div className="about__mission-grid">
            <div className="about__mission-content">
              <div className="about__mission-badge">
                <Target className="about__mission-badge-icon" />
                <span>Notre Vision</span>
              </div>
              <h2 className="about__mission-title">
                Notre Mission
              </h2>
              <p className="about__mission-text">
                Chez Mekody Sarl, nous croyons que chaque entreprise mérite d'avoir accès aux meilleures 
                technologies et stratégies digitales. Notre mission est de démocratiser l'excellence 
                numérique en offrant des solutions sur mesure qui transforment vos défis en opportunités.
              </p>
              <p className="about__mission-text">
                Nous combinons expertise technique, créativité et accompagnement humain pour vous 
                garantir des résultats exceptionnels dans tous nos domaines d'intervention.
              </p>
              
              <div className="about__mission-highlights">
                <div className="about__mission-highlight">
                  <div className="about__mission-highlight-icon"></div>
                  <span>Innovation continue</span>
                </div>
                <div className="about__mission-highlight">
                  <div className="about__mission-highlight-icon"></div>
                  <span>Solutions sur mesure</span>
                </div>
                <div className="about__mission-highlight">
                  <div className="about__mission-highlight-icon"></div>
                  <span>Excellence garantie</span>
                </div>
              </div>
            </div>
            
            <div className="about__commitments">
              <div className="about__commitments-card">
                <div className="about__commitments-glow"></div>
                <h3 className="about__commitments-title">Nos Engagements</h3>
                <ul className="about__commitments-list">
                  <li className="about__commitments-item">
                    <div className="about__commitments-bullet">
                      <div className="about__commitments-pulse"></div>
                    </div>
                    <span>Qualité premium garantie</span>
                  </li>
                  <li className="about__commitments-item">
                    <div className="about__commitments-bullet">
                      <div className="about__commitments-pulse"></div>
                    </div>
                    <span>Support client 24/7</span>
                  </li>
                  <li className="about__commitments-item">
                    <div className="about__commitments-bullet">
                      <div className="about__commitments-pulse"></div>
                    </div>
                    <span>Innovation constante</span>
                  </li>
                  <li className="about__commitments-item">
                    <div className="about__commitments-bullet">
                      <div className="about__commitments-pulse"></div>
                    </div>
                    <span>Résultats mesurables</span>
                  </li>
                </ul>
                <div className="about__commitments-footer">
                  <div className="about__commitments-arrow"></div>
                  <span>Engagements honorés depuis 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about__values">
        <div className="about__container">
          <div className="about__values-header">
            <div className="about__values-badge">
              <Award className="about__values-badge-icon" />
              <span>Ce qui nous distingue</span>
            </div>
            <h2 className="about__values-title">
              Nos <span className="about__values-title-accent">Valeurs</span>
            </h2>
            <p className="about__values-subtitle">
              Les principes qui guident chacune de nos actions et décisions.
            </p>
          </div>

          <div className="about__values-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="about__value-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="about__value-card-glow"></div>
                  <div className="about__value-icon">
                    <IconComponent size={32} className="about__value-icon-svg" />
                    <div className="about__value-icon-bg"></div>
                  </div>
                  <h3 className="about__value-title">
                    {value.title}
                  </h3>
                  <p className="about__value-description">
                    {value.description}
                  </p>
                  <div className="about__value-decoration">
                    <div className="about__value-dot"></div>
                    <div className="about__value-dot"></div>
                    <div className="about__value-dot"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about__stats" ref={sectionRef}>
        <div className="about__stats-bg-pattern"></div>
        <div className="about__container">
          <div className="about__stats-header">
            <h2 className="about__stats-title">Notre Impact en Chiffres</h2>
            <p className="about__stats-subtitle">Des résultats qui parlent d'eux-mêmes</p>
          </div>
          
          <div className="about__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const displayValue = stat.target ? 
                (stat.label === 'Années d\'expérience' ? animatedStats.experience + '+' :
                 stat.label === 'Projets réalisés' ? animatedStats.projects + '+' :
                 stat.label === 'Clients satisfaits' ? animatedStats.satisfaction + '%' : stat.value) : 
                stat.value;
              
              return (
                <div
                  key={stat.label}
                  className="about__stat"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="about__stat-icon">
                    <IconComponent size={28} className="about__stat-icon-svg" />
                    <div className="about__stat-icon-ring"></div>
                  </div>
                  <div className="about__stat-number">{displayValue}</div>
                  <div className="about__stat-label">{stat.label}</div>
                  <div className="about__stat-bar">
                    <div 
                      className="about__stat-progress" 
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
      
      <Footer />
    </div>
  );
};

export default About;