import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar, Users, Zap, XCircle } from 'lucide-react';
import './Contact.css';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom_complet: '',
    courriel: '',
    entreprise: '',
    service_interesse: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  // Afficher un toast
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://bacmekody.vercel.app/api/contact/contact_mekody', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Contact créé:', result);
        setIsSubmitted(true);
        showToast('Votre message a été envoyé avec succès!', 'success');
        
        // Réinitialiser le formulaire
        setFormData({
          nom_complet: '',
          courriel: '',
          entreprise: '',
          service_interesse: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur:', error);
      showToast('Une erreur s\'est produite. Veuillez réessayer.', 'error');
    } finally {
      setIsLoading(false);
    }
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
      details: '+212680127215',
      subtitle: 'Lun-Ven: 9h-18h',
      action: 'tel:+212680127215'
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
      details: 'RUE ATLAS IMM 45,4 EME ETAGE N16 MAARIF CASABLANCA',
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
      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast toast--${toast.type}`}>
          <div className="toast__content">
            {toast.type === 'success' ? (
              <CheckCircle size={24} className="toast__icon" />
            ) : (
              <XCircle size={24} className="toast__icon" />
            )}
            <span className="toast__message">{toast.message}</span>
          </div>
          <button 
            className="toast__close"
            onClick={() => setToast({ show: false, message: '', type: '' })}
          >
            ×
          </button>
        </div>
      )}

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
                      <label htmlFor="nom_complet" className="contact__form-label">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom_complet"
                        name="nom_complet"
                        required
                        value={formData.nom_complet}
                        onChange={handleChange}
                        className="contact__form-input"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="contact__form-group">
                      <label htmlFor="courriel" className="contact__form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="courriel"
                        name="courriel"
                        required
                        value={formData.courriel}
                        onChange={handleChange}
                        className="contact__form-input"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="entreprise" className="contact__form-label">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleChange}
                      className="contact__form-input"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="service_interesse" className="contact__form-label">
                      Service d'intérêt *
                    </label>
                    <select
                      id="service_interesse"
                      name="service_interesse"
                      required
                      value={formData.service_interesse}
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
                    disabled={isLoading}
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                    {!isLoading && <Send size={18} className="contact__form-submit-icon" />}
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
                  <a href="tel:+212680127215" className="contact__quick-action">
                    <Phone size={18} className="contact__quick-action-icon" />
                    Appeler maintenant
                  </a>
                  <a href="https://wa.me/+212680127215" className="contact__quick-action">
                    <MessageCircle size={18} className="contact__quick-action-icon" />
                    WhatsApp
                  </a>
                  <a href="mailto:contact@mekody.com" className="contact__quick-action">
                    <Mail size={18} className="contact__quick-action-icon" />
                    Envoyer un email
                  </a>
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
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;