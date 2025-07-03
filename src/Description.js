import React from 'react';

const Description = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        boxSizing: 'border-box',
        maxWidth: '100%',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'left',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logo_Efrei_2022.svg/1200px-Logo_Efrei_2022.svg.png"
          alt="Logo Efrei Paris"
          style={{ width: '120px', height: 'auto', flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: '250px' }}>
          <p style={{ margin: 0, wordBreak: 'break-word' }}>
            Je m'appelle John Waia, j'ai 24 ans et je suis actuellement à la recherche d'une alternance en tant que Développeur Full Stack.
Étudiant en informatique et titulaire du permis B, je suis conscient de ne pas encore maîtriser tous les langages de programmation, mais je suis motivé à en apprendre un maximum afin de développer un profil polyvalent et complet.<br /><br />
            <strong>Rythme d'alternance :</strong> 1 semaine école / 2 semaines entreprise<br />
            <strong>Début :</strong> 01/09/2025 • <strong>Durée :</strong> 24 mois<br />
            <strong>Objectif :</strong> Mastère Dev Manager Full Stack – Efrei Paris
          </p>
          <blockquote
            style={{
              marginTop: '0.5rem',
              fontStyle: 'italic',
              color: '#444',
              borderLeft: '4px solid #0070f3',
              paddingLeft: '1rem',
            }}
          >
            « Mon avenir est déjà codé en Full Stack, il ne manque plus qu’un environnement pro pour le run. »
          </blockquote>
        </div>
      </div>

      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlhNmJxeG9iZXU4bXRudG9wNG5mb21jeWN0ZWlwcDQ5NXd4aWZtNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9IZQO6hTyaXCb589O4/100.webp"
        alt="Fun animation"
        style={{
          width: '100%',
          maxWidth: '150px',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          display: 'block',
          margin: '0 auto',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
  );
};

export default Description;
