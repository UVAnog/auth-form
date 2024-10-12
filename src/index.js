import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

global.fetch = (url, options) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        json: () => Promise.resolve({ message: "Login successful! Send Nolan an email at nolanharris.dev@gmail.com" }),
      });
    }, 1000); // Simulate a 1-second delay
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
