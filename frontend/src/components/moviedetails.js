import React from "react";

const MovieDetails = (props) => {
  return (
    <div className="details">
      <h5>Release Date: {props.movie.release_date}</h5>
      <h5>Original Title: {props.movie.original_title}</h5>
      <p>
        Overview: <br></br>
        {props.movie.overview}
      </p>
      <h5>Vote Average: {props.movie.vote_average}</h5>
      <h5>Vote Count: {props.movie.vote_count}</h5>
    </div>
  );
};

export default MovieDetails;
