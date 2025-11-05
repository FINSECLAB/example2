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
            <li className="nav-item dropdown">
              <span className="nav-link">연구소 소개</span>
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/vision" 
                    className={isActive('/vision') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    비전 및 미션
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/history" 
                    className={isActive('/history') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    연혁
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/research-areas" 
                    className={isActive('/research-areas') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    주요 연구 분야
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/location" 
                    className={isActive('/location') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    오시는 길
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">구성원</span>
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/faculty" 
                    className={isActive('/faculty') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    교수진/연구원
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/students" 
                    className={isActive('/students') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    대학원생
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">연구 실적</span>
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/papers" 
                    className={isActive('/papers') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    논문
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/conferences" 
                    className={isActive('/conferences') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    학회 발표
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">소식</span>
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/announcements" 
                    className={isActive('/announcements') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    공지사항
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/institute-news" 
                    className={isActive('/institute-news') ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    연구소 소식
                  </Link>
                </li>
              </ul>
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
