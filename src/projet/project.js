// project.js
import React, { useState } from 'react';
import ProjetTabs from './projetTabs';

const Projets = () => {
  const [ongletActif, setOngletActif] = useState('pédagogiques');
  const [selectedTab, setSelectedTab] = useState('Fonctions');
  const renderContenu = () => {
    switch (ongletActif) {
        case 'pédagogiques':
            return (
                <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
                {/* Projet 1 */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: '#007BFF' }}>Projet Développement Web & Micro-Service 2024</h2>
                    <h3 style={{ marginTop: '0.5rem', color: '#333' }}>Clone de Pinterest</h3>

                    <ProjetTabs
                    tabs={['Fonctions', 'Critères', 'Technologies', 'Éclaircissements', 'Équipe']}
                    renderContent={(selectedTab) => {
                        switch (selectedTab) {
                        case 'Fonctions':
                            return (
                            <>
                                <h4>✅ Fonctions minimales</h4>
                                <ul>
                                <li>Upload d'une vidéo avec titre et description</li>
                                <li>Ajout d'une section de commentaires</li>
                                <li>Authentification via OAuth2 & OpenID Connect</li>
                                <li>Lancement de l'application via Docker Compose</li>
                                </ul>
                            </>
                            );
                        case 'Critères':
                            return (
                            <>
                                <h4>🧠 Critères d’évaluation</h4>
                                <ul>
                                <li>Fonctionnalités correctement implémentées</li>
                                <li>Qualité du code (factorisation, optimisation, lisibilité)</li>
                                <li>Soins apportés à l'interface graphique</li>
                                <li>Documentation du projet</li>
                                </ul>
                            </>
                            );
                        case 'Technologies':
                            return (
                            <>
                                <h4>🛠️ Technologies utilisées</h4>
                                <p>Les technologies sont indicatives. Vous pouvez en utiliser d’Autress si elles sont pertinentes.</p>
                            </>
                            );
                        case 'Éclaircissements':
                            return (
                            <>
                                <h4>💡 Éclaircissements</h4>
                                <h5>🔐 OAuth2</h5>
                                <p>Protocole pour déléguer l'accès aux ressources utilisateur à une application cliente.</p>
                                <h5>🆔 OpenID Connect</h5>
                                <p>Extension d’OAuth2 pour ajouter une couche d’identité.</p>
                                <h5>🐳 Docker</h5>
                                <p>Outil pour exécuter des applications dans des conteneurs isolés.</p>
                                <h5>📦 Docker Compose</h5>
                                <p>Orchestration de conteneurs via un fichier <code>docker-compose.yml</code>.</p>
                            </>
                            );
                        case 'Équipe':
                            return (
                            <>
                                <h4>👨‍💻 Équipe projet</h4>
                                <ul>
                                <li>Malcolm Bertaina</li>
                                <li>Keys Dianou</li>
                                <li>John Waia</li>
                                <li>Romain Castelain</li>
                                <li>Warren Kelekele</li>
                                <li>Emile WAPAE</li>
                                </ul>
                            </>
                            );
                        default:
                            return null;
                        }
                    }}
                    />
                </section>

                {/* Projet 2 */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: '#007BFF' }}>Projet Python : MauvaiseLangue</h2>

                    <ProjetTabs
                    tabs={['Présentation', 'Fonctionnalités', 'Installation', 'Utilisation', 'Contributeurs', 'Licence']}
                    renderContent={(selectedTab) => {
                        switch (selectedTab) {
                        case 'Présentation':
                            return (
                            <p>
                                <strong>MauvaiseLangue</strong> est un module Python qui permet de scraper et détecter des insultes en français depuis le Wiktionnaire.
                                Il inclut également une fonctionnalité pour obtenir les définitions des insultes détectées.
                            </p>
                            );
                        case 'Fonctionnalités':
                            return (
                            <ul>
                                <li>Scraping d'insultes depuis le Wiktionnaire</li>
                                <li>Cache local pour éviter les requêtes inutiles</li>
                                <li>Détection d'insultes dans un texte donné</li>
                                <li>Récupération des définitions depuis Wiktionnaire</li>
                            </ul>
                            );
                        case 'Installation':
                            return (
                            <pre><code>pip install MauvaiseLangue</code></pre>
                            );
                        case 'Utilisation':
                            return (
                            <>
                                <p><strong>1. Afficher les insultes</strong></p>
                                <pre><code>{`from MauvaiseLangue import scrape_insultes

            insultes = scrape_insultes()
            print(insultes)`}</code></pre>

                                <p><strong>2. Détecter des insultes dans un texte</strong></p>
                                <pre><code>{`from MauvaiseLangue import detect_insultes

            texte = "Tu es vraiment stupide et nul."
            insultes_detectees = detect_insultes(texte)
            print(insultes_detectees)`}</code></pre>

                                <p><strong>3. Obtenir la définition d'une insulte</strong></p>
                                <pre><code>{`from MauvaiseLangue import get_definition_insulte

            definition = get_definition_insulte("idiot")
            print(definition)`}</code></pre>

                                <p>Le module utilise <code>insultes_cache.json</code> pour améliorer les performances.</p>
                            </>
                            );
                        case 'Contributeurs':
                            return <ul><li>johnwaia</li></ul>;
                        case 'Licence':
                            return <p>Ce projet est sous licence MIT.</p>;
                        default:
                            return null;
                        }
                    }}
                    />
                </section>

                {/* Projet 3 */}
                <section>
                    <h2 style={{ color: '#007BFF' }}>Projet Moteur de Recherche Réseaux Sociaux</h2>
                    <p>
                    Ce projet propose un moteur de recherche puissant pour les réseaux sociaux permettant de rechercher avec un prompt et d'utiliser une liste complète de commandes.
                    </p>

                    <ProjetTabs
                    tabs={['Description', 'Commandes','Fonctionnement','Technologie']}
                    renderContent={(selectedTab) => {
                        switch (selectedTab) {
                        case 'Description':
                            return (
                                <p>
                                Le moteur permet d'effectuer des recherches avancées dans une grille d'affichage, de naviguer efficacement dans les résultats, et d'interagir avec le contenu grâce à une série de commandes dédiées. 
                                Contrairement aux réseaux sociaux traditionnels, aucune image de post n’est affichée, ce qui évite les distractions visuelles et permet de se concentrer uniquement sur l'information recherchée.
                                </p>
                            );

                        case 'Commandes':
                            return (
                            <ul>
                                <li><code>Reset</code> : Réinitialise la grille et les filtres.</li>
                                <li><code>RepliesGreater</code> : Filtre les éléments avec un nombre de réponses supérieur.</li>
                                <li><code>SelectById</code> : Sélectionne un élément par son identifiant.</li>
                                <li><code>ContentSearch</code> : Recherche de contenu dans la grille.</li>
                                <li><code>Hashtag</code> : Recherche par hashtag.</li>
                                <li><code>Link</code> : Interaction avec les liens présents dans le contenu.</li>
                                <li><code>Fav</code> : Ajout aux favoris.</li>
                                <li><code>Help</code> : Affiche l'aide sur les commandes disponibles.</li>
                                <li><code>Next</code> : Passe à l’élément suivant.</li>
                                <li><code>Previous</code> : Revient à l’élément précédent.</li>
                                <li><code>Top</code> : Va en haut de la grille.</li>
                                <li><code>Bottom</code> : Va en bas de la grille.</li>
                                <li><code>Play</code> : Lance une lecture des post.</li>
                                <li><code>Stop</code> : Arrête la lecture.</li>
                                <li><code>Goto</code> : Se déplace à un post spécifique.</li>
                                <li><code>Sort</code> : Trie les éléments selon un critère.</li>
                                <li><code>TagList</code> : Affiche la liste des tags disponibles.</li>
                            </ul>
                            );
                        
                        case 'Fonctionnement':
                            return (
                                <p>
                                Interagir avec le contenu grâce à une série de commandes dédiées. Ces commandes doivent être saisies dans le prompt sous la forme  
                                <strong> commande sujet</strong> (ex. : <code>hashtag football</code> ou <code>content pollution</code>), 
                                afin d'exécuter des actions précises sur les données affichées.
                                </p>
                            );
                        
                        case 'Technologie':
                            return (
                                <div>
                                <p>
                                    Ce projet utilise les technologies suivantes pour le développement de l’interface et du backend :
                                </p>
                                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <img src="data:image/png;base64,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" alt="Vaadin" style={{ height: '24px', marginRight: '0.5rem' }} />
                                     Framework Java moderne pour créer des interfaces web côté serveur.
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" style={{ height: '24px', marginRight: '0.5rem' }} />
                                    Langage principal utilisé pour la logique métier et l’application.
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" alt="Spring Boot" style={{ height: '24px', marginRight: '0.5rem' }} />
                                    Framework backend pour construire des services web rapides et performants.
                                    </li>
                                </ul>
                                </div>
                            );

                            default:
                            return null;
                        }
                    }}
                    />
                </section>
                </div>
            );

        case 'Personnels':
            return (
            <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#007BFF' }}>📅 Emploi du Temps UNC</h2>
            <h3 style={{ marginTop: '0.5rem', color: '#333' }}>Application mobile Flutter</h3>

            <div style={{ marginTop: '2rem' }}>
                <ul style={{ display: 'flex', gap: '1rem', padding: 0, listStyle: 'none', borderBottom: '2px solid #007BFF' }}>
                {['Fonctions', 'Aperçu', 'Prérequis', 'Dépendances', 'Structure', 'Lancement', 'Notes', 'Licence'].map(tab => (
                    <li key={tab}>
                    <button
                        onClick={() => setSelectedTab(tab)}
                        style={{
                        background: selectedTab === tab ? '#007BFF' : 'transparent',
                        color: selectedTab === tab ? 'white' : '#007BFF',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        cursor: 'pointer',
                        borderBottom: selectedTab === tab ? '4px solid #0056b3' : 'none'
                        }}
                    >
                        {tab}
                    </button>
                    </li>
                ))}
                </ul>

                <div style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>
                {selectedTab === 'Fonctions' && (
                    <>
                    <h4>🚀 Fonctionnalités principales</h4>
                    <ul>
                        <li>🧑‍🎓 <strong>Connexion rapide</strong> : Saisie de l'identifiant étudiant à l'ouverture.</li>
                        <li>🗓️ <strong>Emploi du temps personnalisé</strong> : Affichage clair par semaine, navigation entre semaines, tri automatique par jour.</li>
                        <li>🏫 <strong>Détails complets</strong> : Intitulé, salle, enseignant, horaires, type de cours.</li>
                        <li>🤝 <strong>Organisation de réunions</strong> : Créneaux communs entre étudiants.</li>
                        <li>🇫🇷 <strong>Interface 100% française</strong> : Format local, fuseau horaire Nouméa.</li>
                        <li>📱 <strong>Design moderne</strong> : UI fluide et responsive.</li>
                    </ul>
                    </>
                )}

                {selectedTab === 'Aperçu' && (
                    <>
                    <h4 style={{ marginBottom: '1rem' }}>📸 Aperçu de l’application</h4>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <li>
                        <strong>Page d'accueil</strong>
                        <br />
                        <img
                            src="https://github.com/johnwaia/test_app/raw/main/assets/screenshots/page_acceuil.jpg"
                            alt="Page d'accueil"
                            style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            marginTop: '0.5rem',
                            borderRadius: '8px',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        </li>
                        <li>
                        <strong>Affichage Emploi du temps</strong>
                        <br />
                        <img
                            src="https://github.com/johnwaia/test_app/raw/main/assets/screenshots/affichage_cours.jpg"
                            alt="Affichage Emploi du temps"
                            style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            marginTop: '0.5rem',
                            borderRadius: '8px',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        </li>
                        <li>
                        <strong>Détail Cours</strong>
                        <br />
                        <img
                            src="https://github.com/johnwaia/test_app/raw/main/assets/screenshots/d%C3%A9tails_cours.jpg"
                            alt="Détail Cours"
                            style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            marginTop: '0.5rem',
                            borderRadius: '8px',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        </li>
                        <li>
                        <strong>Organisation de réunion</strong>
                        <br />
                        <img
                            src="https://github.com/johnwaia/test_app/raw/main/assets/screenshots/organiser_des_r%C3%A9unions.jpg"
                            alt="Organisation de réunion"
                            style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            marginTop: '0.5rem',
                            borderRadius: '8px',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        </li>
                        <li>
                        <strong>Créneaux communs</strong>
                        <br />
                        <img
                            src="https://github.com/johnwaia/test_app/raw/main/assets/screenshots/Affichage_des_cr%C3%A9neaux.jpg"
                            alt="Créneaux communs"
                            style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            marginTop: '0.5rem',
                            borderRadius: '8px',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        </li>
                    </ul>
                    </>
                )}

                {selectedTab === 'Prérequis' && (
                    <>
                    <h4>📦 Prérequis</h4>
                    <ul>
                        <li>Flutter SDK</li>
                        <li>Dart SDK</li>
                        <li>IDE recommandé : Android Studio ou Visual Studio Code</li>
                        <li>Connexion Internet active</li>
                    </ul>
                    </>
                )}

                {selectedTab === 'Dépendances' && (
                    <>
                    <h4>🛠️ Dépendances principales</h4>
                    <pre>
                        <code>
        {`dependencies:
        flutter:
            sdk: flutter
        http: ^0.13.5
        intl: ^0.18.1
        timezone: ^0.9.1
        collection: ^1.17.1`}
                        </code>
                    </pre>
                    </>
                )}

                {selectedTab === 'Structure' && (
                    <>
                    <h4>📁 Structure du projet</h4>
                    <ul>
                        <li><code>main.dart</code> – Point d’entrée</li>
                        <li><code>app.dart</code> – Initialisation</li>
                        <li><code>views/user_id_input_view.dart</code> – Connexion</li>
                        <li><code>views/home_page.dart</code> – Emploi du temps</li>
                        <li><code>views/MeetingOrganizerView.dart</code> – Réunions</li>
                        <li><code>models/ics_event.dart</code> – Modèle événement</li>
                        <li><code>services/schedule_service.dart</code> – Parsing .ics</li>
                        <li><code>widgets/drawer_menu.dart</code> – Menu navigation</li>
                        <li><code>constants/strings.dart</code> – Constantes</li>
                    </ul>
                    </>
                )}

                {selectedTab === 'Lancement' && (
                    <>
                    <h4>⚙️ Lancer le projet</h4>
                    <pre>
                        <code>
                            {`git clone https://github.com/johnwaia/test_app.git
                            cd test_app
                            flutter pub get
                            flutter doctor
                            flutter run`}
                        </code>
                    </pre>
                    </>
                )}

                {selectedTab === 'Notes' && (
                    <>
                    <h4>💡 Notes techniques</h4>
                    <ul>
                        <li>Récupération d’un fichier .ics par identifiant étudiant.</li>
                        <li>Fuseau horaire Pacific/Noumea.</li>
                        <li>Connexion Internet obligatoire.</li>
                        <li>Écran de démarrage avec logo UNC.</li>
                    </ul>
                    </>
                )}

                {selectedTab === 'Licence' && (
                    <>
                    <h4>📄 Licence</h4>
                    <p>
                        Projet développé dans un cadre pédagogique à l’UNC.<br />
                        Licence à définir (ex. : MIT, GPL, etc.).
                    </p>
                    </>
                )}
                </div>
            </div>
            </div>
            );

        case 'Autres':
            return (
                <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
                <section>
                    <h2 style={{ color: '#007BFF' }}>Projet Personnel : Livre IA</h2>
                    <ProjetTabs
                    tabs={['Présentation', 'Caractéristiques', 'Téléchargement']}
                    renderContent={(selectedTab) => {
                        switch (selectedTab) {
                            case 'Présentation':
                                return (
                                    <>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                        <img
                                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXppOTRvdndwbDg5YTc3ZWxuZXE2MHlwa3NkdjR4cndvN3J2dXIxciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SKGo6OYe24EBG/200w.webp"
                                            alt="Imagination"
                                            style={{
                                            borderRadius: '30px',
                                            maxWidth: '200px',
                                            height: 'auto',
                                            flexShrink: 0,
                                            }}
                                        />
                                        <div>
                                            <blockquote
                                            style={{
                                                fontStyle: 'italic',
                                                borderLeft: '4px solid #ccc',
                                                paddingLeft: '10px',
                                                color: '#555',
                                                marginBottom: '1rem',
                                            }}
                                            >
                                                J'ai créé ce livre pour enfants avec l'aide de l'intelligence artificielle. Il raconte une histoire amusante et originale,
                                                conçue pour stimuler l'imagination des plus jeunes tout en montrant comment l'IA peut participer à la création de contenu.
                                            </blockquote>
                                            
                                        </div>
                                        </div>
                                    </>
                                );

                            case 'Caractéristiques':
                                return (
                                <ul>
                                    <li>Contenu généré par IA (ChatGPT & IA Canvas)</li>
                                    <li>Thème : Histoire pour enfant</li>
                                    <li>Format : PDF</li>
                                    <li>Langue : Français</li>
                                    <li>Nombre de pages : 10 (Sans compter la couverture et la page de fin)</li>
                                </ul>
                                );

                            case 'Téléchargement':
                            return (
                                <>
                                <p>
                                    Vous pouvez télécharger le livre gratuitement en cliquant sur le lien ci-dessous :
                                    <br />
                                    <a
                                    href="https://drive.google.com/file/d/1DJoZqgmMftUsb_SO0QbZ27CM6oBFRyb0/view?usp=sharing"
                                    download
                                    style={{ color: '#28a745', textDecoration: 'underline', marginTop: '1rem', display: 'inline-block' }}
                                    >
                                    📘 Télécharger le livre (PDF)
                                    </a>
                                </p>
                                </>
                            );

                        default:
                            return null;
                        }
                    }}
                    />
                </section>
                </div>
            );

        default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          onClick={() => setOngletActif('pédagogiques')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: ongletActif === 'pédagogiques' ? '#007BFF' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Pédagogiques
        </button>
        <button
          onClick={() => setOngletActif('Personnels')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: ongletActif === 'Personnels' ? '#007BFF' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Personnels
        </button>
        <button
          onClick={() => setOngletActif('Autres')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: ongletActif === 'Autres' ? '#007BFF' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Autres
        </button>
      </div>

      <div>{renderContenu()}</div>
    </div>
  );
};

export default Projets;
