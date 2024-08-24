// MovieView.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../assets/movies";

const MovieView = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div
      style={{ display: "flex", width: "100%" }}
      className=" w3-card-4 w3-white w3-margin-top w3-margin-bottom"
    >
      <div>
        {movie.imageUrl && (
          <img
            src={movie.imageUrl}
            alt={movie.title}
            style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
        )}
      </div>
      <div>
        <h1 className="w3-center">{movie.title}</h1>

        <div className="w3-container w3-padding">
          <p>
            <strong>Director:</strong> {movie.director}
          </p>
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Rating:</strong> {movie.rating}/10
          </p>
          <p>
            <strong>Description:</strong> {movie.description}
          </p>
        </div>
        <div style={{padding:"2%",marginTop:"5%"}}>
          <video width="100%" controls>
            <source src="mov_bbb.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </div>
        <div className="w3-container w3-padding-16">
          <Link to=".." className="w3-button w3-blue">
            Back to All Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
