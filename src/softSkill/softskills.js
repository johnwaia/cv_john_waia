import React from 'react';

export default function SoftSkills({ softSkillsList }) {
  return (
    <div style={{ padding: 0 }}>
      {softSkillsList.map(({ label, icon, description, gif }) => (
        <div
          key={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '10px',
            maxWidth: '600px',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <img
            src={gif}
            alt={`${label} GIF`}
            style={{
              borderRadius: '30px',
              maxWidth: '150px',
              height: 'auto',
              flexShrink: 0,
            }}
          />
          <div>
            <h3 style={{ margin: '0 0 8px' }}>
              {icon} {label}
            </h3>
            <blockquote
              style={{
                fontStyle: 'italic',
                borderLeft: '4px solid #ccc',
                paddingLeft: '10px',
                color: '#555',
                margin: 0,
              }}
            >
              {description}
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  );
}
