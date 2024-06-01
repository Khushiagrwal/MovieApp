// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { useWatchlist } from '../Pages/WatchlistContext'; // Adjust the import path as necessary

// // function SearchBox() {
// //   const [user, setUser] = useState("");
// //   const [movieInfo, setMovieInfo] = useState(null);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();
// //   const { addToWatchlist } = useWatchlist();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(user);
// //     if (user.trim() !== "") {
// //       fetchMovieInfo(user);
// //     }
// //   };

// //   const fetchMovieInfo = async (movieName) => {
// //     try {
// //       const response = await axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=fc1fef96`);
// //       if (response.data.Response === "True") {
// //         setMovieInfo(response.data);
// //         setError(null);
// //       } else {
// //         setError(response.data.Error);
// //         setMovieInfo(null);
// //       }
// //     } catch (error) {
// //       setError("Error fetching data from API");
// //       setMovieInfo(null);
// //     }
// //   };

// //   return (
// //     <div className='main-page'>
// //       <div>
// //         <div className='input-box'>
// //           <form onSubmit={handleSubmit}>
// //             <label>Movie Name</label>
// //             <input 
// //               type="text" 
// //               placeholder='Enter movie name' 
// //               value={user}
// //               onChange={(e) => setUser(e.target.value)} 
// //             />
// //             <div className='submit-btn'>
// //               <button type='submit'>Search</button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>

// //       {error && <div className='error'>{error}</div>}

// //       {movieInfo && (
// //         <div className='movie-info'>
// //           <h2>{movieInfo.Title}</h2>
// //           <p><strong>Year:</strong> {movieInfo.Year}</p>
// //           <p><strong>Genre:</strong> {movieInfo.Genre}</p>
// //           <p><strong>Director:</strong> {movieInfo.Director}</p>
// //           <p><strong>Actors:</strong> {movieInfo.Actors}</p>
// //           <p><strong>Plot:</strong> {movieInfo.Plot}</p>
// //           <img src={movieInfo.Poster} alt={`${movieInfo.Title} Poster`} />
// //           <button onClick={() => addToWatchlist(movieInfo)}>Add to Watchlist</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default SearchBox;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useWatchlist } from '../Pages/WatchlistContext'; // Adjust the import path as necessary

// function SearchBox() {
//   const [user, setUser] = useState("");
//   const [movieInfo, setMovieInfo] = useState(null);
//   const [error, setError] = useState(null);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const navigate = useNavigate();
//   const { addToWatchlist } = useWatchlist();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (user.trim() !== "") {
//       fetchMovieInfo(user);
//     }
//   };

//   const fetchMovieInfo = async (movieName) => {
//     try {
//       const response = await axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=fc1fef96`);
//       if (response.data.Response === "True") {
//         setMovieInfo(response.data);
//         setError(null);
//       } else {
//         setError(response.data.Error);
//         setMovieInfo(null);
//       }
//     } catch (error) {
//       setError("Error fetching data from API");
//       setMovieInfo(null);
//     }
//   };

//   const handleAddToWatchlist = (movie) => {
//     addToWatchlist(movie);
//     setPopupVisible(true);
//     setTimeout(() => setPopupVisible(false), 3000); // Hide popup after 3 seconds
//   };

//   return (
//     <div className='main-page'>
//       <div>
//         <div className='input-box'>
//           <form onSubmit={handleSubmit}>
//             <label>Movie Name</label>
//             <input 
//               type="text" 
//               placeholder='Enter movie name' 
//               value={user}
//               onChange={(e) => setUser(e.target.value)} 
//             />
//             <div className='submit-btn'>
//               <button type='submit'>Search</button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {error && <div className='error'>{error}</div>}

//       {movieInfo && (
//         <div className='movie-info'>
//           <h2>{movieInfo.Title}</h2>
//           <p><strong>Year:</strong> {movieInfo.Year}</p>
//           <p><strong>Genre:</strong> {movieInfo.Genre}</p>
//           <p><strong>Director:</strong> {movieInfo.Director}</p>
//           <p><strong>Actors:</strong> {movieInfo.Actors}</p>
//           <p><strong>Plot:</strong> {movieInfo.Plot}</p>
//           <img src={movieInfo.Poster} alt={`${movieInfo.Title} Poster`} />
//           <button onClick={() => handleAddToWatchlist(movieInfo)}>Add to Watchlist</button>
//         </div>
//       )}

//       {popupVisible && <div className='popup'>Movie added to watchlist successfully!</div>}
//     </div>
//   );
// }

// export default SearchBox;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useWatchlist } from '../Pages/WatchlistContext'; // Adjust the import path as necessary

function SearchBox() {
  const [user, setUser] = useState("");
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  const { addToWatchlist } = useWatchlist();

  useEffect(() => {
    if (user.trim() !== "") {
      fetchSuggestions(user);
    } else {
      setSuggestions([]);
    }
  }, [user]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=fc1fef96`);
      if (response.data.Response === "True") {
        setSuggestions(response.data.Search);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim() !== "") {
      fetchMovieInfo(user);
    }
  };

  const fetchMovieInfo = async (movieName) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=fc1fef96`);
      if (response.data.Response === "True") {
        setMovieInfo(response.data);
        setError(null);
      } else {
        setError(response.data.Error);
        setMovieInfo(null);
      }
    } catch (error) {
      setError("Error fetching data from API");
      setMovieInfo(null);
    }
  };

  const handleAddToWatchlist = (movie) => {
    addToWatchlist(movie);
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div className='main-page'>
      <div>
        <div className='input-box'>
          <form onSubmit={handleSubmit}>
            <label>Movie Name</label>
            <input 
              type="text" 
              placeholder='Enter movie name' 
              value={user}
              onChange={(e) => setUser(e.target.value)} 
            />
            <div className='autocomplete'>
              {suggestions.map((movie, index) => (
                <div key={index} className='suggestion' onClick={() => setUser(movie.Title)}>
                  {movie.Title}
                </div>
              ))}
            </div>
            <div className='submit-btn'>
              <button type='submit'>Search</button>
            </div>
          </form>
        </div>
      </div>

      {error && <div className='error'>{error}</div>}

      {movieInfo && (
        <div className='movie-info'>
          <h2>{movieInfo.Title}</h2>
          <p><strong>Year:</strong> {movieInfo.Year}</p>
          <p><strong>Genre:</strong> {movieInfo.Genre}</p>
          <p><strong>Director:</strong> {movieInfo.Director}</p>
          <p><strong>Actors:</strong> {movieInfo.Actors}</p>
          <p><strong>Plot:</strong> {movieInfo.Plot}</p>
          <img src={movieInfo.Poster} alt={`${movieInfo.Title} Poster`} />
          <button onClick={() => handleAddToWatchlist(movieInfo)}>Add to Watchlist</button>
        </div>
      )}

      {popupVisible && <div className='popup'>Movie added to watchlist successfully!</div>}
    </div>
  );
}

export default SearchBox;
