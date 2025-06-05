import React from 'react';

function WelcomePopup({ onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '1rem', // ajout pour éviter que le contenu touche les bords sur petit écran
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '2rem',  // arrondi plus raisonnable sur mobile
        maxWidth: '90vw',      // largeur max 90% de la largeur de la fenêtre
        width: '400px',        // largeur fixe max sur grands écrans
        textAlign: 'center',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)',
        boxSizing: 'border-box',
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Bienvenue sur mon CV !</h2>
        <img 
          src="https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" 
          alt="Bienvenue" 
          style={{ 
            width: '100%', 
            maxWidth: '300px', 
            height: 'auto', 
            margin: '1rem auto',
            display: 'block',
          }}
        />
        <p style={{ fontSize: '1rem', lineHeight: '1.4' }}>
          Merci de visiter mon CV en ligne. Explorez mes compétences, expériences et projets.
        </p>
        <button
          onClick={onClose}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            border: 'none',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Découvrir mon CV
        </button>
      </div>
    </div>
  );
}

export default WelcomePopup;
