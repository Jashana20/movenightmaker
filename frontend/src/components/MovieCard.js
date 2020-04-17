import React from "react";
import "./Movie.css";
import MovieDetails from "./moviedetails";
const image = "https://image.tmdb.org/t/p/w500/";
const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
  }
  toggleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };
  render() {
    return (
      <div className="card">
        <div>
          <h3>{this.props.movie.title}</h3>
          <h5>Original Title: {this.props.movie.original_title}</h5>
          <img
            alt="movie poster"
            width="200"
            height="250"
            src={
              this.props.movie.poster_path === null
                ? defaultImage
                : image + this.props.movie.poster_path
            }
          />
          <h4>Popularity: {this.props.movie.popularity}</h4>
          <button onClick={this.toggleShowDetails}>See More</button>
          {this.state.showDetails && (
            <MovieDetails movie={this.props.movie} />
            // <div>
            //   <h5>Release Date: {this.props.movie.release_date}</h5>
            //   <h5>Original Title: {this.props.movie.original_title}</h5>
            //   <p>
            //     Overview: <br></br>
            //     {this.props.movie.overview}
            //   </p>
            //   <h5>Vote Average: {this.props.movie.vote_average}</h5>
            //   <h5>Vote Count: {this.props.movie.vote_count}</h5>
            // </div>
          )}
        </div>
      </div>
    );
  }
}
export default MovieCard;
