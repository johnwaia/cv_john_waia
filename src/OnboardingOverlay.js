import React from 'react';

function OnboardingOverlay({ onClose }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center',
      color: 'white', zIndex: 1000,
    }}>
      <div style={{ backgroundColor: '#222', padding: '2rem', borderRadius: '8px' }}>
        <p>Bienvenue sur le site !</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default OnboardingOverlay;
