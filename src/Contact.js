
import React from 'react';

const Contact = () => {
  return (
    <footer className="footer-contact">
      <h2>Contact</h2>
      <div className="contact-grid">
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
          📧 <strong>Email :</strong> <a href="mailto:johnwaia25@gmail.com">johnwaia25@gmail.com</a>
        </div>
        <div className="contact-item">
          💻 <strong>GitHub :</strong> <a href="https://github.com/johnwaia" target="_blank" rel="noopener noreferrer">johnwaia</a>
        </div>
        <div className="contact-item">
          🔗 <strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/john-waia-314251218" target="_blank" rel="noopener noreferrer">john-waia</a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
