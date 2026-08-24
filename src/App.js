import React, { useState, useEffect, useCallback } from 'react';
import WelcomePopup from './WelcomePopup';
import Description from './Description';
import FormationTabs from './formations/formation';
import Experiences from './experiences/experiences';
import Skills from './competences/Competences';
import SoftSkills from './softSkill/softskills';
import { softSkillsList } from './softSkill/softskillList';
import Interests from './centreInteret/centreInteret';
import Projets from './projet/project';
import Stats from './Stats/stats';
import Contact from './Contact';
import ScrollReveal from './ScrollReveal';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleScroll = useCallback(() => {
    setShowTopBtn(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Le navigateur restaure parfois la position de scroll d'une visite
  // précédente (ex: après un rechargement) : on force toujours l'ouverture
  // sur la première section (Accueil / Description).
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Chaque section (.cv-section) peut défiler dans son propre cadre quand son
  // contenu dépasse un écran (ex: Compétences, Soft Skills, Projets). Ce scroll
  // interne n'est jamais réinitialisé par le navigateur : si on quitte une
  // section en ayant défilé dedans puis qu'on y revient plus tard, elle
  // réapparaît coincée au milieu de son contenu au lieu de son en-tête — ce qui
  // donne l'impression que le scroll de la page et celui de la section se
  // mélangent. On remet donc à zéro le scroll d'une section dès qu'on la quitte.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.cv-section'));
    if (!sections.length) return undefined;

    const getActiveSection = () => {
      const y = window.scrollY;
      let active = sections[0];
      for (const section of sections) {
        if (section.offsetTop <= y + 1) {
          active = section;
        }
      }
      return active;
    };

    let lastActiveId = getActiveSection().id;

    const handleSectionScroll = () => {
      const active = getActiveSection();
      if (active.id !== lastActiveId) {
        const previous = document.getElementById(lastActiveId);
        if (previous) previous.scrollTop = 0;
        lastActiveId = active.id;
      }
    };

    window.addEventListener('scroll', handleSectionScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="App">
      {showWelcome && <WelcomePopup onClose={() => setShowWelcome(false)} />}

      <main>
        <section id="accueil" className="cv-section section-accueil">
          <video
            className="hero-video-bg"
            src="https://videos.pexels.com/video-files/6003441/6003441-hd_1920_1080_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="section-inner hero-section">
            <div className="hero-content-box">
              <ScrollReveal direction="fade">
                <h1>John Waïa</h1>
                <p className="subtitle">
                  Développeur Full Stack Junior
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={150}>
                <Description />
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

      <section id="contact" className="cv-section section-contact contact-section">
        <Contact />
      </section>

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
