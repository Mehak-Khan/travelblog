import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/navbar.css';
import './assets/css/hamburger.css';
import './assets/css/card.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
