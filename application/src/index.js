import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/navbar.css';
import './assets/css/hamburger.css';
import './assets/css/card.css';
import './assets/css/blog_page.css';
import './assets/css/modal.css';
import './assets/css/contact_form.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
