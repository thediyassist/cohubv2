// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <img
          src="/logo12.png"
          alt="CoHub v2 Logo"
          className="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <nav className="nav">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/client-signup')}>Sign Up (Client)</button>
          <button onClick={() => navigate('/provider-signup')}>Sign Up (Provider)</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;