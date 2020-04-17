import React from "react";
import "./Movie.css";
import PlaylistList from "./PlaylistList";
import MovieDetails from "./MovieDetails";

const image = "https://image.tmdb.org/t/p/w500/";
const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
      showPlaylists: false,
    };
  }

  toggleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
      showPlaylists: !this.state.showPlaylists,
    });
  };

  render() {
    return (
      <div className="card">
        <div>
          <h3>{this.props.movie.title}</h3>
          <button onClick={this.toggleShowDetails}>Add to Playlist</button>
          {this.state.showPlaylists && (
            <div>
              {" "}
              <PlaylistList
                name={this.props.name}
                handlePlaylistForm={this.props.handlePlaylistForm}
                createPlaylists={this.props.createPlaylists}
                playlists={this.props.playlists}
              />
            </div>
          )}
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
          {this.state.showDetails && <MovieDetails movie={this.props.movie} />}
        </div>
      </div>
    );
  }
}
export default MovieCard;
