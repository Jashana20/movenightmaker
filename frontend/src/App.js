import React from 'react';
import './App.css';
import Search from './components/Search'
import MovieList from './components/MovieList'
import MovieDropDown from './components/MovieDropDown'


const BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=d844c142ad09a263188aad1cdf54294c&language=en-US&query="
const GENRES_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=d844c142ad09a263188aad1cdf54294c&language=en-US"

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      movies: [],
      search: "",
      genres: [],
      selectedGenre: ""
    }
  }

  componentDidMount() {
    fetch(GENRES_URL)
    .then(r => r.json())
    .then(json => this.setState({ genres:json.genres }))
  }

  handleGenre = (e) => {
    this.setState({selectedGenre: e.target.value})
    this.genreFilter()
  }


  handleSearch = (e) => {
    this.setState({search: e.target.value})
  }

  searchMovies = () => {
    fetch(BASE_URL + this.state.search)
    .then(r => r.json())
    .then(json => this.setState({movies:json.results}))
  }

  genreFilter = () => {
    const filteredArr = this.state.movies.map(movie => movie.genre_ids)
    console.log(filteredArr)
  }


  render(){
    return (
      <div>
        <h1>Movie Night Maker</h1>
        <Search 
        search={this.state.search} 
        handleSearch={this.handleSearch} 
        searchMovies={this.searchMovies} />
        <MovieDropDown 
        genres={this.state.genres} 
        selectedGenre={this.state.selectedGenre} 
        handleGenre={this.handleGenre} />
        <MovieList movies={this.state.movies} /> 
      </div>
      
    )
  }
}

export default App;
