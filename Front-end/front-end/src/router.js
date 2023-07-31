import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Alterado: importe 'Routes' em vez de 'Switch'

import Home from './pages/Home';
// Importe outras páginas conforme necessário

const RoutesApp = () => {
  return (
    <Router>
      <Routes> {/* Alterado: Use 'Routes' em vez de 'Switch' */}
        <Route path="/" element={<Home />} /> {/* Alterado: Use 'element' em vez de 'component' */}
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
};

export default RoutesApp;
