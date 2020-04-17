import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {

  render() {
    return (
      <div className="card-container">
        {this.props.movies().length > 0
          ? this.props
              .movies()
              .map((movie) => 
              <MovieCard 
              key={movie.id} 
              movie={movie} 
              name={this.props.playlistName} 
              handlePlaylistForm={this.props.handlePlaylistForm}
              createPlaylists={this.props.createPlaylists} 
              playlists={this.props.playlists} 
              addToPlaylist={this.props.addToPlaylist} />)
          : console.log("no movies")}
      </div>
    );
  }
}

export default MovieList;