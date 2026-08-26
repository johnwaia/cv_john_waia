import React, { useEffect, useRef, useState } from 'react';
import cvPdf from '../assets/CV_John WAIA_Emploi.pdf';
import './terminal.css';

const HELP_ITEMS = [
  { label: 'whoami           qui je suis' },
  { label: 'skills --list    mes compétences clés' },
  { label: 'experience       mes expériences pro' },
  { label: 'formation        mon parcours scolaire' },
  { label: 'projects         mes projets' },
  { label: 'contact          mes coordonnées' },
  { label: 'download         télécharger mon CV (PDF)' },
  { label: 'clear            effacer le terminal' },
  { label: 'help             afficher cette aide' },
];

const WHOAMI_ITEMS = [
  { label: 'Nom : John Waïa' },
  { label: 'Rôle : Développeur Full Stack Junior (25 ans)' },
  { label: 'Formation : Mastère Dev Manager Full Stack (Efrei Paris)', href: '#formation' },
];

const SKILLS_ITEMS = [
  { label: 'JavaScript' },
  { label: 'React' },
  { label: 'Node.js' },
  { label: 'Python' },
  { label: 'Django' },
  { label: 'Java' },
  { label: 'MySQL' },
  { label: 'Git' },
  { label: 'Docker' },
  { label: '→ Voir la section Compétences complète', href: '#competences' },
];

const EXPERIENCE_ITEMS = [
  { label: 'Stage Développement Web — ISI NC (Nov. 2024 – Jan. 2025)', href: '#experiences' },
  { label: 'Technicien Informatique — BBS (Jan. 2022)', href: '#experiences' },
];

const FORMATION_ITEMS = [
  { label: 'Mastère Dev Manager Full Stack — Efrei Paris (en cours)', href: '#formation' },
  { label: 'Licence Informatique — Université de la Nouvelle-Calédonie (2022–2025)', href: '#formation' },
];

const PROJECTS_ITEMS = [
  { label: 'Projet Développement Web & Micro-Service 2024', href: '#projets' },
  { label: 'Projet Python : MauvaiseLangue', href: '#projets' },
  { label: 'Projet Moteur de Recherche Réseaux Sociaux', href: '#projets' },
  { label: '📅 Emploi du Temps UNC (application mobile Flutter)', href: '#projets' },
  { label: 'Projet Personnel : Livre IA', href: '#projets' },
  { label: 'Projet Pépite : Livraison de Médicaments', href: '#projets' },
];

const CONTACT_ITEMS = [
  { label: 'Email : johnwaia25@gmail.com', href: 'mailto:johnwaia25@gmail.com' },
  { label: 'GitHub : github.com/johnwaia', href: 'https://github.com/johnwaia', external: true },
  {
    label: 'LinkedIn : john-waïa',
    href: 'https://www.linkedin.com/in/john-wa%C3%AFa-314251218/',
    external: true,
  },
];

const DOWNLOAD_ITEMS = [
  { label: '📄 Télécharger mon CV (PDF)', href: cvPdf, download: 'CV_John_WAIA.pdf' },
];

function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Bienvenue 👋 Tape "help" pour voir les commandes disponibles.' },
  ]);
  const [input, setInput] = useState('');
  const [commandLog, setCommandLog] = useState([]);
  const [logIndex, setLogIndex] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const print = (lines) => {
    setHistory((h) => [...h, ...lines.map((content) => ({ type: 'output', content }))]);
  };

  const printList = (items) => {
    setHistory((h) => [...h, { type: 'list', items }]);
  };

  const runCommand = (raw) => {
    const trimmed = raw.trim();
    setHistory((h) => [...h, { type: 'command', content: trimmed }]);
    if (!trimmed) return;

    const [cmd, ...args] = trimmed.split(/\s+/);
    const arg = args.join(' ').toLowerCase();

    switch (cmd.toLowerCase()) {
      case 'help':
        printList(HELP_ITEMS);
        break;

      case 'whoami':
        printList(WHOAMI_ITEMS);
        break;

      case 'skills':
        printList(SKILLS_ITEMS);
        break;

      case 'experience':
      case 'experiences':
        printList(EXPERIENCE_ITEMS);
        break;

      case 'formation':
      case 'education':
        printList(FORMATION_ITEMS);
        break;

      case 'projects':
      case 'projets':
        printList(PROJECTS_ITEMS);
        break;

      case 'contact':
        printList(CONTACT_ITEMS);
        break;

      case 'download':
        printList(DOWNLOAD_ITEMS);
        break;

      case 'sudo':
        if (arg === 'hire-me') {
          print(["Permission accordée. Bienvenue dans l'équipe ! 🎉"]);
        } else {
          print(["Permission refusée : essaie plutôt 'sudo hire-me'."]);
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        print([`command not found: ${cmd} (tape "help" pour la liste des commandes)`]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
    setCommandLog((log) => [...log, input]);
    setLogIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIndex = logIndex === -1 ? commandLog.length - 1 : Math.max(0, logIndex - 1);
      setLogIndex(nextIndex);
      setInput(commandLog[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (logIndex === -1) return;
      const nextIndex = logIndex + 1;
      if (nextIndex >= commandLog.length) {
        setLogIndex(-1);
        setInput('');
      } else {
        setLogIndex(nextIndex);
        setInput(commandLog[nextIndex]);
      }
    }
  };

  return (
    <div className="interactive-terminal" onClick={() => inputRef.current?.focus()}>
      <div className="interactive-terminal-header">
        <span className="interactive-terminal-dot dot-red" />
        <span className="interactive-terminal-dot dot-yellow" />
        <span className="interactive-terminal-dot dot-green" />
        <span className="interactive-terminal-title">john@portfolio:~</span>
      </div>
      <div className="interactive-terminal-body" ref={bodyRef}>
        {history.map((entry, i) => {
          if (entry.type === 'command') {
            return (
              <div key={i} className="interactive-terminal-line interactive-terminal-command">
                <span className="interactive-terminal-prompt">$</span> {entry.content}
              </div>
            );
          }
          if (entry.type === 'list') {
            return (
              <ul key={i} className="interactive-terminal-list">
                {entry.items.map((item, j) => (
                  <li key={j}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.download ? { download: item.download } : {})}
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.label}
                      </a>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <div key={i} className="interactive-terminal-line interactive-terminal-output">
              {entry.content}
            </div>
          );
        })}
        <form className="interactive-terminal-input-line" onSubmit={handleSubmit}>
          <span className="interactive-terminal-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="interactive-terminal-input"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            aria-label="Terminal interactif du CV"
          />
        </form>
      </div>
    </div>
  );
}

export default InteractiveTerminal;
