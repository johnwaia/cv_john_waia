import React from 'react';
import ScrollReveal from '../ScrollReveal';

export default function SoftSkills({ softSkillsList }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '14px',
      }}
    >
      {softSkillsList.map(({ label, icon, description, gif }, index) => (
        <ScrollReveal
          key={label}
          direction="up"
          delay={(index % 6) * 80}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '10px',
            transition: 'transform 0.3s ease, opacity 0.7s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <img
            src={gif}
            alt={`${label} GIF`}
            style={{
              borderRadius: '16px',
              width: '90px',
              height: '90px',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
          <div>
            <h3 style={{ margin: '0 0 6px', fontSize: '1rem' }}>
              {icon} {label}
            </h3>
            <blockquote
              style={{
                fontStyle: 'italic',
                borderLeft: '4px solid #ccc',
                paddingLeft: '10px',
                color: '#555',
                margin: 0,
                fontSize: '0.85rem',
              }}
            >
              {description}
            </blockquote>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
