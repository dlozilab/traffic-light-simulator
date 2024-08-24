import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w3-bar w3-blue-grey">
      <Link to="/" className="w3-bar-item w3-button">
        Home
      </Link>
      <Link to="traffic" className="w3-bar-item w3-button">
        Traffic Light
      </Link>
      <Link to="exercises" className="w3-bar-item w3-button">
        Exercises
      </Link>
      <Link to="movies" className="w3-bar-item w3-button">
        My Movies
      </Link>
      <Link to="contact" className="w3-bar-item w3-button">
        Contact us
      </Link>
    </nav>
  );
}
