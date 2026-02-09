// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to CoHub v2</h1>
        <p>Get expert help with DIY projects, home maintenance, and more - from anywhere.</p>
      </section>

      <section className="for-clients">
        <h2>For Clients</h2>
        <p>Need help with a home project or technical question? Connect with expert providers via video chat.</p>
        <ul>
          <li>✓ Home maintenance guidance</li>
          <li>✓ Technical support</li>
          <li>✓ Social media coaching</li>
          <li>✓ Expert guidance at your fingertips</li>
        </ul>
        <button onClick={() => navigate('/client-signup')} className="btn-primary">
          Sign Up as Client
        </button>
      </section>

      <section className="for-providers">
        <h2>For Providers</h2>
        <p>Share your expertise and earn money on your own schedule.</p>
        <ul>
          <li>✓ No travel required</li>
          <li>✓ Work from anywhere</li>
          <li>✓ Set your own rates</li>
          <li>✓ Annual membership: $350</li>
        </ul>
        <button onClick={() => navigate('/provider-signup')} className="btn-primary">
          Sign Up as Provider
        </button>
      </section>
    </div>
  );
}

export default Home;