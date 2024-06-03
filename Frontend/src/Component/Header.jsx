import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/Images/logo.png';
import '../../public/Css/style.css';
import Watch from '../../public/Images/tag.png';

function Header() {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const clearUserIdFromLocalStorage = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  const handleLogout = () => {
    clearUserIdFromLocalStorage();
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (!userId) {
      navigate('/login');
    } else {
      navigate(`/search?query=${event.target[0].value}`);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
        <Link to="/" className="nav-link"><img src={logo} alt="Logo" className="logo" />OVIES</Link>
        </div>
        <nav className="nav">
        </nav>
        <form onSubmit={handleSearch} className="search-form">
          <button type="submit"  className="search-button">Search Movies</button>
        </form>
        {!userId && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            )}
            {userId && (
              <>
                <li className="nav-item">
                  <Link to="" onClick={handleLogout} className="nav-link">Logout</Link>
                </li>
                <li className="nav-item">
                  <Link to="/watchlist" className="nav-link"><img src={Watch} alt="Logo" className="watch" /></Link>
                </li>
              </>
            )}
      </div>
    </header>
  );
}

export default Header;
