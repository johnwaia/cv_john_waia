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
          <img src="data:image/jpeg;base64,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" alt="John Waia" className="profile-photo" />
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
