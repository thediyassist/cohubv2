import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
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
    <Authenticator>
      {({ signOut, user }) => (
        <Router>
          <Header signOut={signOut} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client-signup" element={<ClientSignup user={user} />} />
            <Route path="/provider-signup" element={<ProviderSignup user={user} />} />
            <Route path="/client-dashboard" element={<ClientDashboard user={user} />} />
            <Route path="/provider-dashboard" element={<ProviderDashboard user={user} />} />
            <Route path="/admin-dashboard" element={<AdminDashboard user={user} />} />
          </Routes>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;