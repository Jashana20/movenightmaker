import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies
          ? this.props
              .movies()
              .map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : console.log("no movies")}
      </div>
    );
  }
}

export default MovieList;
