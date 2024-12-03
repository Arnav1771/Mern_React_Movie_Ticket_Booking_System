// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieService from './MovieService';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import Booking from './Booking';
import Payment from './Payment';
import './Apps.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const popularMovies = await MovieService.getPopularMovies();
    setMovies(popularMovies);
  };

  const handleSearch = async (searchTerm, filters) => {
    const searchResults = await MovieService.searchMovies(searchTerm, filters);
    setMovies(searchResults);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchForm onSearch={handleSearch} />
                <MovieList movies={movies} />
              </>
            }
          />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;