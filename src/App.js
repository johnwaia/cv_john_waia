import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormationTabs from "./formations/formation";
import Experiences from './experiences/experiences';
import Competences from './competences/Competences'; 
import Projets from './projet/project';
import WelcomePopup from './WelcomePopup';
import SoftSkills from './softSkill/softskills'; 
import Interests from './centreInteret/centreInteret';
import { softSkillsList } from './softSkill/softskillList';
import Description from './Description';
import Contact from './Contact';
import Stats from './Stats/stats';

import { Input, Ripple, initMDB } from "mdb-ui-kit";
initMDB({ Input, Ripple });

const tabs = [
  'Description',
  'Formations',
  'Compétences',
  'Expériences',
  'Centres d’intérêt',
  'Soft Skills',
  'Langues',
  'Projets',
  'Consultations',
];

const tabTooltips = {
  Formations: "Mon parcours académique",
  Projets: "Consultez mes projets",
  Compétences: "Voir mes compétences techniques",
  Description: "Apprenez-en plus sur moi",
  'Expériences': "Découvrez mon parcours professionnel",
  'Centres d’intérêt': "Mes passions et loisirs",
  'Soft Skills': "Mes compétences interpersonnelles",
  'Langues': "Mes compétences linguistiques",
  'Consultations': "Statistiques de consultation du CV"
};



