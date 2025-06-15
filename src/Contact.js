import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvyyabv"); // Remplace "xgvyyabv" par ton propre ID Formspree

  return (
    <footer className="footer-contact">
      <div className="contact-container">
        <div className="contact-grid">
          <h2>Contact</h2>
          <div className="contact-item">
            📞 <strong>Téléphone :</strong> +687 78 59 52
          </div>
          <div className="contact-item">
            📍 <strong>Adresse :</strong> Paris
          </div>
          <div className="contact-item">
            🎂 <strong>Âge :</strong> 24 ans
          </div>
          <div className="contact-item">
            📧 <strong>Email :</strong>{' '}
            <a href="mailto:johnwaia25@gmail.com">johnwaia25@gmail.com</a>
          </div>
          <div className="contact-item">
            💻 <strong>GitHub :</strong>{' '}
            <a href="https://github.com/johnwaia" target="_blank" rel="noopener noreferrer">
              johnwaia
            </a>
          </div>
          <div className="contact-item">
            🔗 <strong>LinkedIn :</strong>{' '}
            <a
              href="https://www.linkedin.com/in/john-waia-314251218"
              target="_blank"
              rel="noopener noreferrer"
            >
              john-waia
            </a>
          </div>
        </div>

        <div className="vertical-separator" />

        <div className="footer-message">
          <h4>Envoyer un message</h4>
          {state.succeeded ? (
            <p className="success-msg">✅ Merci pour ton message !</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Adresse email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting}>
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
