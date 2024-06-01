import React from 'react';
import { useWatchlist } from '../Pages/WatchlistContext'; // Adjust the import path as necessary

function Watchlist() {
  const { watchlist } = useWatchlist();

  return (
    <div className='watchlist-page'>
      <h1>Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist</p>
      ) : (
        watchlist.map((movie, index) => (
          <div key={index} className='movie-info'>
            <h2>{movie.Title}</h2>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;
