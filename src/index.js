import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const notifyVisit = async () => {
  try {
      await fetch('https://visitor-notifier-production.up.railway.app/visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    console.log('Notification envoyée au backend');
  } catch (error) {
    console.error('Erreur lors de l’envoi de la notification :', error);
  }
};

// ⏱️ Appel automatique de notifyVisit dès que l'app démarre
const RootWithNotify = () => {
  useEffect(() => {
    notifyVisit();
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootWithNotify />);

// Facultatif : mesure des performances
reportWebVitals();
