import React, { useState } from 'react';
import '../cardTabs.css';

function ProjetTabs({ tabs, renderContent }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div style={{ marginTop: '2rem' }}>
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
