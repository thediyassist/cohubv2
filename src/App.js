// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ClientSignup from './pages/ClientSignup';
import ProviderSignup from './pages/ProviderSignup';
import ClientDashboard from './pages/ClientDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-signup" element={<ClientSignup />} />
        <Route path="/provider-signup" element={<ProviderSignup />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;