// Booking.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import './App.css';

const Booking = () => {
  const location = useLocation();
  const movieName = location.state?.movieName;
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const container = document.querySelector(".container");
    const seats = document.querySelectorAll(".row .seat:not(.sold)");
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const movieSelect = document.getElementById("movie");
    
    populateUI();
    
    let ticketPrice = +movieSelect.value;
    
    function setMovieData(movieIndex, moviePrice) {
      localStorage.setItem("selectedMovieIndex", movieIndex);
      localStorage.setItem("selectedMoviePrice", moviePrice);
    }
    
    function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll(".row .seat.selected");
      const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
      localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
      const selectedSeatsCount = selectedSeats.length;
      count.innerText = selectedSeatsCount;
      total.innerText = selectedSeatsCount * ticketPrice;
      setMovieData(movieSelect.selectedIndex, movieSelect.value);
    }
    
    function populateUI() {
      const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
      if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
          if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add("selected");
          }
        });
      }
      const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
      if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
      }
    }
    
    movieSelect.addEventListener("change", (e) => {
      ticketPrice = +e.target.value;
      setMovieData(e.target.selectedIndex, e.target.value);
      updateSelectedCount();
    });
    
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
      }
    });
    
    updateSelectedCount();
  }, []);

  const handleBuyNow = () => {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats && selectedSeats.length > 0) {
      setModalMessage(`You have successfully booked ${selectedSeats.length} seats for a total price of RS.${document.getElementById("total").innerText} for the movie ${movieName}`);
      setShowModal(true);
      localStorage.removeItem("selectedSeats");
      localStorage.removeItem("selectedMovieIndex");
      localStorage.removeItem("selectedMoviePrice");
    } else {
      alert("Please select at least one seat to proceed with booking.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className="movie-container">
      <h2>{movieName}</h2>
      <select id="movie">
        <option value="240">Silver (RS.240)</option>
        <option value="300">Gold (RS.300)</option>
        <option value="350">Premier (RS.350)</option>
        <option value="475">Lounge (RS.475)</option>
        <option value="500">Royal (RS.500)</option>
      </select>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat sold"></div>
          <small>Sold</small>
        </li>
      </ul>

      <div className="screen"></div>

      <div className="container">
        {[...Array(10)].map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {[...Array(10)].map((_, seatIndex) => (
              <div
                className={`seat ${rowIndex === 1 && seatIndex === 4 ? 'sold' : ''} ${rowIndex === 2 && seatIndex === 5 ? 'sold' : ''} ${rowIndex === 3 && seatIndex === 6 ? 'sold' : ''}`}
                key={seatIndex}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <p className="text">
        You have selected <span id="count">0</span> seat for a price of RS.<span id="total">0</span>
      </p>
      <button onClick={handleBuyNow} className="buy-now-btn">Buy Now</button>
      <Modal show={showModal} handleClose={handleCloseModal} message={modalMessage} />
    </div>
  );
};

export default Booking;