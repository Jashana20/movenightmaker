import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <h3>Search for a Movie by Name:</h3>
        <input
          type="text"
          value={this.props.search}
          onChange={this.props.handleSearch}
        />
        <button onClick={this.props.searchMovies}>Search</button>
      </div>
    );
  }
}

export default Search;
