import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import obamaImage from '../assets/obamaImage.png';

const API_URL = 'https://visitor-notifier-production.up.railway.app/visit';

const Stats = () => {
  const [visitorRank, setVisitorRank] = useState(null);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('session_id', sessionId);
    }

  fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId })
    })
      .then(res => res.json())
      .then(data => {
        setVisitorRank(data.rank);
        setTotalVisitors(data.totalVisitors);

        if (data.isNewVisitor) {
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      })
      .catch(err => {
        console.error('Erreur lors de la récupération des stats visiteurs:', err);
      });
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    }}>
      <div style={{ position: 'relative', width: '300px', marginBottom: '20px' }}>
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
          👋 Total Visiteurs : {totalVisitors}
        </div>
      </div>

      <p style={{ fontSize: '18px' }}>
        Vous êtes le <strong>{visitorRank}</strong> visiteur de mon CV.
      </p>
    </div>
  );
};

export default Stats;
