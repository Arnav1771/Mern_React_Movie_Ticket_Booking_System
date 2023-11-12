// App.js
import React, { useState, useEffect, useRef } from 'react';
import MovieService from './MovieService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import Booking from './Booking'; // Update the path based on your file structure
import './Apps.css';
import './App.css';
import 'D:/code/movie/movie-ticket-app/src/App.css';
// import './Seats.jsx';



const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const popularMovies = await MovieService.getPopularMovies();
    setMovies(popularMovies);
  };

  const handleSearch = async (searchTerm) => {
    const searchResults = await MovieService.searchMovies(searchTerm);
    setMovies(searchResults);
  };

  // Correct usage of useRef
  const seatsRef = useRef();

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={movies} />
      {/* Pass the seatsRef as a prop to the Booking component */}
      <Booking seatsRef={seatsRef} />
    </div>
  );
};

export default App;
