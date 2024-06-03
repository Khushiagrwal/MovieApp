import React from 'react';
import { useWatchlist } from '../Pages/WatchlistContext'; // Adjust the import path as necessary
import Header from './Header';
import Footer from './Footer';

function Watchlist() {
  const { watchlist } = useWatchlist();

  return (
    <>
      <Header/>
      <div className='watchlist-page'>
        <h1>Watchlist</h1>
        {watchlist.length === 0 ? (
          <p className="no-movies">No movies in your watchlist</p>
        ) : (
          watchlist.map((movie, index) => (
            <div 
              key={index} 
              className='movie-info'
              style={{ backgroundImage: `url(${movie.Poster})` }}
            >
              <h2>{movie.Title}</h2>
              <p><strong>Year:</strong> {movie.Year}</p>
              <p><strong>Genre:</strong> {movie.Genre}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Actors:</strong> {movie.Actors}</p>
              <p><strong>Plot:</strong> {movie.Plot}</p>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Watchlist;
