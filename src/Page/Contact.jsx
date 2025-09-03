import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar, Users, Zap } from 'lucide-react';
import './Contact.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: '+33 1 23 45 67 89',
      subtitle: 'Lun-Ven: 9h-18h',
      action: 'tel:+33123456789'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@mekody.com',
      subtitle: 'Réponse sous 24h',
      action: 'mailto:contact@mekody.com'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: '123 Avenue de l\'Innovation',
      subtitle: '75001 Paris, France',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: 'Lun-Ven: 9h-18h',
      subtitle: 'Support 24/7 disponible',
      action: null
    }
  ];

  const services = [
    'Marketing Digital',
    'E-learning',
    'Tourisme Médical',
    'Colonies de Vacances',
    'Développement Web & Logiciels',
    'Autre'
  ];

  const faqs = [
    {
      question: 'Quel est le délai moyen pour un projet ?',
      answer: 'Le délai varie selon la complexité du projet. En moyenne, comptez 2-4 semaines pour un site web, 6-12 semaines pour une application, et 1-3 mois pour les projets complexes.',
      icon: Clock
    },
    {
      question: 'Proposez-vous un support après livraison ?',
      answer: 'Oui, nous offrons un support technique complet avec maintenance, mises à jour, et assistance 24/7 selon le plan choisi.',
      icon: Users
    },
    {
      question: 'Comment établissez-vous vos tarifs ?',
      answer: 'Nos tarifs sont basés sur la complexité, le temps de développement, et les ressources nécessaires. Nous proposons toujours un devis détaillé et transparent.',
      icon: Zap
    }
  ];

  const stats = [
    {
      icon: Clock,
      value: '24h',
      label: 'Délai de réponse moyen'
    },
    {
      icon: CheckCircle,
      value: '98%',
      label: 'Satisfaction client'
    },
    {
      icon: Users,
      value: '150+',
      label: 'Projets accompagnés'
    },
    {
      icon: Calendar,
      value: '5j',
      label: 'Délai premier rendez-vous'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <Header/>
      <section className="contact__hero">
        <div className="contact__container">
          <div className="contact__hero-content">
            <h1 className="contact__hero-title">
              Contactez-<span className="contact__hero-title-accent">nous</span>
            </h1>
            <p className="contact__hero-description">
              Prêt à transformer vos projets en réussite ? 
              Nos experts sont là pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="contact__stats">
        <div className="contact__container">
          <div className="contact__stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="contact__stat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact__stat-icon">
                    <IconComponent size={24} className="contact__stat-icon-svg" />
                  </div>
                  <div className="contact__stat-number">{stat.value}</div>
                  <div className="contact__stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact__main">
        <div className="contact__container">
          <div className="contact__grid">
            {/* Contact Form */}
            <div className="contact__form-section">
              <h2 className="contact__form-title">
                Demande de consultation
              </h2>
              
              {isSubmitted ? (
                <div className="contact__success">
                  <CheckCircle size={48} className="contact__success-icon" />
                  <h3 className="contact__success-title">Message envoyé !</h3>
                  <p className="contact__success-message">Nous vous recontacterons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact__form">
                  <div className="contact__form-row">
                    <div className="contact__form-group">
                      <label htmlFor="name" className="contact__form-label">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="contact__form-input"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="contact__form-group">
                      <label htmlFor="email" className="contact__form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="contact__form-input"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="company" className="contact__form-label">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="contact__form-input"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="service" className="contact__form-label">
                      Service d'intérêt *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="contact__form-select"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="message" className="contact__form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="contact__form-textarea"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact__form-submit"
                  >
                    Envoyer le message
                    <Send size={18} className="contact__form-submit-icon" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact__info-section">
              <h2 className="contact__info-title">
                Informations de contact
              </h2>
              
              <div className="contact__info-list">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div 
                      key={info.title} 
                      className={`contact__info-item ${info.action ? 'contact__info-item--clickable' : ''}`}
                      onClick={() => info.action && window.open(info.action, '_blank')}
                    >
                      <div className="contact__info-icon">
                        <IconComponent size={20} className="contact__info-icon-svg" />
                      </div>
                      <div className="contact__info-content">
                        <h3 className="contact__info-item-title">{info.title}</h3>
                        <p className="contact__info-item-detail">{info.details}</p>
                        <p className="contact__info-item-subtitle">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="contact__quick-actions">
                <h3 className="contact__quick-actions-title">Contact rapide</h3>
                <div className="contact__quick-actions-buttons">
                  <a href="tel:+33123456789" className="contact__quick-action">
                    <Phone size={18} className="contact__quick-action-icon" />
                    Appeler maintenant
                  </a>
                  <a href="https://wa.me/33123456789" className="contact__quick-action">
                    <MessageCircle size={18} className="contact__quick-action-icon" />
                    WhatsApp
                  </a>
                  <a href="mailto:contact@mekody.com" className="contact__quick-action">
                    <Mail size={18} className="contact__quick-action-icon" />
                    Envoyer un email
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="contact__map">
                <div className="contact__map-placeholder">
                  <MapPin size={48} className="contact__map-icon" />
                  <p className="contact__map-text">Carte interactive</p>
                  <p className="contact__map-subtext">Visitez-nous à notre bureau parisien</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact__faq">
        <div className="contact__container">
          <div className="contact__faq-content">
            <h2 className="contact__faq-title">
              Questions fréquentes
            </h2>
            
            <div className="contact__faq-list">
              {faqs.map((faq, index) => {
                const IconComponent = faq.icon;
                return (
                  <div
                    key={index}
                    className="contact__faq-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="contact__faq-icon">
                      <IconComponent size={20} className="contact__faq-icon-svg" />
                    </div>
                    <div className="contact__faq-content">
                      <h3 className="contact__faq-question">
                        {faq.question}
                      </h3>
                      <p className="contact__faq-answer">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>;
      <Footer/>

    </div>
  );
};

export default Contact;