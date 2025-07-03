import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import obamaImage from '../assets/obamaImage.png';

const API_URL = 'https://visitor-notifier.onrender.com/visit'; // 🔧 Mise à jour URL

const Stats = () => {
  const [visitorRank, setVisitorRank] = useState(null);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
      <button
        onClick={() => setShowModal(true)}
        style={{
          marginTop: '20px',
          padding: '10px 16px',
          borderRadius: '600px',
          border: 'none',
          backgroundColor: '#2563eb',
          color: 'white',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        ℹ️ Pourquoi ce compteur ?
      </button>
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '25px',
            maxWidth: '500px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            <button onClick={() => setShowModal(false)} style={{
              position: 'absolute',
              top: '10px',
              right: '15px',
              border: 'none',
              background: 'transparent',
              fontSize: '18px',
              cursor: 'pointer'
            }}>✖</button>
            <h2 style={{ marginBottom: '10px', fontSize: '20px' }}>Comment fonctionne ce compteur ?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3l5enltMW0yN2N3YjY0andnc2w5N3Z1MGpsYmpoMnlpNjFsdDlzciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41YtZOb9EUABnuqA/200w.webp"
              alt="Funny animation"
              style={{
                borderRadius: '60px',
                width: '200px',
                height: '200px',
                objectFit: 'cover',
              }}
            />
          </div>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Chaque fois qu’un visiteur charge cette page, un appel est envoyé à un petit serveur hébergé sur <strong>Render</strong>. 
              Ce backend (Node.js) stocke l’ID de session pour éviter de compter plusieurs fois le même visiteur, 
              puis renvoie votre rang de visite et le total global. 🎯
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
