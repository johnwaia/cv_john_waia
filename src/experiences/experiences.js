// Experiences.js

import './experience.css'; // optionnel si tu veux un style spécifique
import React, { useState } from 'react';
import Prepacommande from '../assets/PreparateurCommande.jpg';
import LogoCellocal from '../assets/logoCellocal.jpg';
import LogoScie from '../assets/LogoScie.png';

const experiencesData = [
  {
    title: "Stage Licence Informatique Développement Web – ISI NC",
    start: "2024-11-04",
    end: "2025-01-17",
    category: "Informatique",
    details: [
      "Conception et développement de fonctionnalités web",
      "Création d’interfaces utilisateur responsives",
      "Aperçu de la Gestion de projet avec la méthode SCRUM",
    ],
    logo: "https://isi.nc/images/logo_isi_final.png",
  },
  {
    title: "Employé fruits/légumes – Géant Sainte-Marie",
    start: "2024-07-24",
    end: "présent",
    category: "Grande Distribution",
    details: [
      "Gestion des stocks et approvisionnement",
      "Accueil client et entretien du rayon",
      "Entretien et organisation du rayon.",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV1J95Z2Fx7QD0L3xQmPe00GozfmChS98DQ&s",
  },
  {
    title: "Livreur de pizza – Boite à Pizza",
    start: "2024-03-15",
    end: "2024-05-13",
    category: "Restauration",
    details: [
      "Livraison rapide à une clientèle variée",
      "Respect des délais et encaissement précis",
      "Gestion des paiements en espèces et par carte de crédit avec précision",
    ],
    logo: "https://cdn.prod.website-files.com/6047004ec6f54155dc2ae1bb/62a6abe8e682452180e48a8b_Logo%20Noir.jpg"
  },
  {
    title: "Ambassadeur Environnement – Parc de Dumbéa",
    start: "2023-12",
    end: "2024-02",
    category: "Animation",
    details: [
      "Sensibilisation écologique et projets durables",
      "Mise en place de projets écologiques.",
      "Promotion de pratiques durables.",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmey8j5hnD1mX6fECtsPIQdr5XRvRQMOv1rg&s",
  },
  {
    title: "Commis de cuisine – Brioche Dorée",
    start: "2022-12-05",
    end: "2023-01-29",
    category: "Restauration",
    details: [
      "Dresser des plats et les transmettre au personnel de salle.",
      "Participer à l'entretien du poste de la cuisine et des locaux annexes.",
      "Appliquer les règles d'hygiène et de sécurité en vigueur.",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWIZIFxoWImf9KczjrbRUg0t_kA6U__nQCQ&s",
  },
  {
    title: "Technicien Informatique – BBS",
    start: "2022-01-03",
    end: "2022-01-31",
    category: "Informatique",
    details: [
      "Installation/maintenance systèmes",
      "Support technique & sécurité informatique",
      " Gestion de la sécurité informatique",
    ],
    logo: "https://www.open.nc/wp-content/uploads/2019/08/BBS-LogoTrame.png",
  },
  {
    title: "Employé libre-service cave – Auchan Trianon",
    start: "2021-12-10",
    end: "2021-12-31",
    category: "Grande Distribution",
    details: [
      "Réception de stocks, conseil client, gestion caisse",
      "Conseil à la clientèle ",
      "Vente et gestion de la caisse"

    ],
    logo: "https://www.seniors.nc/assets/images/logo/partenaires/72ca67ae24e985e6dd7f91d8ee8e334f.png",
  },
  {
    title: "Stage BTS Bâtiment – Arbe",
    start: "2019-11-04",
    end: "2019-12-10",
    category: "Construction",
    details: [
      "Lecture de plans et dessins techniques",
      "Connaissances en sécurité sur chantier",
      "Compétences techniques de base en BTP"

    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJMTCZhi-LSHqxI6IZgPZhjm7PmZ94xCZSh621TKv4L8LZQIOJnEpPqvZPMgVWP3ugiU&usqp=CAU",
  },
  {
    title: "Animateur centre de loisirs – Village de Magenta",
    start: "2017-12-10",
    end: "2018-02-16",
    category: "Animation",
    details: [
      "Planification d’activités.", 
      "Encadrement enfants.",
      "Organisation d’événements",
    ],
    logo: "https://lesvillagesdemagenta.asso.nc/templates/skazy/images/favicon.ico",
  },
  {
    title: "Dockaire – Auchan Quai Ferry",
    start: "2025-06-12",
    end: "2025-06-15",
    category: "Intérim (Logistique Pro Service)",
    details: [
      "Rangement du dock",
      "Utilisation de transpalette manuel et électrique",
      "Gestion des flux de marchandises",
    ],
    logo: "https://www.seniors.nc/assets/images/logo/partenaires/72ca67ae24e985e6dd7f91d8ee8e334f.png",
  },
  {
    title: "Employé libre service – Leader Price Conception",
    start: "2025-06-10",
    end: "2025-06-11",
    category: "Intérim (Logistique Pro Service)",
    details: [
      "Travail en équipe dans un environnement dynamique",
      "Gestion des flux de marchandises",
      "Tri et dispatch des colis selon les zones de stockage",
    ],
    logo: "data:image/png;base64,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",
  },
  {
    title: "Employé fruits/légumes – Géant Sainte-Marie",
    start: "2025-06-16",
    end: "2025-06-20",
    category: "Intérim (Logistique Pro Service)",
    details: [
        "Tri et dispatch des colis selon les zones de stockage",
        "Mise en rayon des fruits et légumes selon les consignes de présentation",
        "Vérification de la qualité et de la fraîcheur des produits",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIV1J95Z2Fx7QD0L3xQmPe00GozfmChS98DQ&s",
  },
  {
  title: "Préparateur de commandes – Centrale Frais",
  start: "2025-07-15",
  end: "2025-07-16",
  category: "Intérim (Logistique Pro Service)",
  details: [
    "Préparation de commandes de fruits et légumes pour Leader Price et Casino",
    "Tri et répartition des produits selon les zones de stockage",
    "Contrôle de la qualité, de la fraîcheur et de la conformité des produits",
  ],
  logo: Prepacommande,
  },
  {
    title: "Dépotage de conteneur – Cellocal Nouvelle-Calédonie",
    start: "2025-07-16",
    end: "2025-07-17",
    category: "Intérim (Logistique Pro Service)",
    details: [
      "Déchargement manuel de conteneurs de fruits et légumes à l'arrivée sur site",
      "Tri et contrôle visuel des produits pour vérifier l'état et la fraîcheur",
      "Répartition des colis selon les zones de stockage ou de préparation",
      "Participation à la palettisation et à la mise en zone de transit",
      "Respect des normes d'hygiène et de sécurité alimentaire en entrepôt",
    ],
    logo: LogoCellocal,
  },
  {
    title: "Destruction d’archives – SCIE Nouvelle-Calédonie",
    start: "2025-07-21",
    end: "2025-07-25",
    category: "Intérim (Logistique Pro Service)",
    details: [
      "Tri et identification des documents à détruire",
      "Transport des archives depuis les bureaux vers la zone de destruction",
      "Nettoyage et remise en ordre des zones de travail après intervention",
    ],
    logo: LogoScie,
  }

];

const categories = [ "Restauration", "Animation", "Grande Distribution", "Informatique","Construction","Intérim (Logistique Pro Service)"];

export default function Experiences() {
const [activeCategory, setActiveCategory] = useState("Informatique");

  const filteredData =
    activeCategory === "I"
      ? experiencesData
      : experiencesData.filter(exp => exp.category === activeCategory);

  return (
    <div className="experiences">
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`tab-button ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="experience-list">
        {filteredData.map(({ title, start, end, details, logo }, index) => (
          <li key={index} className="experience-card">
            <div className="card-inner">
              <div className="card-front">
                {logo && (
                  <img src={logo} alt={`Logo ${title}`} className="card-logo" />
                )}
                <h3>{title}</h3>
                <time dateTime={start}>
                  {new Date(start).toLocaleDateString('fr-FR')}
                </time>
                {" – "}
                {end.toLowerCase() === "présent" ? "présent" : (
                  <time dateTime={end}>
                    {new Date(end).toLocaleDateString('fr-FR')}
                  </time>
                )}
              </div>
              <div className="card-back">
                <ul className="details">
                  {details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}