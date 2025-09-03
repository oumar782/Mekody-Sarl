import { Target, Users, Award, Globe, Star, Clock, Calendar, HeadphonesIcon } from 'lucide-react';
import './About.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
const About = () => {
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
      label: 'Années d\'expérience'
    },
    {
      icon: Star,
      value: '500+',
      label: 'Projets réalisés'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Clients satisfaits'
    },
    {
      icon: HeadphonesIcon,
      value: '24/7',
      label: 'Support technique'
    }
  ];

  return (
    <div className="about">
      <Header />
      {/* Hero Section */}
      <section className="about__hero">
        <div className="about__container">
          <div className="about__hero-content">
            <h1 className="about__hero-title">
              À propos de <span className="about__hero-title-accent">Mekody</span>
            </h1>
            <p className="about__hero-description">
              Depuis notre création, nous accompagnons les entreprises dans leur transformation digitale 
              avec passion, expertise et innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about__mission">
        <div className="about__container">
          <div className="about__mission-grid">
            <div className="about__mission-content">
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
            </div>
            <div className="about__commitments">
              <div className="about__commitments-card">
                <h3 className="about__commitments-title">Nos Engagements</h3>
                <ul className="about__commitments-list">
                  <li className="about__commitments-item">
                    <div className="about__commitments-bullet"></div>
                    <span>Qualité premium garantie</span>
                  </li>
                  <li className="about__commitments-item">
                    <div className="about__commitments-bullet"></div>
                    <span>Support client 24/7</span>
                  </li>
                  <li className="about__commitments-item">
                    <div className="about__commitments-bullet"></div>
                    <span>Innovation constante</span>
                  </li>
                  <li className="about__commitments-item">
                    <div className="about__commitments-bullet"></div>
                    <span>Résultats mesurables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about__values">
        <div className="about__container">
          <div className="about__values-header">
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
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="about__value-icon">
                    <IconComponent size={28} className="about__value-icon-svg" />
                  </div>
                  <h3 className="about__value-title">
                    {value.title}
                  </h3>
                  <p className="about__value-description">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about__stats">
        <div className="about__container">
          <div className="about__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="about__stat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="about__stat-icon">
                    <IconComponent size={24} className="about__stat-icon-svg" />
                  </div>
                  <div className="about__stat-number">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
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