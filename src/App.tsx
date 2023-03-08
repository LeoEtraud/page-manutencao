import React from 'react';
import logo from './logo.svg';
import img from './assets/manutencao.png';

import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', maxWidth: '100%' }}>
    <img src={img} alt="Minha Imagem" style={{ width: '60%'}}/>
    </div>

  );
} 

export default App;
