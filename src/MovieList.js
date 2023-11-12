import React from 'react';

const MovieList = ({ movies, onBookTicket }) => {
  const handleBookTicket = (title) => {
    if (typeof onBookTicket === 'function') {
      onBookTicket(title);
    }
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.title} className="movie">
          <img src={movie.poster_path} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <span className={getClassByRate(movie.vote_average)}>
              {movie.vote_average}
            </span>
            <button onClick={() => handleBookTicket(movie.title)}>Book Ticket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

export default MovieList;