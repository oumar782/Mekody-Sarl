import { Link } from 'react-router-dom';
import {
  Users,
  Clock,
  Award,
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Shield,
  Heart,
  TrendingUp,
  Database,
  Leaf,
  Building,
  FileText,
  Scale,
  Globe,
  Briefcase,
  ClipboardList,
  Calculator,
  Syringe
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

  const programs = [
    {
      title: 'Environnement & Développement Durable',
      level: 'Professionnel',
      students: '950+',
      description: 'Maîtrisez les enjeux environnementaux, les politiques de développement durable et leur mise en œuvre territoriale.',
      modules: [
        'Fondamentaux de l’écologie et du changement climatique',
        'Stratégies nationales et locales de développement durable',
        'Évaluation environnementale des projets',
        'Gouvernance environnementale et participation citoyenne',
        'Indicateurs de suivi et reporting RSE'
      ],
      gradient: 'from-green-500 to-emerald-500',
      icon: <Leaf />
    },
    {
      title: 'Base de Données & Statistique Appliquée',
      level: 'Avancé',
      students: '1,200+',
      description: 'Acquérez les compétences en gestion de données, analyse statistique et visualisation pour la prise de décision.',
      modules: [
        'Conception et gestion de bases de données relationnelles',
        'Méthodes statistiques descriptives et inférentielles',
        'Outils d’analyse (SQL, R, Python)',
        'Visualisation de données et tableaux de bord',
        'Applications sectorielles (santé, finance, GRH)'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      icon: <Database />
    },
    {
      title: 'Gestion des Ressources Humaines (GRH)',
      level: 'Intermédiaire',
      students: '2,800+',
      description: 'Formez-vous aux pratiques modernes de gestion des ressources humaines dans les secteurs public et privé.',
      modules: [
        'Recrutement, évaluation et mobilité du personnel',
        'Rémunération et avantages sociaux',
        'Droit du travail et relations sociales',
        'Management d’équipe et performance RH',
        'Transformation digitale des fonctions RH'
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: <Users />
    },
    {
      title: 'Finance Publique & Gestion Budgétaire',
      level: 'Expert',
      students: '1,500+',
      description: 'Maîtrisez les mécanismes de la finance publique, l’élaboration, l’exécution et le contrôle du budget.',
      modules: [
        'Principes de la comptabilité publique',
        'Cycle budgétaire et programmation pluriannuelle',
        'Lois de finances et gestion des dépenses',
        'Contrôle interne et audit public',
        'Réforme de la gestion publique'
      ],
      gradient: 'from-orange-500 to-red-500',
      icon: <Calculator />
    },
    {
      title: 'Marchés Publics',
      level: 'Professionnel',
      students: '1,100+',
      description: 'Formez-vous aux procédures, règles et bonnes pratiques en matière de passation et de gestion des marchés publics.',
      modules: [
        'Cadre juridique des marchés publics',
        'Procédures de mise en concurrence',
        'Rédaction des dossiers de consultation',
        'Exécution et suivi des marchés',
        'Contrôle et contentieux des marchés'
      ],
      gradient: 'from-indigo-500 to-blue-500',
      icon: <Scale />
    },
    {
      title: 'Décentralisation & Gouvernance Territoriale',
      level: 'Avancé',
      students: '800+',
      description: 'Comprenez les enjeux de la décentralisation, le fonctionnement des collectivités et le pilotage du développement local.',
      modules: [
        'Architecture institutionnelle de la décentralisation',
        'Compétences des collectivités territoriales',
        'Planification stratégique et contractualisation',
        'Financement local et fiscalité territoriale',
        'Partenariats public-privé et coopération décentralisée'
      ],
      gradient: 'from-teal-500 to-green-500',
      icon: <Building />
    },
    {
      title: 'Assistance de Direction',
      level: 'Intermédiaire',
      students: '1,300+',
      description: 'Développez les compétences organisationnelles, relationnelles et techniques requises pour assister efficacement la direction.',
      modules: [
        'Gestion administrative et secrétariat de direction',
        'Organisation des réunions et suivi des décisions',
        'Communication professionnelle et gestion du temps',
        'Outils bureautiques avancés',
        'Protocole et gestion des relations institutionnelles'
      ],
      gradient: 'from-gray-500 to-slate-600',
      icon: <Briefcase />
    },
    {
      title: 'Gestion des Projets et Programmes',
      level: 'Professionnel',
      students: '1,700+',
      description: 'Apprenez à concevoir, piloter et évaluer des projets et programmes dans les secteurs publics et associatifs.',
      modules: [
        'Méthodologies de gestion de projet (logique cadre, Gantt)',
        'Identification des parties prenantes et analyse des besoins',
        'Planification, budgétisation et suivi-évaluation',
        'Gestion des risques et indicateurs de performance',
        'Reporting et capitalisation des expériences'
      ],
      gradient: 'from-amber-500 to-orange-500',
      icon: <ClipboardList />
    },
    {
      title: 'Gestion Financière et Comptable',
      level: 'Avancé',
      students: '1,400+',
      description: 'Maîtrisez les fondamentaux de la comptabilité, de la gestion financière et de l’analyse des coûts.',
      modules: [
        'Comptabilité générale et analytique',
        'Élaboration des états financiers',
        'Analyse financière et ratios de performance',
        'Trésorerie et gestion de la liquidité',
        'Normes comptables et conformité fiscale'
      ],
      gradient: 'from-emerald-500 to-teal-500',
      icon: <FileText />
    },
    {
      title: 'Formation Santé Publique & Management',
      level: 'Expert',
      students: '750+',
      description: 'Spécialisez-vous dans la gestion des établissements de santé, la politique sanitaire et l’organisation des soins.',
      modules: [
        'Systèmes de santé et politiques publiques',
        'Management des établissements hospitaliers',
        'Qualité des soins et gestion des risques',
        'Financement de la santé et assurance maladie',
        'Éthique médicale et gouvernance en santé'
      ],
      gradient: 'from-rose-500 to-pink-500',
      icon: <Syringe />
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Participants formés', target: 10000 },
    { icon: Award, value: '98%', label: 'Taux de réussite', target: 98 },
    { icon: Clock, value: '24/7', label: 'Accès permanent', target: 100 },
    { icon: Users, value: '50+', label: 'Experts-formateurs', target: 50 }
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
              setAnimatedStats(prev => ({
                ...prev,
                [key]: key === 'success' ? Math.floor(progress * (end - start) + start) : Math.floor(progress * (end - start) + start)
              }));
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
      {/* Hero Section */}
      <section className="formations__hero">
        <div className="formations__container">
          <div className="formations__hero-content">
            <div className="formations__badge">
              <BookOpen size={20} className="formations__badge-icon" />
              <span className="formations__badge-text">Formations Professionnelles</span>
              <div className="formations__badge-glow"></div>
            </div>
            <h1 className="formations__hero-title">
              Formations <span className="formations__hero-title-accent">Spécialisées</span>
            </h1>
            <p className="formations__hero-description">
              Des parcours conçus pour renforcer les compétences clés dans les domaines de l’administration publique, de la gestion, de la santé et du développement durable.
            </p>
            <div className="formations__hero-cta">
              <Link to="/contact" className="formations__cta-primary">
                <span>En savoir plus</span>
                <div className="formations__cta-icon-wrapper">
                  <ArrowRight size={18} className="formations__cta-icon" />
                </div>
                <div className="formations__cta-shine"></div>
              </Link>
            </div>
            <div className="formations__trust">
              <div className="formations__trust-item">
                <div className="formations__trust-icon-wrapper">
                  <Shield size={16} className="formations__trust-icon" />
                </div>
                <span>Contenus validés par des experts</span>
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
                <span>Impact professionnel avéré</span>
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
                 stat.label === 'Experts-formateurs' ? animatedStats.teachers + '+' :
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

      {/* Programs Section */}
      <section className="formations__programs">
        <div className="formations__container">
          <div className="formations__header">
            <div className="formations__header-badge">
              <BookOpen className="formations__header-badge-icon" />
              <span>Domaines de formation</span>
            </div>
            <h2 className="formations__title">
              Nos <span className="formations__title-accent">Formations</span>
            </h2>
            <p className="formations__subtitle">
              Des contenus rigoureux, pratiques et alignés sur les besoins des institutions, collectivités et organisations.
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
                  <div className="formations__program-icon">{program.icon}</div>
                  <div className={`formations__program-level formations__program-level--${program.level.toLowerCase()}`}>
                    {program.level}
                  </div>
                </div>
                <h3 className="formations__program-title">{program.title}</h3>
                <p className="formations__program-description">{program.description}</p>
                <div className="formations__program-meta">
                  <div className="formations__program-meta-item">
                    <Users size={16} className="formations__program-meta-icon" />
                    <span>{program.students} participants</span>
                  </div>
                </div>
                <div className="formations__program-modules">
                  <h4 className="formations__program-modules-title">Modules inclus :</h4>
                  <ul className="formations__program-modules-list">
                    {program.modules.map((module, idx) => (
                      <li key={idx} className="formations__program-modules-item">
                        <CheckCircle size={16} className="formations__program-modules-icon" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="formations__program-cta">
                  <span>Demander le programme</span>
                  <div className="formations__program-cta-arrow"></div>
                </Link>
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
              <BookOpen className="formations__cta-badge-icon" />
              <span>Votre avenir commence ici</span>
            </div>
            <h2 className="formations__cta-title">Prêt à renforcer vos compétences ?</h2>
            <p className="formations__cta-description">
              Rejoignez des milliers de professionnels formés dans les domaines stratégiques de l’administration et de la gestion.
            </p>
            <div className="formations__cta-buttons">
              <Link to="/contact" className="formations__cta-button-primary">
                <span>Nous contacter</span>
                <div className="formations__cta-button-shine"></div>
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