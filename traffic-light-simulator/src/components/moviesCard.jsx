// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCard = ({ movie }) => {
  return (
    <div className="w3-card-4 w3-margin w3-white">
      {movie.imageUrl && (
        <img src={movie.imageUrl} alt={movie.title} style={{ width: '100%' }} />
      )}
      <div className="w3-container">
        <h3><b>{movie.title}</b></h3>
        <h5>Directed by {movie.director}, {movie.year}</h5>
      </div>
      <div className="w3-container">
        <p>{movie.description.substring(0, 100)}...</p>
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p><b>Genre:</b> {movie.genre}</p>
          </div>
          <div className="w3-col m4 s12">
            <p><b>Rating:</b> {movie.rating}/10</p>
          </div>
        </div>
        <div className="w3-row">
          <Link to={`${movie.id}`} className="w3-button w3-padding-large w3-white w3-border">
            <b>READ MORE »</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;