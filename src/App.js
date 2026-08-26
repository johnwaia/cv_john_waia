import React, { useState, useEffect, useCallback } from 'react';
import WelcomePopup from './WelcomePopup';
import Description from './description/Description';
import FormationTabs from './formations/formation';
import Experiences from './experiences/experiences';
import Skills from './competences/Competences';
import SoftSkills from './softSkill/softskills';
import { softSkillsList } from './softSkill/softskillList';
import Interests from './centreInteret/centreInteret';
import Projets from './projet/project';
import Stats from './Stats/stats';
import Contact from './contact/Contact';
import ScrollReveal from './scrollreveal/ScrollReveal';
import FallingCharacter from './fallingCharacter/FallingCharacter';
import QuickSummary from './quickSummary/QuickSummary';
import './App.css';

const HERO_VIDEO_DAY = 'https://videos.pexels.com/video-files/6003441/6003441-hd_1920_1080_25fps.mp4';
const HERO_VIDEO_NIGHT = 'https://videos.pexels.com/video-files/35677222/15118998_1920_1080_60fps.mp4';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [quickMode, setQuickMode] = useState(false);

  const handleScroll = useCallback(() => {
    setShowTopBtn(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode-body', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);


  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSwitchToFull = (sectionId) => {
    setQuickMode(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (sectionId) {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          scrollToTop();
        }
      });
    });
  };

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`}>
      {showWelcome && <WelcomePopup onClose={() => setShowWelcome(false)} />}

      <FallingCharacter />

      <div className="quick-mode-toggle-wrap">
        <button
          type="button"
          className={`quick-mode-toggle${quickMode ? ' is-on' : ''}`}
          onClick={() => setQuickMode((v) => !v)}
          title={quickMode ? 'Repasser au CV complet' : 'Mode recruteur pressé : résumé du CV en 30 secondes'}
        >
          {quickMode ? '📄 CV complet' : '⚡ Mode recruteur (30s)'}
        </button>
      </div>

      {quickMode && <QuickSummary onSwitchToFull={handleSwitchToFull} darkMode={darkMode} />}

      <main style={quickMode ? { display: 'none' } : undefined}>
        <section id="accueil" className="cv-section section-accueil">
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
          <button
            type="button"
            role="switch"
            aria-checked={darkMode}
            className={`dark-mode-toggle${darkMode ? ' is-on' : ''}`}
            onClick={() => setDarkMode((v) => !v)}
            aria-label={darkMode ? 'Désactiver le mode nuit' : 'Activer le mode nuit'}
            title={darkMode ? 'Désactiver le mode nuit' : 'Activer le mode nuit'}
          >
            <span className="dark-mode-toggle-thumb">{darkMode ? '🌙' : '☀️'}</span>
          </button>
          <div className="section-inner hero-section">
            <div className="hero-content-box">
              <ScrollReveal direction="fade">
                <h1>John Waïa</h1>
                <p className="subtitle">
                  Développeur Full Stack Junior
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={150}>
                <Description darkMode={darkMode} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="formation" className="cv-section section-formation">
          <div className="section-inner">
            <ScrollReveal direction="up">
              <h2 className="section-title">🎓 Formation</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <FormationTabs />
            </ScrollReveal>
          </div>
        </section>

        <section id="experiences" className="cv-section section-experiences">
          <div className="section-inner">
            <ScrollReveal direction="up">
              <h2 className="section-title">💼 Expériences</h2>
            </ScrollReveal>
            {/* Chaque carte d'expérience s'anime individuellement (voir experiences.js) */}
            <Experiences />
          </div>
        </section>

        <section id="competences" className="cv-section section-competences">
          <div className="section-inner">
            <ScrollReveal direction="up">
              <h2 className="section-title">🛠️ Compétences</h2>
            </ScrollReveal>
            {/* Chaque icône de compétence s'anime individuellement (voir Competences.js) */}
            <Skills />
          </div>
        </section>

        <section id="softskills" className="cv-section section-softskills">
          <div className="section-inner">
            <ScrollReveal direction="up">
              <h2 className="section-title">🌟 Soft Skills</h2>
            </ScrollReveal>
            {/* Chaque carte de soft skill s'anime individuellement (voir softskills.js) */}
            <SoftSkills softSkillsList={softSkillsList} />
          </div>
        </section>

        <section id="interets" className="cv-section section-interets">
          <div className="section-inner">
            <ScrollReveal direction="up">
              <h2 className="section-title">🎯 Centres d'intérêt</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <Interests />
            </ScrollReveal>
          </div>
        </section>

        <section id="projets" className="cv-section section-projets">
          <div className="section-inner">
            <ScrollReveal direction="up">
              <h2 className="section-title">🚀 Projets</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <Projets />
            </ScrollReveal>
          </div>
        </section>

        <section id="stats" className="cv-section section-stats">
          <div className="section-inner">
            <ScrollReveal direction="up">
              <h2 className="section-title">📊 Statistiques de visite</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <Stats />
            </ScrollReveal>
          </div>
        </section>
      </main>

      {!quickMode && (
        <section id="contact" className="cv-section section-contact contact-section">
          <Contact />
        </section>
      )}

      {showTopBtn && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
