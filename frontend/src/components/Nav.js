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
            <a href="google.com">Sign In</a>
          </li>
          <li>
            <a href="google.com">Lists</a>
          </li>
        </ul>
      </nav>
    );
  }
}
