import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <h1>finsec lab</h1>
            </Link>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link 
                to="/vision" 
                className={`nav-link ${isActive('/vision') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/faculty" 
                className={`nav-link ${isActive('/faculty') || isActive('/students') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/papers" 
                className={`nav-link ${isActive('/papers') || isActive('/conferences') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Research
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/announcements" 
                className={`nav-link ${isActive('/announcements') || isActive('/institute-news') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/join-us" 
                className={`nav-link ${isActive('/join-us') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Join Us
              </Link>
            </li>
          </ul>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
