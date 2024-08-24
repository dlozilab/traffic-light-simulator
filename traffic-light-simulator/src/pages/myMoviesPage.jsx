// MyMoviesPage.js
import React from 'react';
import MoviesCard from '../components/moviesCard';
import moviesList from '../assets/movies';

const MyMoviesPage = () => {
  return (
    <div className="w3-container">
      <h1 className="w3-center">My Movie Collection</h1>
      <div className="w3-row-padding">
        {moviesList.map(movie => (
          <div key={movie.id} className="w3-col l4 m6 s12">
            <MoviesCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMoviesPage;