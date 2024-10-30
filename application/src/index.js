import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/navbar.css';
import './assets/css/hamburger.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <img id = "123"src={hagiangloop}></img> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
