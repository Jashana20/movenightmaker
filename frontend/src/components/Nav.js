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
            <a className="signin toggle-out" href="google.com">
              Sign In
            </a>
          </li>
          <li>
            <a className="toggle-in" href="google.com">
              Lists |
            </a>
          </li>
          <li>
            <a className="toggle-in signout" href="google.com">
              Sign Out |
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
