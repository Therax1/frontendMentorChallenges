import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main';
import Features from './components/Features';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

