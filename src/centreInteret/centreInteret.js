import React, { useState } from 'react';

export default function Interests() {
  const [interestTab, setInterestTab] = useState('boxe');

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button
          onClick={() => setInterestTab('boxe')}
          style={{
            padding: '6px 12px',
            border: '1px solid #ccc',
            background: interestTab === 'boxe' ? '#eee' : '#fff',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Boxe 🥊
        </button>
        <button
          onClick={() => setInterestTab('info')}
          style={{
            padding: '6px 12px',
            border: '1px solid #ccc',
            background: interestTab === 'info' ? '#eee' : '#fff',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Informatique 💻
        </button>
      </div>

      {interestTab === 'boxe' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmNvcjRwYmpuYjkzZHVtYnN4NmRzMGN1Y3hnNXJkcWtjbWcxcHlxciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200w.webp"
            alt="Boxe GIF"
            style={{
              borderRadius: '30px',
              maxWidth: '200px',
              height: 'auto',
              flexShrink: 0,
            }}
          />
          <blockquote
            style={{
              fontStyle: 'italic',
              borderLeft: '4px solid #ccc',
              paddingLeft: '10px',
              color: '#555',
            }}
          >
            "La pratique régulière de la boxe anglaise m’apporte bien plus qu’un simple exercice physique : elle développe ma discipline, renforce ma résilience mentale et m’enseigne la maîtrise de soi face à l’adversité. C’est un sport complet qui façonne autant le corps que l’esprit."
          </blockquote>
        </div>
      )}

      {interestTab === 'info' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXgwZHJ6aTR0M2pjcHBpemozd2xyMjEzMDRyMDl1NHBncHY1djF5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CTX0ivSQbI78A/giphy.gif"
            alt="Informatique GIF"
            style={{
              borderRadius: '30px',
              maxWidth: '200px',
              height: 'auto',
              flexShrink: 0,
            }}
          />
          <blockquote
            style={{
              fontStyle: 'italic',
              borderLeft: '4px solid #ccc',
              paddingLeft: '10px',
              color: '#555',
            }}
          >
            "L’informatique me passionne autant dans sa dimension matérielle que logicielle. J’aime démonter et assembler des composants, comprendre l’architecture d’un ordinateur et optimiser ses performances. Côté logiciel, je prends plaisir à coder, résoudre des problèmes et créer des solutions utiles. C’est un domaine en constante évolution, qui me pousse à apprendre chaque jour et à rester curieux."
          </blockquote>
        </div>
      )}
    </div>
  );
}
