// MovieService.js
const API_KEY = '04c35731a5ee918f014970082a0088b1';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200'; // Change w500 to the desired size

const MovieService = {
  getPopularMovies: async () => {
    const url = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    const response = await fetch(url);
    const data = await response.json();

    // Update the poster_path for each movie with the full URL
    const moviesWithThumbnails = data.results.map((movie) => ({
      ...movie,
      poster_path: `${IMG_BASE_URL}${movie.poster_path}`,
    }));

    return moviesWithThumbnails;
  },

  searchMovies: async (query, filters = {}) => {
    let url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

    // Add filters to the URL
    if (filters.genre) {
      url += `&with_genres=${filters.genre}`;
    }
    if (filters.actor) {
      url += `&with_cast=${filters.actor}`;
    }
    if (filters.director) {
      url += `&with_crew=${filters.director}`;
    }
    if (filters.releaseDate) {
      url += `&primary_release_year=${filters.releaseDate}`;
    }
    if (filters.theaterLocation) {
      url += `&region=${filters.theaterLocation}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    // Update the poster_path for each movie with the full URL
    const searchResultsWithThumbnails = data.results.map((movie) => ({
      ...movie,
      poster_path: `${IMG_BASE_URL}${movie.poster_path}`,
    }));

    return searchResultsWithThumbnails;
  },
};

export default MovieService;