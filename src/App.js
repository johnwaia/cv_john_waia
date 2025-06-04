import React, { useState } from 'react';
import './App.css';
import FormationTabs from "./formation";

const tabs = [
  'Description',
  'Formation',
  'Compétences',
  'Expériences',
  'Centres d’intérêt',
  'Soft Skills',
  'Langues',
];

const experiencesData = [
  {
    title: "Stage Développement Web – ISI NC",
    start: "2024-11-04",
    end: "2025-01-17",
    details: [
      "Conception et développement de fonctionnalités web",
      "Création d’interfaces utilisateur responsives",
      "Optimisation des performances et collaboration en équipe",
    ],
    logo: "https://isi.nc/images/logo_isi_final.png",
  },
  {
    title: "Employé fruits/légumes – Géant Sainte-Marie",
    start: "2024-07-24",
    end: "présent",
    details: [
      "Gestion des stocks et approvisionnement",
      "Accueil client et entretien du rayon",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV1J95Z2Fx7QD0L3xQmPe00GozfmChS98DQ&s",
  },
  {
    title: "Livreur de pizza – Boite à Pizza",
    start: "2024-03-15",
    end: "2024-05-13",
    details: [
      "Livraison rapide à une clientèle variée",
      "Respect des délais et encaissement précis",
    ],
    logo: "https://cdn.prod.website-files.com/6047004ec6f54155dc2ae1bb/62a6abe8e682452180e48a8b_Logo%20Noir.jpg"
  },
  {
    title: "Ambassadeur Environnement – Parc de Dumbéa",
    start: "2023-12",
    end: "2024-02",
    details: [
      "Sensibilisation écologique et projets durables",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmey8j5hnD1mX6fECtsPIQdr5XRvRQMOv1rg&s",
  },
  {
    title: "Commis de cuisine – Brioche Dorée",
    start: "2022-12-05",
    end: "2023-01-29",
    details: [
      "Vente, gestion de caisse, conseil client",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWIZIFxoWImf9KczjrbRUg0t_kA6U__nQCQ&s",
  },
  {
    title: "Technicien Informatique – BBS",
    start: "2022-01-03",
    end: "2022-01-31",
    details: [
      "Installation/maintenance systèmes",
      "Support technique & sécurité informatique",
    ],
    logo: "https://www.open.nc/wp-content/uploads/2019/08/BBS-LogoTrame.png",
  },
  {
    title: "Employé libre-service cave – Auchan Trianon",
    start: "2021-12-10",
    end: "2021-12-31",
    details: [
      "Réception de stocks, conseil client, gestion caisse",
    ],
    logo: "https://www.seniors.nc/assets/images/logo/partenaires/72ca67ae24e985e6dd7f91d8ee8e334f.png",
  },
  {
    title: "Animateur centre de loisirs – Village de Magenta",
    start: "2017-12-10",
    end: "2018-02-16",
    details: [
      "Planification d’activités, encadrement enfants, organisation d’événements",
    ],
    logo: "https://lesvillagesdemagenta.asso.nc/templates/skazy/images/favicon.ico",
  },
];
const softSkillsList = [
  { label: "Communication", icon: "🗣️" },
  { label: "Travail en équipe", icon: "🤝" },
  { label: "Adaptabilité", icon: "🔄" },
  // Ajoute ici les soft skills avec leurs icônes correspondantes
];


function App() {
  const [activeTab, setActiveTab] = useState('Description');
  
  const TabContent = () => {
    switch (activeTab) {
      case 'Description':
        return (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Image de l'école */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logo_Efrei_2022.svg/1200px-Logo_Efrei_2022.svg.png"
              alt="Logo Efrei Paris"
              style={{ width: '120px', height: 'auto' }}
            />

            <div>
              {/* Informations */}
              <p style={{ margin: 0 }}>
                Mon nom est John Waia, j'ai 24 ans à la recherche d'une alternance en tant que Développeur Full Stack.
                Étudiant en informatique, permis B<br />
                Rythme d'alternance : 1 sem école / 2 sem entreprise<br />
                Début : 01/09/2025 • Durée : 24 mois<br />
                Objectif : Mastère Dev Manager Full Stack – Efrei Paris
              </p>

              {/* Phrase d'accroche mise en valeur */}
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
        );

      case "Formation":
            return (
              <div>
                <h1 style={{marginBottom: 30 }}>Parcours de Formation</h1>
                <FormationTabs />
              </div>
          );

      case 'Compétences':
        return (
          <div className="skills">
            <Section title="Langages" items={[
              { name: 'Python', icon: 'python/python-original.svg' },
              { name: 'HTML5', icon: 'html5/html5-original.svg' },
              { name: 'CSS3', icon: 'css3/css3-original.svg' },
              { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
              { name: 'C', icon: 'c/c-original.svg' },
              { name: 'Java', icon: 'java/java-original.svg' },
              { name: 'SQL', icon: 'mysql/mysql-original.svg' },
              { name: 'Go', icon: 'go/go-original.svg' },
              { name: 'Prolog', icon: 'prolog/prolog-original.svg' },
            ]} />

            <Section title="Frameworks" items={[
              { name: 'Django', icon: 'django/django-plain.svg' },
              { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
              { name: 'Angular', icon: 'angularjs/angularjs-original.svg' },
              { name: 'Flutter', icon: 'flutter/flutter-original.svg' },
              { name: 'Spring Boot', icon: 'spring/spring-original.svg' },
            ]} />

            <Section title="Outils" items={[
              { name: 'Docker', icon: 'docker/docker-original.svg' },
              { name: 'Git', icon: 'git/git-original.svg' },
              { name: 'Eclipse', icon: 'eclipse/eclipse-original.svg' },
              { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
              { name: 'Android Studio', icon: 'androidstudio/androidstudio-original.svg' },
            ]} />
          </div>
        );

      function Section({ title, items }) {
        return (
          <div className="skill-section">
            <h4>{title}</h4>
            <div className="skill-grid">
              {items.map(({ name, icon }) => (
                <div key={name} className="skill-item" title={name}>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
                    alt={name}
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case 'Expériences':
        return (
          <div className="experiences">
            <ul>
              {experiencesData.map(({ title, start, end, details, logo }, index) => (
                <li key={index} className="experience-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  {logo && (
                    <img
                      src={logo}
                      alt={`Logo ${title}`}
                      style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: 8 }}
                    />
                  )}
                  <div>
                    <h3>{title}</h3>
                    <time dateTime={start}>
                      {new Date(start).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                    </time>
                    {" – "}
                    {end.toLowerCase() === "présent" ? (
                      "présent"
                    ) : (
                      <time dateTime={end}>
                        {new Date(end).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                      </time>
                    )}
                    <ul className="details" style={{ marginTop: '0.5rem' }}>
                      {details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'Centres d’intérêt':
        return (
          <ul>
            <li>Boxe anglaise 🥊</li>
            <li>Informatique (hardware & web dev)</li>
          </ul>
        );
      
      case 'Soft Skills':
      return (
        <ul className="soft-skills-list">
          {softSkillsList.map(({ label, icon }) => (
            <li key={label} className="soft-skill-item">
              <span className="soft-skill-icon">{icon}</span>
              <span className="soft-skill-label">{label}</span>
            </li>
          ))}
        </ul>
      );

      case 'Langues':
        return (
          <ul className="list-none p-0">
            <li className="flex items-center mb-2">
              <span className="text-xl mr-2">🇫🇷</span>
              <span>Français : <span className="font-semibold">Courant</span></span>
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🇬🇧</span>
              <span>Anglais : <span className="font-semibold">B1</span></span>
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="photo-container">
          <img src="/photo_john.PNG" alt="John Waia" className="profile-photo" />
        </div>
        <nav className="nav-links">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`nav-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="main-content">
        <TabContent />
      </main>

      <footer className="footer-contact">
      <h2>Contact</h2>
      <div className="contact-grid">
        <div className="contact-item">
          📞 <strong>Téléphone :</strong> +687 78 59 52
        </div>
        <div className="contact-item">
          📍 <strong>Adresse :</strong> Paris
        </div>
        <div className="contact-item">
          🎂 <strong>Âge :</strong> 24 ans
        </div>
        <div className="contact-item">
          📧 <strong>Email :</strong> <a href="mailto:johnwaia25@gmail.com">johnwaia25@gmail.com</a>
        </div>
        <div className="contact-item">
          💻 <strong>GitHub :</strong> <a href="https://github.com/johnwaia" target="_blank" rel="noopener noreferrer">johnwaia</a>
        </div>
        <div className="contact-item">
          🔗 <strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/john-waia-314251218" target="_blank" rel="noopener noreferrer">john-waia</a>
        </div>
      </div>
    </footer>

    </div>
  );
}

export default App;
