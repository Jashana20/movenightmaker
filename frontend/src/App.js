import React from "react";
import "./App.css";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import MovieDropDown from "./components/MovieDropDown";
import Nav from "./components/Nav";

const BASE_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d844c142ad09a263188aad1cdf54294c&language=en-US&query=";
const GENRES_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=d844c142ad09a263188aad1cdf54294c&language=en-US";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      search: "",
      genres: [],
      selectedGenre: "",
      name: "",
      playlists: []
    };
  }

  componentDidMount() {
    fetch(GENRES_URL)
      .then((r) => r.json())
      .then((json) => this.setState({ genres: json.genres }));
  }

  handleGenre = (e) => {
    this.setState({ selectedGenre: e.target.value });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handlePlaylistForm = (e) => {
    this.setState({name: e.target.value})
  }

  searchMovies = () => {
    fetch(BASE_URL + this.state.search)
      .then((r) => r.json())
      .then((json) => this.setState({ movies: json.results }));
  };

  movieFilter = () => {
    if (this.state.selectedGenre.length > 0) {
      const filteredMovies = this.state.movies.filter((movie) => {
        return movie.genre_ids.includes(parseInt(this.state.selectedGenre));
      });
      return filteredMovies.length > 0 ? filteredMovies : this.state.movies;
    } else {
      return this.state.movies;
    }
  };

  createPlaylists = () => {
    if (this.state.playlists.includes(this.state.name)){
      const newArr = this.state.playlists.filter(p => p !== this.state.name)
      this.setState({playlists:newArr})
    } else {
      this.setState({
        playlists: [...this.state.playlists, this.state.name],
        name: ""
      }) 
    }
  }

  addToPlaylist = (selectedMovie) => {
      const playlistMovies = [selectedMovie]
      console.log(playlistMovies)
    
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <h1 id="site-title">Movie Night Maker</h1>
          <Search
            search={this.state.search}
            handleSearch={this.handleSearch}
            searchMovies={this.searchMovies}
          />
          <MovieDropDown
            genres={this.state.genres}
            selectedGenre={this.state.selectedGenre}
            handleGenre={this.handleGenre}
          />
          <MovieList 
          movies={this.movieFilter} 
          name={this.state.name} 
          handlePlaylistForm={this.handlePlaylistForm}
          createPlaylists={this.createPlaylists}
          playlists={this.state.playlists}
          addToPlaylist={this.addToPlaylist}
          />
        </div>
      </div>
    );
  }
}

export default App;
