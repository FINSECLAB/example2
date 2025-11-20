import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
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
                to="/news" 
                className={`nav-link ${isActive('/news') || isActive('/announcements') || isActive('/institute-news') ? 'active' : ''}`}
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
