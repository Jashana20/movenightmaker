import React from "react";

class MovieDropDown extends React.Component {
  render() {
    return (
      <div>
        <h3>Filter Movies by Genre</h3>
        <select
          value={this.props.selectedGenre}
          onChange={this.props.handleGenre}
        >
          {this.props.genres.map((genres) => (
            <option key={genres.id} value={genres.id}>
              {genres.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default MovieDropDown;