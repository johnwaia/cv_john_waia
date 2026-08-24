import React, { useState, useRef, useEffect } from 'react';
import '../cardTabs.css';
import scrollWithinSection from '../scrollWithinSection';

function ProjetTabs({ tabs, renderContent }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const containerRef = useRef(null);
  const isFirstRender = useRef(true);

  // Quand on change d'onglet, on ramène le haut de ce bloc dans la zone visible
  // du panneau qui défile (la section CV), pour éviter de rester "perdu" plus bas
  // dans un scroll interne alors que le contenu affiché a changé.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollWithinSection(containerRef.current);
  }, [selectedTab]);

  return (
    <div ref={containerRef} style={{ marginTop: '2rem' }}>
      <div className="card-tabs-nav">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`card-tab-btn ${selectedTab === tab ? 'active' : ''}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="card-tab-panel" key={selectedTab} style={{ lineHeight: '1.8' }}>
        {renderContent(selectedTab)}
      </div>
    </div>
  );
}

export default ProjetTabs;
