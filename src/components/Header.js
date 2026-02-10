import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header({ signOut, user }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section" onClick={() => navigate('/')}>
          <img
            src="/logo12.png"
            alt="CoHub v2 Logo"
            className="logo"
          />
          <span className="logo-text">CoHub v2</span>
        </div>
        <nav className="nav">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/client-signup')}>Client Sign Up</button>
          <button onClick={() => navigate('/provider-signup')}>Provider Sign Up</button>
          {user && (
            <>
              <span style={{ color: 'white' }}>Welcome, {user.username}!</span>
              <button onClick={signOut} className="btn-signout">Sign Out</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;