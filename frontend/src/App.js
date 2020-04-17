import React from "react";
import "./App.css";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import MovieDropDown from "./components/MovieDropDown";
import Nav from "./components/Nav";
import Login from "./components/Login";

const BASE_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d844c142ad09a263188aad1cdf54294c&language=en-US&query=";
const GENRES_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=d844c142ad09a263188aad1cdf54294c&language=en-US";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      password: "",
      email: "",
      movies: [],
      search: "",
      genres: [],
      selectedGenre: "",
      playlistName: "",
      playlists: [],
      userId: null,
    };
  }

  componentDidMount() {
    fetch(GENRES_URL)
      .then((r) => r.json())
      .then((json) => this.setState({ genres: json.genres }));
  }

  render() {
    return this.state.userId === null
      ? this.logInContent()
      : this.loggedInContent();
  }

  handleGenre = (e) => {
    this.setState({ selectedGenre: e.target.value });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handlePlaylistForm = (e) => {
    this.setState({playlistName: e.target.value})
  }

  searchMovies = () => {
    if (this.state.search.length > 0) {
      fetch(BASE_URL + this.state.search)
        .then((r) => r.json())
        .then((json) => this.setState({ movies: json.results }));
    }
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
    if (this.state.playlists.includes(this.state.playlistName)){
      const newArr = this.state.playlists.filter(p => p !== this.state.playlistName)
      this.setState({playlists:newArr})
    } else {
      this.setState({
        playlists: [...this.state.playlists, this.state.playlistName],
        playlistName: ""
      }) 
    }
  }

  addToPlaylist = (selectedMovie) => {
      const playlistMovies = [selectedMovie]
      console.log(playlistMovies)
    
  }

  // render() {
  //   return (
  //     <div>
  //       <Nav />
  //       <div className="container">
  //         <h1 id="site-title">Movie Night Maker</h1>
  //         <Search
  //           search={this.state.search}
  //           handleSearch={this.handleSearch}
  //           searchMovies={this.searchMovies}
  //         />
  //         <MovieDropDown
  //           genres={this.state.genres}
  //           selectedGenre={this.state.selectedGenre}
  //           handleGenre={this.handleGenre}
  //         />
  //         <MovieList 
  //         movies={this.movieFilter} 
          
  //         />
  //       </div>
  // };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.name,
        password: this.state.password,
        email: this.state.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => this.handleSignUpSuccess(data));
  };

  handleSignUpSuccess = (data) => {
    this.setState({
      userId: data.id,
    });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => this.handleRes(data));
  };

  handleRes = (data) => {
    const user = data.find(
      (user) =>
        user.password === this.state.password && user.email === this.state.email
    );

    user ? this.setState({ userId: user.id }) : console.log("wrong details");
  };

  signOut = () => {
    this.setState({
      userId: null,
    });
  };

  logInContent = () => {
    return (
      <div className="app">
        <Login
          handleName={this.handleName}
          handlePassword={this.handlePassword}
          handleEmail={this.handleEmail}
          handleSignUpSubmit={this.handleSignUpSubmit}
          handleLoginSubmit={this.handleLoginSubmit}
        />
      </div>
    );
  };

  loggedInContent = () => {
    return (
      <div className="app">
        <Nav signOut={this.signOut} />
        <div className="container">
          <h1 class="site-title">Movie Night Maker</h1>
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
          playlistName={this.state.playlistName} 
          handlePlaylistForm={this.handlePlaylistForm}
          createPlaylists={this.createPlaylists}
          playlists={this.state.playlists}
          addToPlaylist={this.addToPlaylist} />
        </div>
      </div>
    );
  };
}

export default App;
