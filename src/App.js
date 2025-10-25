import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Templates from './components/Templates';
import Services from './components/Services';
import PortfolioBot from './components/PortfolioBot';
import PortfolioViewer from './components/PortfolioViewer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio-bot" element={<PortfolioBot />} />
          <Route path="/portfolio/:username" element={<PortfolioViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;