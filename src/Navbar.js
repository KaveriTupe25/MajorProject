import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.jpg'; // Add your logo here

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      // Dummy search results for demonstration
      const results = [
        'Insulin Dosage Calculator',
        'Understanding Insulin Types',
        'How to Calculate Insulin Needs',
        'Contact Endocrinologists Near You',
      ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
        <div className="logo-container">
          <img src={logo} alt="Smart Insulin Calculator Logo" className="logo" />
          <span className="app-title">Smart Insulin Calculator</span>
        </div>

        <div className="nav-actions">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li>
            <a href="#about">About</a>
            <ul className="dropdown">
              <li><a href="#team">Our Team</a></li>
              <li><a href="#vision">Our Vision</a></li>
            </ul>
          </li>
          <li><a href="#calculate">Calculate</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#login">Login</a></li>
          <li>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
