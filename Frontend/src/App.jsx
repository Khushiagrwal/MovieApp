import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Component/Header';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Logout from './Pages/Logout';
import SearchBox from './Component/SearchBox';
import Watchlist from './Component/Watchlist';
import { WatchlistProvider } from './Pages/WatchlistContext';

function App() {
  return (
    <WatchlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/search" element={<SearchBox />} />
          <Route path="/watchlist" element={<Watchlist />} />

        </Routes>
      </Router>
    </WatchlistProvider>
  );
}

export default App;
