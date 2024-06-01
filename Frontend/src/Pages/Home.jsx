import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Component/Header';
import SearchBox from '../Component/SearchBox';
import "../../public/Css/style.css"; // Import the CSS file

function Home() {
  const userId = localStorage.getItem('userId');

  return (
    <div className="home-container">
      <Header />
      <div className="home-header">
        <h1>Welcome to Movie Search</h1>
      </div>
      {userId == null ? (
        <Link to='/signup' className="home-button">SIGN UP</Link>
      ) : (
        <div className="search-box-container">
          <SearchBox />
        </div>
      )}
    </div>
  );
}

export default Home;
