# Coding Block Assignment - Movie Ticket Booking System

This project is a Movie Ticket Booking System built using React. It allows users to search for movies, view details, select seats, and make payments securely using Stripe.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Payment Integration](#payment-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for movies by title, genre, actors, or director.
- Advanced filters to refine search results by date, genre, theater location, and more.
- View movie details and ratings.
- Select seats for booking.
- Secure payment processing using Stripe.
- Responsive design for a seamless experience on different devices.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/movie-ticket-booking-system.git
    cd movie-ticket-booking-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Start the backend server for payment processing:
    ```sh
    npm run server
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the search bar to find movies by title or use the advanced filters to refine your search.
3. Click on a movie to view details and book tickets.
4. Select seats and proceed to payment.
5. Enter payment details and complete the booking.

## Project Structure
.gitignore package.json public/ index.html manifest.json robots.txt README.md src/ App.css App.jsx App.test.js Apps.css Booking.jsx BookingForm.jsx index.jsx Modal.css Modal.jsx MovieList.js MovieService.js OtherComponent.jsx ParentComponent.js Payment.jsx reportWebVitals.js SearchForm.js Seats.js secondFile.html setupTests.js


## API Integration

The project integrates with The Movie Database (TMDb) API to fetch movie data. The API key and base URL are configured in `src/MovieService.js`.

```js
const API_KEY = 'your_tmdb_api_key';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200';


// [Payment.jsx](http://_vscodecontentref_/23)
const stripePromise = loadStripe('your_stripe_publishable_key');

// server.js
const stripe = require('stripe')('your_stripe_secret_key');
