import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.header') && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className='header'>
      <div className="header-logo">
        <h1>MR</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className={`header-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/#home" smooth={true} duration={500}>Home</a>
        <a href="/#about" smooth={true} duration={500}>About</a>
        <a href="/#projects">Projects</a>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={`header-sm ${menuOpen ? 'open' : ''}`}>
        <a href="https://github.com/MithunRR" target='blank'>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mithun-r-r/" target='blank'>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/mithun_r_r/" target='blank'>
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
