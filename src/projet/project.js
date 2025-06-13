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
                {/* Projet 1 : Livre IA */}
                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ color: '#007BFF' }}>Projet Personnel : Livre IA</h2>
                    <ProjetTabs
                    tabs={['Présentation', 'Caractéristiques', 'Téléchargement']}
                    renderContent={(selectedTab) => {
                        switch (selectedTab) {
                        case 'Présentation':
                            return (
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
                            );
                        case 'Caractéristiques':
                            return (
                            <ul>
                                <li>Contenu généré par IA (ChatGPT & IA Canvas)</li>
                                <li>Thème : Histoire pour enfant</li>
                                <li>Format : PDF</li>
                                <li>Langue : Français</li>
                                <li>Nombre de pages : 10 (sans la couverture et la fin)</li>
                            </ul>
                            );
                        case 'Téléchargement':
                            return (
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
                            );
                        default:
                            return null;
                        }
                    }}
                    />
                </section>

                <section>
                    <h2 style={{ color: '#007BFF' }}>Projet Pépite : Livraison de Médicaments</h2>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                        src="data:image/png;base64,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"
                        alt="Projet Pépite"
                        style={{ borderRadius: '20px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', background: 'white' }}
                        />
                    </div>
                    <ProjetTabs
                    tabs={['Concept', 'Objectifs', 'Impact', "interview"]}
                    renderContent={(selectedTab) => {
                        switch (selectedTab) {
                        case 'Concept':
                            return (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <img
                                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDV2bDUzZXVxcno2ZGd3Z3pyYnh2bjZ3bjc0eWp2dW43Nm1lN3lxaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VzkCRACE2PRdoJRx9c/100.webp"
                                alt="livraison médicament"
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
                                     Ce projet consiste à créer une entreprise innovante en Nouvelle-Calédonie, spécialisée dans la
                    <strong> livraison sécurisée de médicaments à domicile</strong>. L'idée est née d'une volonté de
                    faciliter l'accès aux traitements pour les personnes isolées, âgées ou en difficulté de déplacement.
                                </blockquote>
                                </div>
                            </div>
                            );
                        case 'Objectifs':
                            return (
                            <ul>
                                <li>Améliorer l’accessibilité aux médicaments dans les zones peu desservies</li>
                                <li>Proposer un service de livraison rapide et fiable, respectueux des normes sanitaires</li>
                                <li>Utiliser une plateforme numérique pour la commande et le suivi en temps réel</li>
                            </ul>
                            );
                        case 'Impact':
                            return (
                            <p>
                                Ce projet s’inscrit dans une démarche sociale et sanitaire forte : il vise à <strong>réduire les inégalités d’accès aux soins</strong>
                                et à contribuer à la modernisation du secteur de la santé en Nouvelle-Calédonie. Il a été accompagné dans le cadre du dispositif <strong>Pépite</strong>.
                            </p>
                            );
                        case 'interview':
                            return (
                                <div>
                                    <p>
                                        Je vous invite à découvrir l’interview réalisée pour présenter mon projet de livraison de médicaments dans le cadre du programme <strong>Pépite</strong>.
                                    </p>

                                    <a 
                                        href="https://www.facebook.com/pepitenc/videos/graine-dentrepreneur-3/989733298743152/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <img 
                                            src="data:image/jpeg;base64,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" 
                                            alt="Voir l'interview Pépite" 
                                            style={{ 
                                                width: '100%', 
                                                maxWidth: '600px', 
                                                borderRadius: '20px', 
                                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', 
                                                marginTop: '1rem' 
                                            }} 
                                        />
                                    </a>
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
