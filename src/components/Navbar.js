import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg px-3 shadow 
      ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-primary'}`}
    >
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          EditIQ – Advanced React Text Utility Application
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>

          {/* Dark mode switch */}
          <div className="form-check form-switch text-light">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
            />
            <label className="form-check-label">
              Dark Mode
            </label>
          </div>
        </div>

      </div>
    </nav>
  );
}
