import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 🔧 CORRECTION : bon endpoint
const notifyVisit = async () => {
  try {
    const sessionId = sessionStorage.getItem('session_id') || crypto.randomUUID();
    sessionStorage.setItem('session_id', sessionId);

    await fetch('https://visitor-notifier.onrender.com/visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sessionId }) // 🔧 Body requis
    });
    console.log('Notification envoyée au backend');
  } catch (error) {
    console.error('Erreur lors de l’envoi de la notification :', error);
  }
};

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

reportWebVitals();
