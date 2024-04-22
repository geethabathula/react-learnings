import React from 'react';
import ReactDOM from 'react-dom/client';
// import { UserContextProvider } from '../src/useContext/UserContext';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);