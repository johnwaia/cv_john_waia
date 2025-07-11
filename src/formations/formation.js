// FormationTabs.js
import React, { useState,useEffect  } from "react";

const formationsData = [
  {
    title: "LICENCE INFORMATIQUE",
    school: "Université de la Nouvelle-Calédonie (UNC)",
    start: "2022",
    end: "2025",
    details: [
      "Études approfondies en algorithmique, programmation et bases de données.",
      "Projets en développement web et mobile.",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxo-dNoqXkemuPXqrG1ZrVP1AN8UottvxVUA&s",
    gif: "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif",
    transcriptLink:"https://drive.google.com/file/d/1gJrW1OcfzXPK7o6xY8dosCeJIKm7IVHg/view?usp=sharing ",
  },
  {
    title: "FORMATION INITIALE EN INFORMATIQUE",
    school: "EDIL",
    start: "2021",
    end: "2021",
    details: [
      "Initiation aux concepts fondamentaux de l'informatique.",
      "Formation pratique en développement logiciel.",
    ],
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG1sOWxyMGJkaWsyczZuZXF6YWN6cnI0YWsxcnhvaDZyZnZqMjQ3NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AspxmCZmV8kEG2VS8M/200w.webp", // Découverte info
    diplomaLink: "https://drive.google.com/file/d/1GaxzoSxO6jGFykzOwXuJYI8WRr9oMG_f/view?usp=drive_link",  
  },
  {
    title: "BREVET DE TECHNICIEN SUPÉRIEUR (BTS) BÂTIMENT",
    school: "Lycée Jules Garnier",
    start: "2019",
    end: "2020",
    details: [
      "Formation technique en construction et gestion de chantier.",
      "Apprentissage des normes et matériaux du bâtiment.",
    ],
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZpdjJqZWZjYXFqcDVoejk3MGFjOWdmYnV0d3QzNzFiM3FkMzdyOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/g4nHG6pBP525q/200.webp", // Chantier
    diplomaLink: "https://drive.google.com/file/d/1_CYYN4uxCnfaUqgQPSCUD3Yeuad0-xBI/view?usp=sharing",
    transcriptLink:"https://drive.google.com/file/d/1KaLwhPgj573Y9yXYkXa9ZICXN8jM8_Vf/view?usp=sharing",
  },
  {
    title: "BACCALAURÉAT SCIENCES ET TECHNOLOGIES DE L'INDUSTRIE ET DU DÉVELOPPEMENT DURABLE (STI2D)",
    school: "Lycée Jules Garnier",
    start: "2016",
    end: "2018",
    details: [
      "Approfondissement en sciences industrielles et développement durable.",
      "Projets technologiques et développement durable.",
    ],
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXR1ZXJ2OWZ4eGJlbGJ2ZXBxNXM2Yzh5am44NWN4cHE0eWl2M2F1diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduUGL2JaSK7oS76/200.webp", // Écologie / tech
    diplomaLink: "https://drive.google.com/file/d/12irhTl7OSRp6AeWePUQb6xxCj7PiWEFg/view?usp=sharing",
    transcriptLink:"https://drive.google.com/file/d/1W7H3C3JP4LytHkNEnAm1c0bcUnXisAwJ/view?usp=sharing",
  },
];


function FormationTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const activeFormation = formationsData[activeIndex];

  return (
    <div style={{ maxWidth: 700, margin: "auto", fontFamily: "Arial, sans-serif", overflowX: "hidden" }}>
      <nav
        role="tablist"
        aria-label="Formations"
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 20,
          flexWrap: "wrap",
          borderBottom: "2px solid #ddd",
          justifyContent: "center",
        }}
      >
        {formationsData.map(({ title }, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`formation-panel-${i}`}
            id={`formation-tab-${i}`}
            onClick={() => setActiveIndex(i)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: i === activeIndex ? "#007bff" : "transparent",
              color: i === activeIndex ? "#fff" : "#007bff",
              border: "none",
              borderBottom: i === activeIndex ? "4px solid #0056b3" : "4px solid transparent",
              borderRadius: "4px 4px 0 0",
              fontWeight: i === activeIndex ? "700" : "500",
              transition: "all 0.3s ease",
              minWidth: 180,
              textAlign: "center",
            }}
          >
            {title}
          </button>
        ))}
      </nav>

      <section
        id={`formation-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`formation-tab-${activeIndex}`}
        style={{
          display: "flex",
          flexDirection: "column", // par défaut empile verticalement (mobile)
          gap: 20,
          alignItems: "center",
        }}
      >
  <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
    {activeFormation.logo && (
      <img
        src={activeFormation.logo}
        alt={`Logo de ${activeFormation.school}`}
        style={{
          width: 80,
          height: 80,
          objectFit: "contain",
          borderRadius: 8,
        }}
      />
    )}
    {activeFormation.gif && (
      <img
        src={activeFormation.gif}
        alt={`Illustration pour ${activeFormation.title}`}
        style={{
          width: 100,
          height: 100,
          objectFit: "cover",
          borderRadius: 8,
        }}
      />
    )}
    
  </div>
  <div style={{ textAlign: "left", width: "100%" }}>
    <h3 style={{ margin: "10px 0" }}>
      {activeFormation.title} – {activeFormation.school}
    </h3>
    <p style={{ fontStyle: "italic", margin: "0 0 10px" }}>
      <time dateTime={activeFormation.start}>{activeFormation.start}</time> –{" "}
      <time dateTime={activeFormation.end}>{activeFormation.end}</time>
    </p>
    <ul style={{ margin: 0, paddingLeft: 20 }}>
      {activeFormation.details.map((detail, i) => (
        <li key={i} style={{ marginBottom: 6 }}>
          {detail}
        </li>
      ))}

    </ul>
      {(activeFormation.diplomaLink || activeFormation.transcriptLink) && (
        <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
          {activeFormation.diplomaLink && (
            <a
              href={activeFormation.diplomaLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: 4,
                fontWeight: "bold",
              }}
            >
              Voir le diplôme
            </a>
          )}
          {activeFormation.transcriptLink && (
            <a
              href={activeFormation.transcriptLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: 4,
                fontWeight: "bold",
              }}
            >
              Voir le relevé de notes
            </a>
          )}
        </div>
      )}


  </div>
</section>

    </div>
  );
}

export default FormationTabs;
