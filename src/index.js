import React from 'react';
import ReactDOM from 'react-dom/client';
//Importaciones externas de estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FavoritosProvider from './context/FavoritosContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <FavoritosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritosProvider>
  </React.StrictMode>
);