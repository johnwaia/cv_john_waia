import React from 'react';
import johnWaiaPhoto from '../assets/john_waia.jpeg';
import cvPdf from '../assets/CV_John WAIA_Emploi.pdf';
import './quickSummary.css';

const HERO_VIDEO_DAY = 'https://videos.pexels.com/video-files/6003441/6003441-hd_1920_1080_25fps.mp4';
const HERO_VIDEO_NIGHT = 'https://videos.pexels.com/video-files/35677222/15118998_1920_1080_60fps.mp4';

const keySkills = [
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'Django', icon: 'django/django-plain.svg' },
  { name: 'Java', icon: 'java/java-original.svg' },
  { name: 'MySQL', icon: 'mysql/mysql-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
];

const keyExperiences = [
  {
    title: 'Stage Développement Web — ISI NC',
    period: 'Nov. 2024 – Jan. 2025',
    summary: "Conception de fonctionnalités web, UI responsive, méthode SCRUM.",
  },
  {
    title: 'Technicien Informatique — BBS',
    period: 'Jan. 2022',
    summary: 'Installation/maintenance de systèmes, support technique et sécurité informatique.',
  },
];

const keyFormations = [
  { title: 'Mastère Dev Manager Full Stack', school: 'Efrei Paris', period: 'En cours' },
  { title: 'Licence Informatique', school: 'Université de la Nouvelle-Calédonie', period: '2022 – 2025' },
];

const softSkillHighlights = ['Adaptabilité', 'Travail en équipe', 'Résolution de problèmes'];

function QuickSummary({ onSwitchToFull, darkMode }) {
  const handleSwitchToFull = (sectionId) => {
    onSwitchToFull(sectionId);
  };

  return (
    <section className="cv-section section-quicksummary">
      <video
        key={darkMode ? 'night' : 'day'}
        className="hero-video-bg"
        src={darkMode ? HERO_VIDEO_NIGHT : HERO_VIDEO_DAY}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="section-inner quick-summary">
        <div className="quick-summary-card">
          <div className="quick-summary-header">
            <img src={johnWaiaPhoto} alt="John Waïa" className="quick-summary-photo" />
            <div>
              <h1>John Waïa</h1>
              <p className="quick-summary-role">Développeur Full Stack Junior</p>
              <p className="quick-summary-pitch">
                Étudiant en Mastère Dev Manager Full Stack (Efrei Paris). Profil polyvalent, motivé à apprendre.
              </p>
            </div>
          </div>

          <div className="quick-summary-grid">
            <div className="quick-summary-block">
              <div className="quick-summary-block-header">
                <h2>🎓 Formation</h2>
                <button type="button" className="quick-summary-more" onClick={() => handleSwitchToFull('formation')}>
                  Voir plus →
                </button>
              </div>
              <ul>
                {keyFormations.map((f) => (
                  <li key={f.title}>
                    <strong>{f.title}</strong>
                    <span>{f.school} · {f.period}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="quick-summary-block">
              <div className="quick-summary-block-header">
                <h2>💼 Expérience clé</h2>
                <button type="button" className="quick-summary-more" onClick={() => handleSwitchToFull('experiences')}>
                  Voir plus →
                </button>
              </div>
              <ul>
                {keyExperiences.map((exp) => (
                  <li key={exp.title}>
                    <strong>{exp.title}</strong>
                    <span>{exp.period}</span>
                    <p>{exp.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="quick-summary-block">
            <div className="quick-summary-block-header">
              <h2>🛠️ Compétences clés</h2>
              <button type="button" className="quick-summary-more" onClick={() => handleSwitchToFull('competences')}>
                Voir plus →
              </button>
            </div>
            <div className="quick-summary-skills">
              {keySkills.map((skill) => (
                <div key={skill.name} className="quick-skill-chip" title={skill.name}>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                    alt={skill.name}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="quick-summary-block">
            <div className="quick-summary-block-header">
              <h2>🌟 Soft skills</h2>
              <button type="button" className="quick-summary-more" onClick={() => handleSwitchToFull('softskills')}>
                Voir plus →
              </button>
            </div>
            <div className="quick-summary-tags">
              {softSkillHighlights.map((s) => (
                <span key={s} className="quick-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="quick-summary-footer">
            <div className="quick-summary-contact">
              <a href="https://github.com/johnwaia" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/john-wa%C3%AFa-314251218/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="mailto:johnwaia25@gmail.com" aria-label="Email" title="johnwaia25@gmail.com">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" alt="Email" />
              </a>
            </div>
            <div className="quick-summary-actions">
              <a
                href={cvPdf}
                download="CV_John_WAIA.pdf"
                className="quick-summary-download"
              >
                📄 Télécharger le CV (PDF)
              </a>
              <button type="button" className="quick-summary-cta" onClick={() => handleSwitchToFull()}>
                Voir le CV complet →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickSummary;
