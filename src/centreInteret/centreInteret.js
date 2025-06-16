import React, { useState } from 'react';

export default function Interests() {
  const [interestTab, setInterestTab] = useState('boxe');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const responsiveStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const contentStyle = {
    fontStyle: 'italic',
    borderLeft: '4px solid #ccc',
    paddingLeft: '10px',
    color: '#555',
    margin: 0,
    textAlign: 'justify',
  };

  const quoteStyle = {
    borderTop: '1px solid #ddd',
    paddingTop: '15px',
    fontStyle: 'italic',
    color: '#333',
    maxWidth: '400px',
    marginTop: '10px',
    textAlign: 'right',
    fontSize: '0.95rem',
  };

  const imageStyle = {
    borderRadius: '30px',
    maxWidth: '200px',
    height: 'auto',
    flexShrink: 0,
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div>
      {/* Boutons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {[
          { label: 'Boxe 🥊', value: 'boxe' },
          { label: 'Informatique 💻', value: 'info' },
          { label: 'Cryptomonnaie 🪙', value: 'cryptomonnaie' },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setInterestTab(value)}
            style={{
              padding: '8px 14px',
              border: '1px solid #ccc',
              background: interestTab === value ? '#eee' : '#fff',
              cursor: 'pointer',
              borderRadius: '6px',
              fontWeight: 'bold',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Contenu selon l'onglet sélectionné */}
      {interestTab === 'boxe' && (
        <div style={isMobile ? responsiveStyle : containerStyle}>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmNvcjRwYmpuYjkzZHVtYnN4NmRzMGN1Y3hnNXJkcWtjbWcxcHlxciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200w.webp"
            alt="Boxe GIF"
            style={imageStyle}
          />
          <div>
            <blockquote style={contentStyle}>
              "La pratique régulière de la boxe anglaise m’apporte bien plus qu’un simple exercice physique : elle développe ma discipline, renforce ma résilience mentale et m’enseigne la maîtrise de soi face à l’adversité. C’est un sport complet qui façonne autant le corps que l’esprit."
            </blockquote>
            <div style={quoteStyle}>
              <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Mike Tyson</p>
              <p>"Everybody has a plan until they get punched in the mouth."</p>
              <p style={{ fontStyle: 'normal', color: '#666', fontSize: '0.9rem' }}>
                (Tout le monde a un plan jusqu’à ce qu’il reçoive un coup de poing dans la gueule.)
              </p>
            </div>
          </div>
        </div>
      )}

      {interestTab === 'info' && (
        <div style={isMobile ? responsiveStyle : containerStyle}>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXgwZHJ6aTR0M2pjcHBpemozd2xyMjEzMDRyMDl1NHBncHY1djF5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CTX0ivSQbI78A/giphy.gif"
            alt="Informatique GIF"
            style={imageStyle}
          />
          <div>
            <blockquote style={contentStyle}>
              "L’informatique me passionne autant dans sa dimension matérielle que logicielle. J’aime démonter et assembler des composants, comprendre l’architecture d’un ordinateur et optimiser ses performances. Côté logiciel, je prends plaisir à coder, résoudre des problèmes et créer des solutions utiles. C’est un domaine en constante évolution, qui me pousse à apprendre chaque jour et à rester curieux."
            </blockquote>
            <div style={quoteStyle}>
              <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Alan Turing</p>
              <p>"Une machine peut-elle avoir de la créativité? La créativité est simplement la capacité de combiner des idées d’une manière nouvelle."</p>
            </div>
          </div>
        </div>
      )}

      {interestTab === 'cryptomonnaie' && (
        <div style={isMobile ? responsiveStyle : containerStyle}>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXVtdHp6YjVhNTVxMW5pdHVlOG0wMmVoaGRqM2oxMjJzYmZjN2NwYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUOxfeA0KTu1Ztj5FC/200w.webp"
            alt="Cryptomonnaie GIF"
            style={imageStyle}
          />
          <div>
            <blockquote style={contentStyle}>
              "La cryptomonnaie me passionne car elle redéfinit notre conception de la finance et de la confiance numérique. J’apprécie explorer les technologies blockchain, comprendre les mécanismes de consensus, et suivre l’évolution des cryptos dans un monde de plus en plus décentralisé."
            </blockquote>
            <div style={quoteStyle}>
              <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Satoshi Nakamoto</p>
              <p>"If you don't believe it or don't get it, I don't have the time to try to convince you, sorry."</p>
              <p style={{ fontStyle: 'normal', color: '#666', fontSize: '0.9rem' }}>
                (Si vous n'y croyez pas ou ne comprenez pas, je n'ai pas le temps d'essayer de vous convaincre, désolé.)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
