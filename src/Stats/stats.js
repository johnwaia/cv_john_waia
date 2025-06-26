import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import obamaImage from '../assets/obamaImage.png'; // adapte le chemin si besoin


const Stats = () => {
  const [visitors, setVisitors] = useState([]);
  const [visitorRank, setVisitorRank] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cv_visitors')) || [];
    const sessionId = sessionStorage.getItem('session_id') || Date.now().toString();

    let isNewVisitor = false;

    if (!sessionStorage.getItem('session_id')) {
      sessionStorage.setItem('session_id', sessionId);
    }

    if (!stored.includes(sessionId)) {
      const updated = [...stored, sessionId];
      localStorage.setItem('cv_visitors', JSON.stringify(updated));
      setVisitors(updated);
      setVisitorRank(updated.indexOf(sessionId) + 1);
      isNewVisitor = true;
    } else {
      setVisitors(stored);
      setVisitorRank(stored.indexOf(sessionId) + 1);
    }

    if (isNewVisitor) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    }}>
      {/* Conteneur image + texte */}
      <div style={{
        position: 'relative',
        width: '300px',
        marginBottom: '20px'
      }}>
        <img
          src={obamaImage}
          alt="Homme tenant un panneau"
          style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        <div style={{
          position: 'absolute',
          top: '58%',
          left: '56%',
          transform: 'translateX(-50%)',
          padding: '10px 15px',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '16px'
        }}>
          👋 Total Visiteurs : {visitors.length}
        </div>
      </div>

      {/* Rang du visiteur */}
      <p style={{ fontSize: '18px' }}>
        Vous êtes le <strong>{visitorRank}</strong> visiteur de mon CV.
      </p>
    </div>
  );
};

export default Stats;
