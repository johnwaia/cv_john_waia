import React, { useEffect, useRef, useState } from 'react';
import johnWaiaPhoto from './assets/john_waia.jpeg';
import './description.css';

const terminalSteps = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'John Waia — Développeur Full Stack Junior (25 ans)' },
  { type: 'command', text: 'cat bio.txt' },
  {
    type: 'output',
    text:
      "Étudiant en informatique et titulaire du permis B. Je suis conscient de ne pas encore maîtriser tous les langages de programmation, mais je suis motivé à en apprendre un maximum afin de développer un profil polyvalent et complet.",
  },
  { type: 'command', text: 'cat formation.txt' },
  { type: 'output', text: 'Mastère Dev Manager Full Stack – Efrei Paris' },
];

function TerminalBio({ steps }) {
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || stepIndex >= steps.length) return undefined;
    const step = steps[stepIndex];

    if (step.type === 'command') {
      if (charIndex < step.text.length) {
        const timer = setTimeout(() => setCharIndex((c) => c + 1), 45);
        return () => clearTimeout(timer);
      }
      const timer = setTimeout(() => {
        setStepIndex((i) => i + 1);
        setCharIndex(0);
      }, 350);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setStepIndex((i) => i + 1);
      setCharIndex(0);
    }, 550);
    return () => clearTimeout(timer);
  }, [started, stepIndex, charIndex, steps]);

  const activeStep = stepIndex < steps.length ? steps[stepIndex] : null;

  return (
    <div ref={containerRef} className="terminal-box">
      <div className="terminal-header">
        <span className="terminal-dot dot-red" />
        <span className="terminal-dot dot-yellow" />
        <span className="terminal-dot dot-green" />
        <span className="terminal-title">john@portfolio:~</span>
      </div>
      <div className="terminal-body">
        {steps.slice(0, stepIndex).map((s, i) =>
          s.type === 'command' ? (
            <div key={i} className="terminal-line terminal-command">
              <span className="terminal-prompt">$</span> {s.text}
            </div>
          ) : (
            <div key={i} className="terminal-line terminal-output">
              {s.text}
            </div>
          )
        )}
        {activeStep && activeStep.type === 'command' && (
          <div className="terminal-line terminal-command">
            <span className="terminal-prompt">$</span> {activeStep.text.slice(0, charIndex)}
            <span className="typing-cursor">▌</span>
          </div>
        )}
        {activeStep && activeStep.type === 'output' && (
          <div className="terminal-line terminal-command">
            <span className="terminal-prompt">$</span> <span className="typing-cursor">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}

const scrollToFormation = () => {
  document.getElementById('formation')?.scrollIntoView({ behavior: 'smooth' });
};

const Description = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
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
          gap: '1.5rem',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          textAlign: 'left',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <img
          src={johnWaiaPhoto}
          alt="John Waïa"
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            border: '3px solid #fff',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: '250px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_Efrei_2022.svg"
            alt="Logo Efrei Paris"
            style={{ width: '100px', height: 'auto', marginBottom: '0.5rem' }}
          />
          <TerminalBio steps={terminalSteps} />
          <blockquote
            style={{
              marginTop: '0.75rem',
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

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <button
          type="button"
          className="scroll-down-indicator"
          onClick={scrollToFormation}
          aria-label="Défiler vers le bas"
        >
          <span>Scroll</span>
          <span className="scroll-chevron">⌄</span>
        </button>
      </div>
    </div>
  );
};

export default Description;
