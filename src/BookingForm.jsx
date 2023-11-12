import React, { useState } from 'react';

const BookingForm = ({ onBooking }) => {
  // eslint-disable-next-line
  const [selectedSeats, setSelectedSeats] = useState([]); // Unused but kept for future use
  // eslint-disable-next-line
  const [selectedMovie, setSelectedMovie] = useState(''); // Unused but kept for future use

  // eslint-disable-next-line
  const handleSeatClick = (seat) => {
    // Toggle the seat selection
    const updatedSeats = selectedSeats.includes(seat) ? selectedSeats.filter(s => s !== seat) : [...selectedSeats, seat];
    setSelectedSeats(updatedSeats);
  };

  // eslint-disable-next-line
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  // eslint-disable-next-line
  const handleBooking = () => {
    onBooking(selectedSeats, selectedMovie);
  };

  return (
    <div className="booking-form">
      {/* Your existing booking form code goes here */}
    </div>
  );
};

export default BookingForm;
