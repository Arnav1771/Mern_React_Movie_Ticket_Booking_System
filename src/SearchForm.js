// SearchForm.js
import React, { useState } from 'react';

const genres = [
  { value: '', label: 'All Genres' },
  { value: '28', label: 'Action' },
  { value: '12', label: 'Adventure' },
  { value: '16', label: 'Animation' },
  { value: '35', label: 'Comedy' },
  { value: '80', label: 'Crime' },
  { value: '99', label: 'Documentary' },
  { value: '18', label: 'Drama' },
  { value: '10751', label: 'Family' },
  { value: '14', label: 'Fantasy' },
  { value: '36', label: 'History' },
  { value: '27', label: 'Horror' },
  { value: '10402', label: 'Music' },
  { value: '9648', label: 'Mystery' },
  { value: '10749', label: 'Romance' },
  { value: '878', label: 'Science Fiction' },
  { value: '10770', label: 'TV Movie' },
  { value: '53', label: 'Thriller' },
  { value: '10752', label: 'War' },
  { value: '37', label: 'Western' },
];

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: '',
    actor: '',
    director: '',
    releaseDate: '',
    theaterLocation: '',
  });

  const handleSearch = () => {
    onSearch(searchTerm, filters);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    if (name === 'genre') {
      onSearch(searchTerm, { ...filters, genre: value });
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title"
        className="search"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="filters">
        <select name="genre" value={filters.genre} onChange={handleFilterChange}>
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="actor"
          value={filters.actor}
          onChange={handleFilterChange}
          placeholder="Actor"
        />
        <input
          type="text"
          name="director"
          value={filters.director}
          onChange={handleFilterChange}
          placeholder="Director"
        />
        <input
          type="text"
          name="releaseDate"
          value={filters.releaseDate}
          onChange={handleFilterChange}
          placeholder="Release Year"
        />
        <input
          type="text"
          name="theaterLocation"
          value={filters.theaterLocation}
          onChange={handleFilterChange}
          placeholder="Theater Location"
        />
      </div>
    </form>
  );
};

export default SearchForm;