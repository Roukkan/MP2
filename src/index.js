import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export {default as Navbar} from './components/navbar';
export {default as Home} from './components/home';
export {default as Aboutus} from './components/aboutus';
export {default as Sponsors} from './components/sponsors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
