# CV John Waïa

CV en ligne interactif de **John Waïa**, développeur Full Stack Junior — construit avec React.
Le site se présente comme un enchaînement de sections plein écran empilées ("effet feuilles"), chacune dédiée à une facette du profil : présentation, formation, expériences, compétences, soft skills, centres d'intérêt, projets, statistiques de visite et contact.

🔗 **Démo en ligne :** [johnwaia.github.io/cv_john_waia](https://johnwaia.github.io/cv_john_waia)

## Sommaire

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Démarrage rapide](#démarrage-rapide)
- [Scripts disponibles](#scripts-disponibles)
- [Configuration](#configuration)
- [Déploiement](#déploiement)
- [Détails d'architecture](#détails-darchitecture)
- [Licence](#licence)
- [Contact](#contact)

## Aperçu

Le CV s'organise en une page unique (`/`) découpée en sections `100vh`, empilées en `position: sticky` : chaque nouvelle section glisse par-dessus la précédente au fil du scroll, façon jeu de cartes. Une bulle de bienvenue s'affiche à l'ouverture, et un bouton "retour en haut" apparaît après un certain scroll.

| Section | Contenu |
|---|---|
| 🏠 Accueil | Vidéo de fond (lagon), photo, présentation animée façon terminal de code, indicateur de scroll |
| 🎓 Formation | Parcours scolaire (Licence Informatique, BTS Bâtiment, Bac STI2D…) par onglets |
| 💼 Expériences | Historique professionnel filtrable par catégorie (Informatique, Restauration, Intérim…), cartes retournables avec logo entreprise |
| 🛠️ Compétences | Compétences techniques par domaine (Informatique / Bâtiment / Bureautique), classées par catégories (langages, frameworks, outils, déploiement, tests, méthodes agiles, réseaux…) |
| 🌟 Soft Skills | Grille de qualités humaines illustrées |
| 🎯 Centres d'intérêt | Loisirs et passions |
| 🚀 Projets | Portfolio de projets (pédagogiques, personnels, autres) avec captures d'écran et onglets détaillés |
| 📊 Statistiques de visite | Compteur de visiteurs en temps réel via une API dédiée |
| 📬 Contact | Formulaire de contact (Formspree) + réseaux sociaux |

## Fonctionnalités

- **Mise en page "stacked sheets"** : sections plein écran en `position: sticky`, avec défilement interne autonome pour les sections au contenu plus long qu'un écran.
- **Animations au scroll** : apparition progressive des éléments via `IntersectionObserver` (`ScrollReveal`), effet "distribution de cartes" sur les onglets.
- **Bio façon terminal** : la présentation est "tapée" caractère par caractère dans un faux terminal (`whoami`, `cat bio.txt`, `cat formation.txt`).
- **Vidéo de fond** en boucle sur la section d'accueil, contenu regroupé dans une carte opaque pour rester lisible.
- **Onglets réutilisables** (`ProjetTabs`, formation, compétences, expériences) avec réinitialisation du scroll interne à chaque changement d'onglet.
- **Cartes d'expérience retournables** (recto : poste/dates, verso : détails des missions).
- **Filtrage par catégorie** des expériences professionnelles.
- **Compteur de visiteurs** avec appel à une API externe (rang du visiteur, total, session persistée en `sessionStorage`).
- **Formulaire de contact fonctionnel** via [Formspree](https://formspree.io/).
- **Responsive** : mise en page adaptée mobile/tablette/desktop (grilles, colonnes CSS, tailles de police).
- **Accessibilité** : respect de `prefers-reduced-motion` (désactivation des animations), attributs `aria-*` sur les éléments décoratifs.

## Stack technique

- **[React 18](https://react.dev/)** (bootstrapé avec [Create React App](https://github.com/facebook/create-react-app) / `react-scripts`)
- **CSS** : feuilles de styles dédiées par composant (pas de framework CSS imposé ; Bootstrap et MDB UI Kit sont installés mais l'essentiel du style est du CSS/JS custom)
- **[Formspree](https://formspree.io/)** (`@formspree/react`) pour le formulaire de contact
- **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti)**, **[three.js](https://threejs.org/)** / `@react-three/fiber` / `@react-three/drei`, **framer-motion**, **react-tsparticles** : dépendances disponibles pour effets visuels
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** pour le déploiement sur GitHub Pages
- **Testing Library** (`@testing-library/*`) pour les tests

## Structure du projet

```
cv_john_waia/
├── public/                     # index.html, favicon, manifest, logo
├── src/
│   ├── App.js / App.css        # Orchestration des sections, layout "stacked sheets"
│   ├── index.js                # Point d'entrée React
│   ├── WelcomePopup.js         # Bulle de bienvenue à l'ouverture
│   ├── Description.js          # Présentation (photo, bio terminal, indicateur scroll)
│   ├── description.css
│   ├── ScrollReveal.js         # Composant générique d'animation au scroll
│   ├── ScrollReveal.css
│   ├── scrollWithinSection.js  # Utilitaire : scroll confiné à une section (évite les fuites vers la fenêtre)
│   ├── cardTabs.css            # Styles partagés des onglets "façon carte"
│   ├── Contact.js / contact.css
│   ├── formations/
│   │   └── formation.js        # Parcours scolaire
│   ├── experiences/
│   │   ├── experiences.js      # Expériences professionnelles (filtrage + cartes)
│   │   └── experience.css
│   ├── competences/
│   │   ├── Competences.js      # Compétences techniques par catégorie
│   │   └── competences.css
│   ├── softSkill/
│   │   ├── softskills.js       # Grille de soft skills
│   │   └── softskillList.js    # Données des soft skills
│   ├── centreInteret/
│   │   └── centreInteret.js    # Centres d'intérêt
│   ├── projet/
│   │   ├── project.js          # Portfolio de projets
│   │   └── projetTabs.js       # Onglets réutilisables pour le détail d'un projet
│   ├── Stats/
│   │   └── stats.js            # Compteur de visiteurs
│   └── assets/                 # Images/logos utilisés dans le CV
├── package.json
└── README.md
```

## Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) 18+ recommandé
- npm (fourni avec Node.js)

### Installation

```bash
git clone https://github.com/johnwaia/cv_john_waia.git
cd cv_john_waia
npm install
```

### Lancer en développement

```bash
npm start
```

Ouvre [http://localhost:3000](http://localhost:3000) — l'application se recharge automatiquement à chaque modification.

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm start` | Lance le serveur de développement (hot reload) |
| `npm test` | Lance les tests en mode watch interactif |
| `npm run build` | Génère le build de production optimisé dans `build/` |
| `npm run deploy` | Build puis publie le contenu de `build/` sur GitHub Pages (via `gh-pages`) |
| `npm run eject` | Éjecte la configuration Create React App (irréversible) |

## Configuration

Le projet appelle deux services externes qu'il faut reconfigurer si vous forkez ce dépôt :

- **Formulaire de contact** (`src/Contact.js`) : utilise Formspree avec l'ID de formulaire `xgvyyabv`. Remplacez-le par votre propre ID Formspree ([créer un formulaire](https://formspree.io/)).
- **Compteur de visiteurs** (`src/Stats/stats.js`) : appelle `https://visitor-notifier.onrender.com/visit`, un petit backend Node.js/Render dédié qui enregistre les sessions et renvoie le rang du visiteur ainsi que le total. Remplacez `API_URL` par votre propre service si besoin.

Aucune variable d'environnement n'est requise pour lancer le projet en local (`npm start` fonctionne tel quel).

## Déploiement

Le site est déployé sur **GitHub Pages** à l'adresse définie par le champ `homepage` de `package.json` :

```bash
npm run deploy
```

Cette commande exécute `npm run build` (via `predeploy`) puis publie le contenu du dossier `build/` sur la branche `gh-pages` du dépôt grâce au paquet [`gh-pages`](https://www.npmjs.com/package/gh-pages).

## Détails d'architecture

- **Sections empilées** : chaque section (`.cv-section`) occupe `100vh`/`100dvh`, reste collée en haut (`position: sticky`) et possède un `z-index` croissant, donnant l'illusion de feuilles qui se recouvrent au scroll. Quand le contenu d'une section dépasse un écran, elle défile en interne (`overflow-y: auto`) plutôt que de faire défiler toute la page.
- **Réinitialisation du scroll interne** : `App.js` surveille quelle section est active et remet à zéro le défilement interne de la section quittée, pour éviter de "réapparaître" au milieu du contenu en y revenant.
- **`scrollWithinSection.js`** : utilitaire dédié pour ramener un élément dans la zone visible d'une section sans jamais faire défiler la fenêtre globale (contrairement à `scrollIntoView`, qui peut faire "remonter" la section suivante par-dessus le contenu à cause de l'empilement `sticky`).
- **Compétences en colonnes** : la section Compétences utilise une mise en page CSS multi-colonnes (`columns`) pour que toutes les catégories tiennent sur un seul écran sans défilement interne.
- **Vidéo de fond** : lecture en boucle, coupée (`muted`) et `playsInline` pour l'autoplay cross-navigateur ; le contenu textuel est regroupé dans une carte opaque pour rester lisible par-dessus la vidéo.

## Licence

Projet personnel — tous droits réservés. Le code peut être consulté à titre d'exemple, mais le contenu (textes, photos, CV) est spécifique à John Waïa.

## Contact

- **Email :** [johnwaia25@gmail.com](mailto:johnwaia25@gmail.com)
- **GitHub :** [@johnwaia](https://github.com/johnwaia)
- **LinkedIn :** [john-waïa](https://www.linkedin.com/in/john-wa%C3%AFa-314251218/)
