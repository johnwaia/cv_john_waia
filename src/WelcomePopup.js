import React from 'react';

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    return {
      text: 'Bonjour',
      gif: 'https://media.giphy.com/media/2WVlkIlX8btaQwlp8G/giphy.gif',
    };
  }
  if (hour >= 12 && hour < 18) {
    return {
      text: 'Bon après-midi',
      gif: 'https://media.giphy.com/media/a1uvjv5YZ3pQeVtTaS/giphy.gif',
    };
  }
  if (hour >= 18) {
    return {
      text: 'Bonsoir',
      gif: 'https://media.giphy.com/media/x4i6WhNWuErdQxw85w/giphy.gif',
    };
  }
  return {
    text: 'Bienvenue',
    gif: 'https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif',
  };
}

function WelcomePopup({ onClose }) {
  const { text, gif } = getGreeting();

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
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{text} !</h2>
        <img
          src={gif}
          alt={text}
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '2rem',
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
