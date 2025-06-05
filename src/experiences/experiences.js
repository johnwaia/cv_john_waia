// Experiences.js
import React from 'react';
import './experience.css'; // optionnel si tu veux un style spécifique

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
      "Entretien et organisation du rayon.",
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
      "Gestion des paiements en espèces et par carte de crédit avec précision",
    ],
    logo: "https://cdn.prod.website-files.com/6047004ec6f54155dc2ae1bb/62a6abe8e682452180e48a8b_Logo%20Noir.jpg"
  },
  {
    title: "Ambassadeur Environnement – Parc de Dumbéa",
    start: "2023-12",
    end: "2024-02",
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
    details: [
      "Réception de stocks, conseil client, gestion caisse",
      "Conseil à la clientèle ",
      "Vente et gestion de la caisse"

    ],
    logo: "https://www.seniors.nc/assets/images/logo/partenaires/72ca67ae24e985e6dd7f91d8ee8e334f.png",
  },
  {
    title: "Animateur centre de loisirs – Village de Magenta",
    start: "2017-12-10",
    end: "2018-02-16",
    details: [
      "Planification d’activités.", 
      "Encadrement enfants.",
      "Organisation d’événements",
    ],
    logo: "https://lesvillagesdemagenta.asso.nc/templates/skazy/images/favicon.ico",
  },
];

export default function Experiences() {
  return (
    <div className="experiences">
      <ul className="experience-list">
        {experiencesData.map(({ title, start, end, details, logo }, index) => (
          <li key={index} className="experience-card">
            <div className="card-inner">
              <div className="card-front">
                {logo && (
                  <img
                    src={logo}
                    alt={`Logo ${title}`}
                    className="card-logo"
                  />
                )}
                <h3>{title}</h3>
                <time dateTime={start}>
                  {new Date(start).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </time>
                {" – "}
                {end.toLowerCase() === "présent" ? (
                  "présent"
                ) : (
                  <time dateTime={end}>
                    {new Date(end).toLocaleDateString('fr-FR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </time>
                )}
              </div>
              <div className="card-back">
                <ul className="details">
                  {details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
