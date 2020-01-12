import React from "react";

const MovieListItem = ({ movie }) => {
  return (<li className="movie_item">
    <img
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
    />
    <div className="movie_description">
      <h2>{movie.original_title}</h2>
      <section className="movie_details">
        <div className="movie_year">
          <span className="title">Year</span>
          <span>{movie.release_date.split("-")[0]}</span>
        </div>
        <div className="movie_rating">
          <span className="title">Rating</span>
          <span>{movie.vote_average}</span>
        </div>
      </section>
    </div>
  </li>);
};
export default MovieListItem;