function App() {
  const [message, setMessage] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Description');
  const [showWelcome, setShowWelcome] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [visitCount, setVisitCount] = useState(0);
  const [visitorRank, setVisitorRank] = useState(null);
  const filteredTabs = tabs.filter(tab => 
    tab.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      toast.info(
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWludjk1eHEzbTh4bjM4dHI3a3BkdnRxdDF0d3l3cDl4NjNodTg4dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Sg58K9YM5nuOW5ONMd/200w.webp"
            alt="Moon"
            style={{ width: '50px', marginRight: '10px' }}
          />
          <span>Il va faire tout noir 🌙</span>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  }, [darkMode]);

  useEffect(() => {
    // Simule une API ou stockage local
    const storedVisits = parseInt(localStorage.getItem('cvVisitCount') || '0', 10);
    const newCount = storedVisits + 1;
    localStorage.setItem('cvVisitCount', newCount);
    setVisitCount(newCount);
    setVisitorRank(newCount);
  }, []);

  const TabContent = () => {
    switch (activeTab) {
        case 'Description':
          return <Description />;

        case "Formations":
              return (
                <div>
                  <h1 style={{marginBottom: 30 }}>Parcours de Formation</h1>
                  <FormationTabs />
                </div>
            );

        case 'Compétences':
          return <Competences />;

        case 'Expériences':
          return <Experiences />;

        case 'Centres d’intérêt':
            return <Interests />;

        case 'Soft Skills':
          return <SoftSkills softSkillsList={softSkillsList} />;

        case 'Langues':
          return (
            <ul className="langue-list">
              <li className="langue-item">
                <span className="langue-icon">🇫🇷</span>
                <span>
                  Français : <span className="langue-niveau">Courant</span>
                </span>
              </li>
              <li className="langue-item">
                <span className="langue-icon">🇬🇧</span>
                <span>
                  Anglais : <span className="langue-niveau">B1</span>
                </span>
              </li>
            </ul>
          );

        
        
          case 'Projets':
          return <Projets />;
        
        case 'Consultations':
          return <Stats />;

        default:
        return null;
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <button 
        onClick={() => {
          const prevIndex = tabs.indexOf(activeTab) === 0 ? tabs.length - 1 : tabs.indexOf(activeTab) - 1;
          setActiveTab(tabs[prevIndex]);
        }}
        className="nav-arrow left-arrow"
        aria-label="Onglet précédent"
      >
        &#8592;
      </button> 
      <button 
        onClick={() => {
          const nextIndex = tabs.indexOf(activeTab) === tabs.length - 1 ? 0 : tabs.indexOf(activeTab) + 1;
          setActiveTab(tabs[nextIndex]);
        }}
        className="nav-arrow right-arrow"
        aria-label="Onglet suivant"
      >
        &#8594;
      </button>
      {showWelcome && <WelcomePopup onClose={() => setShowWelcome(false)} />}
      <header className="navbar">
        <div className="photo-container">
          <img src= {darkMode ? "https://us.123rf.com/450wm/themess/themess2310/themess231001021/215716025-illustration-vectorielle-d-un-sweat-%C3%A0-capuche-en-silhouette-noire-sur-un-fond-blanc-propre-capturant.jpg?ver=6" : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAKChAIEAgJCAgJCAoHBwkJBhsICQcKIB0iIiAdHx8kKDQsJCYlJx8fLTEtMSkrLi4uIyszODMsNygtLisBCgoKDQ0OFQ0OFSsZFiUrKy03Kys3KystLSsrKystKystKys3Ky0rKysrKysrKystKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEEQAAEDAgQDBQYEBAQFBQAAAAEAAhEDIQQSMUEFUWEGcYGRsRMiodHh8DIzQsEjNHLxBxQkdBVSYnPCQ2SCg5L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAAhEQEBAQACAwACAwEAAAAAAAAAAQIRIQMSMUFREyIyFP/aAAwDAQACEQMRAD8A9ijW36nxaBqVBw+Fz0ROf9T/AFKifjqVkIR6SOSYj72UyI3EQokwPuyQBqGNxpAXN9p6jRQc5xsAXCNCVuY5wDJ21Mary7trjjn9g2s40iMz2ZpgrU/ZxzGPxrqrjLiRJgTICzqj+f8AdSrOk+KA4pNE5yj87pj37wmOn3KAcnfpCUpA+lrJiUEkOXRRdP7JE/M9Up+qYOD9ynm/moxdOUgKx9+kK1SrFpzAkG0bKiCisP0ukb1HsXxKnVpCiakVy4lwLvxLsWmeo1svEOF412HqCoDDmuB8F61wDiQxdBtQPkmzhvmSn6Fa8fLvTxf4a7J2/GJUzp4JkGQoETsiFRP3zQE8IPzR/wCzreCSnhNKv+zrD4JlqFWtz55nD4pj3RrKcf8AlU9U0/VZJBw52vysFB3PbTWym4+P7IVSwO3K8pBhdqMaKFAnNfKSY1heNcSxBq1HPkmXGPekkLq/8QcY/wDzfsg8imKbQ5uaxK4io6f76LV/TWQX3nvQXH76qdTSZQXIaOSkEgmI+5QCP7JiU5b07k0bIIxOyaCpkdNk0eqAXzSKR5fYThBIhFafmbKCk0/JBrdF1xf5yux7CYpzMV7EGQ8GxuAuJpG/xC63sMx/+dbVaAWw4PJOjVmm9Yp6Db4okfRCpOsO4A33RbeCGTER5QhlFKGf3TCeF0q/7Ov42ST4SP4v+zrd8QknCrV2P9byN91E6qTdD0c+epkqDjP0WaRj3jmq+KflYTrAJR3Hp06LK49iTQwz6kj3WkxP4gnA8e7U4v2uMqEnSo4DoFzr3XPKbK/xev7Wu9+md7nLMcU61EXnfwUDe31TkSrFHDk38RKVvDeZaAGz+yKykY0vM9yt08NF/AKxToE7byeqndrZ8bMfS8bXsoGl0nktp2Dm8SZA5hHp4IR+EG10v5I1/Dy5/wBiZ52sl7EzEHyXSNwgF8vwTOwg5Xmfw3Kz/Mf/ADsFuGtMIT6UfsugdhwB4KnWw2+qc8g14emO5seUpAq9UoR9yq1anCpNcufWOCpfTVdJ2UxpoYtoH6z7MiJJXNUjeei0MBVLKragdlcHNcHTAatVh7jhicskEGASIVgd23JU+F1faYenUmc1NpJzZgSro6IInftbqoH9oRD3oZTAuDZeoZJnC1hB0bZJPgrueOeFrAlJOFWnNuuZ021ukefhGkJzv/W+L31UTb9likiT03XI/wCID3swZc0SCQHwLtC67f6rD7RUm1cO6i8wx7HA7krWfoeE4m56kqo/wWvxXDClWcwGQD7vOFnZOf8AZFaiFClmd9latOjA06dULBU99rgWV0D6qO66/HkMU1YpMgfZTtYT5ckdlLp3qNrozE6bPTkjMYPsWSawomXp0WFIiWfcWQnMjzViFFzfSUjU6jeu0BVKrFpVKU+SqVaP3KJS1Gc9soNbDy3bSeqvGndIMVppzby5/LldljorVHl4I/EaABDwNRBS4bQ9rWZSgkvqtYNyuiXmcuTU4r1rshUJ4fSYSXFlNrQY2W8O/wCKzOD4f2NAUp/COUGVpA/cpxhL70TEfSyU+mijPogLGA/McOeHrDoklw/80/8AYq+KS1CrU20/U/fqoOP0sp6//t4vylQdbbu7lmkib/E66qjj2yw2BMGBCvOE26QOqp4r8J7igPEe00/5ypIj3yAOQWKRmMdRA1XQdsGZeIVG/wDUHG8ysbCMmqN73T1W89tCjRyNA0tdKrWbTEk32buiYqp7JkgX0Cy2Yd9Yl9yZtO65+Oe66+bOosDiJnSBPfCOziuXVpN7mNFT/wCF1dA0cyZhM7h1Vv6O+NE/XA9vJHR4TFMqxD2yRYTdaAoy2baTquLp4ao0zBBm0GLrouF1nBkOcXECDJkqes5iuN6vVaLaAO/XVSFAfGOiQr9NoVWviSAYMbjvWf6rdh46uylq8A6RqVz2N4mXnK0ZWzAduUsc19RxJJMutfRV6GALjchonnKpM4ndcu97vUCdiag/UTyMwrGGxpkNfcHQ6Fqsu4aHCM8ujwVarw0tH4s24tC1ziscb+reNp5qJdrlGYdyj2cZONpRq2qHtE2clgCSx1B3/I7L0VnshTz8SpDTLnqExaIWsddJeT9vXKEEDuHgrAb9zqq9AW+AvsrG31VEy8OuqjqpGygXXjLaJlMlrh35p/7FUC6SXDvz/wD6qiScZabjHX3nHTqhHn4joiuMWmfecfGUN56+SzQjPoq2IuI0MEdyOSI+iBWuPokbyDtzhnMx7n5HBjmtIdFnFYGBE1RbeTZegduKQq1msi7aRJ5FcPg6RbiCNMk7Ja1zzFs444q7Xo+0gESNUjUFNsZdAAABclWQLfRVcZRcRbXbouXnnp2ScTlB+OyiS9rOTYzuQm8VYbe0qyTH5dpT4XDU/ZPpPtiXg5H1BZZ1LBvNQU4ygOgv/S0KucZ4S1vXLSNSTB13luVwR6NQtdHM+at4/wBnWyhrH52Ma0VWsyyVWdMNY4DO0xYfiCxuRbx2/lea0ls+SpYt5FvBXGP93wVHF6zBNwTZRi2p0pkfqJgIdXHMpHJlqHewyStHDNmoKzqXtmAjKzNAYqHHaBqVzXYx+R4Bc0ty5SunGZfrk8ls+BtxjH3GeneBmEiVYpVjoYNpBFwQnwtOnTwhpOIqVaxnI0TkVfCYZzTqcmwIuFnUyM3V+rtJgzTFyCDZWOxTQOIibZs1Jlruch02wR5I/AW+xxXtovTxLXN5QjGuqz5Mc16gwQET5SUMO0Oxgqc2+i6XKlP1UTry/dOok3+l0yW+GfnjrTqJJuE3xI/oeEk4VaThfl7zt53Q3DxHdqiO3295+0boLu+LrIRJ8dfFBqH9+9FMc77WQqg9YFkg4ntYP9SL602+AXJGjlrPfFjlg811faioDiy02DabWjmSubxMZhyIUNf6duf8RFpRcs7ITOU72Vlgt6qGunTjuAPozyPeEmUSDs3Yw26suCiPuyea1ch1oYLe+6NTsqzR+o3O3RGr2B7pKBRNtNTIRrXImZFhptytKDX7lcoskRGyrYkRtI2spqWdK+GfkfzYTcbKxXpyMzXEA3LZlpVSmf4kbRPergFtdlT246S9eVZlHpvOmqMGRfwRGs36JnHaDYTOxWbWvWQI6jvlWqDPfFoz1GjxVXcRzvZWqdWCObXNfoqT4hr69HYIAG4aAiD4xKEx2YB2zgHDaQiA+i7I8+n28Pim2+KfpPKBCYjrvyTJa4T/ADLR/wBDz0SUeEfzLf6HpJwq1Kok+Ljp1QiOsqZ/D4v9SoRtvqs36EHD5oTx5aorrb/3Qzc9I8kjcJ2qZlx1x7r6bXC265rFsyusSRJ8F3Xa/BmoxtYCTSLg618pXFYyn7k8iAVHf+uXX4+8cA0zf6Kwx0eduqrM794PNEB9Z1UNzt0eO9LUzvOySE0meYiBbdHpnfZTi6viGXDT+o37kiwMg2Uca8m4uQZCzazxU/MzgjRodlaqevLF1w3KWIaBMTa14VavWDnclRoDO2BUIaLAE5iFSxBBfDqjnQY912WETP4Zvk/LUeACD1Hkj5YWXhnEkC+RpESZJWm05gs2cdN5vPZ/ldCqPv4WspEwgVXXSg1eDUzedIN1bptHsyQJeRI5qkHffNa/CcIa1ZtOPdlpfya1Vkc1v2u6oCGNG4pNB56I4sPIITfhAHeigW8PJdkcNL5QokX1UvlzUHapkucJ/mW/0v8ARJNwi2Jb/S+Uk4VaTz0n8XqVAndTqC3i4fEoTrW63vZYoM4X8pUHFSUI+aDVMS0OEES02IixXP4vgFF+YjOJBIbmhrXLpKw6Kq8fRKzluWz48te3K8sIgte5h2upgq72hoCljHgCA9/tOl1nh0a+F1z+Sduvxa6WA7zhQqYmBE9TdCq1crCQJO11jVqpMkug69VjOOVteTiNCvjwLC5juAWdXqPqmAfdMRGyHRb7QzfL3arRoMDBAA7zcqnrMpe139AwzywkEGcsCG2cVXxDDOfKQZm4hantDfoLWQXEuFyCCOSOT9Ip4fHFjg11xYSNlo0sWDcGRvdZdWgC6R7p5bEqtmLH/wDLzRcTTM8ly6bPI1m0oNU/RAwVfMyN48lN7vVTmeKrd8xo8CwoxOJbQcJZDqjxOUkBdxgMGzDiGMyzYkuklc12NofxKlcizabadO1w4rraf3ZdPjji3rtYA9Bupg/W6gP2k9FMNVUjk+qif2un/soaeUIJb4T/ADLf6Xx5JJcHP+pb3OjySThNOoIMdXEeZQnE/GNdUSs69zeXAnndVyZ36hZoOeSZw28VHNfpCRcfgkYdVlvS6qPGvkVccdutlVrM3B+SRyuB7Y2xnfRbJ0krBLpt1BW724kYlvM0QQfFcyKkmZ3Hep7jp8d4i5U95njOt1Qq4a/WZO9lZbWPgLaqTHAiTc/FS5sWslUG0Xl2WcrR+G2y0sPgi4fmTuIF0NxGqmzFBmh77wte3LWJJexX8OOYfxTrBvqmq8OAH4zpJuhnijdwZAt7yg7iHtJGgjdyFfbDPxOGINnmQbdVBuHJjNcRe11ac8E6pFwj4BP2rm1mWpUGhotpFlOZOqA2rtO/enLpMdQBA2Sk7Z1eunoXZ3DexwbJBD6w9s6bkArZpC2qDhmjI236GiOVlZYPRdGZ05am35DRFCECp5vRaI6gTdSJ8tlA6fFBLfCP5pnc/wAbJJuEfzTO5+2tkk4VaWI1id3HleVXPfvCPivx+cKqVmg5OygXHx+CRd63VTGY2nh2mo+q2m0Xu+CUoay429Vk8a41SwNI1HvmB7tNpl7yuW472xdUJo0Jp05INT9Tlx2KqPxD/ee54mXOLpLitccTmnO/jY43xlvEnjENpvphjTSIc6SVhVnFrtfdPSYKOwZW5BpKHXZmb1i3RQt5rpzn+qTakiJmY2SFWNL3hUGPLTlOoKmcRG838Aj1E1wumoSY1tKepTLxPgNlnHFe9PMQFYo4oxlJvzJsl6cH/Jyl/liSBl0mUzqRnTLzR24sWAMkiCNYQcRiIna5A3un2OZA6jsvgLKIrSNfgqtStJ5oZqnu26LUwxfIvipbW91PDP8AezTobXtKzmPLnR53WhTGUDuB0Ss4KXnt02A7aVaLxRq0WVWCGtez3HZV2nCuLUsdS9rTfcGH03Wexy8ir+8J3mRdWcJjX0HCsyo6m+xs6FTPcT1OHsTXKY+o3XJcE7VsqtFOsfZVYAzj8LiuopVg9uYODwRYh0ghaYFn1SPh1UJ9U9v2QFvhB/1TP/mPgkm4T/N0+9/oknCrRxR96/N2mkSs3GY1lBud9VrG9XQSsXth2lfhcU/BsYGvY1pNQ31XAY/iVSs4uc9z3Hm6QEevIdZxjtmGyyi2Tp7Ry4viHE6mJcXPqOeZJEukBVKj53vugk3ha44Cbn2nfZGptho8yq7WyQNyQrpbAhR8uvwv4pz2DvE7J3D0TH8Y7r80WPG3JRroyy8YyPf33VImy2sXRlhO8LFcwidr+ari8xDySymab+NlMOIOqHoU8qiXI7KsGbzOqatVzWk89N0A/wB7pH6JcD2KfrdMP7J4n+6UbeSZDYYXnwFtFeJgeHJAwlK08hMSjVD6qWvq2eoY/hlDmB4FTcYHw0QifRb8bGxqT7+IlbXDOMVMM4EVHACP1SFgsP7FHa633Krwk9M4V2hp4gBjiKNWAD70NeVtZpHMWi+q8foYgt3tPkug4V2jqUIaX+1ojVjrkBLgPS+D/wA3T73x1EFJZ3ZXi9LF4qmGvDanvH2bne8bJJByn+IRjjNW/wD6VEjquSru+QvomSWoSuTJTkX8EkkwJRPvjvjRXyJHgnSXP5nT4FV4h4RgN/sJJKOnRn6kWyI1Gmiz8Rg9wLajmkklm8HqSxQfQItoZhQdSI2TJLolrk1Ijk6dyjl+adJb5TsSbTJRqNCSnSWNVTMi2xmUR53UXC/00SSWFKThb1QHG/wTJK3jR8ibRI9FLbldJJUSO08/kVNr4OsXSSQI6TsPVP8AxfDXI/jkGHdEkkkjf//Z" } alt="John Waia" className="profile-photo" />
        </div>
         <div className="search-bar-container" style={{ padding: "1rem", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-bar"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              border: "1px solid #ccc",
              width: "60%",
              maxWidth: "500px"
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
        </div>
       
        <nav className="nav-links">
          {filteredTabs.map((tab) => (
             <button
                key={tab}
                className={`btn btn-secondary nav-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title={tabTooltips[tab] || `Onglet ${tab}`}
              >
                {tab}
            </button>
          ))}
         
        </nav>
        <>
          <div style={{ margin: '1rem', display: 'flex', alignItems: 'center' }}>
            <input
              className="custom-switch"
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              id="customSwitch"
            />
            <label
              htmlFor="customSwitch"
              style={{ color: 'white', marginLeft: '1rem', fontSize: '1rem' }}
            >
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>


          {/* Afficheur de notifications */}
        <ToastContainer />
      </>
      </header>
      
      <main className="main-content">
        <TabContent />
      </main>

      <Contact />

    </div>
  );
}

export default App;
