import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <h4>Movie App</h4>
        </div>
        <ul>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Lists</a>
          </li>
        </ul>
      </nav>
    );
  }
}