import React, { useState } from 'react';

function ProjetTabs({ tabs, renderContent }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <ul style={{ display: 'flex', gap: '1rem', padding: 0, listStyle: 'none', borderBottom: '2px solid #007BFF' }}>
        {tabs.map(tab => (
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
        {renderContent(selectedTab)}
      </div>
    </div>
  );
}

export default ProjetTabs;
