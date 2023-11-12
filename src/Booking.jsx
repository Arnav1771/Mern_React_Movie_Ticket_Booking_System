import React, { useEffect } from 'react';
import './App.css'; // Import your CSS file

const Booking = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const seats = document.querySelectorAll(".row .seat:not(.sold)");
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const movieSelect = document.getElementById("movie");
    
    populateUI();
    
    let ticketPrice = +movieSelect.value;
    
    // Save selected movie index and price
    function setMovieData(movieIndex, moviePrice) {
      localStorage.setItem("selectedMovieIndex", movieIndex);
      localStorage.setItem("selectedMoviePrice", moviePrice);
    }
    
    // Update total and count
    function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll(".row .seat.selected");
    
      const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    
      localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
    
      const selectedSeatsCount = selectedSeats.length;
    
      count.innerText = selectedSeatsCount;
      total.innerText = selectedSeatsCount * ticketPrice;
    
      setMovieData(movieSelect.selectedIndex, movieSelect.value);
    }
    
    
    // Get data from localstorage and populate UI
    function populateUI() {
      const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    
      if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
          if (selectedSeats.indexOf(index) > -1) {
            console.log(seat.classList.add("selected"));
          }
        });
      }
    
      const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    
      if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
        console.log(selectedMovieIndex)
      }
    }
    console.log(populateUI())
    // Movie select event
    movieSelect.addEventListener("change", (e) => {
      ticketPrice = +e.target.value;
      setMovieData(e.target.selectedIndex, e.target.value);
      updateSelectedCount();
    });
    
    // Seat click event
    container.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("sold")
      ) {
        e.target.classList.toggle("selected");
    
        updateSelectedCount();
      }
    });
    
    // Initial count and total set
    updateSelectedCount();
    
    return () => {
      // Clean up logic
    };
  }, []);

  const handleBookTicket = () => {
    // Open a new window with the "second.html" file
    const newWindow = window.open('second.html', '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      // Handle popup blocker or other issues
      console.error('Unable to open new window. Please check your browser settings.');
    }
  };
  return (
    <div className="movie-container">
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

      <div className="container">
      {/* <div class="screen"></div> */}

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
        <div class="seat sold"></div>
        <div class="seat"></div>
      </div>
    </div>

      <p className="text">
        You have selected <span id="count">0</span> seat for a price of RS.<span id="total">0</span>
      </p>

      <button onClick={handleBookTicket}>Book Ticket</button>
    </div>
  );
};

export default Booking;
