import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="log-con">
        <h1>Movie App</h1>
        <div className="login-container">
          <h3>Log In</h3>
          <form onSubmit={this.props.handleLoginSubmit}>
            <input
              onChange={this.props.handleName}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              onChange={this.props.handleEmail}
              name="email"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={this.props.handlePassword}
              name="password"
              type="text"
              placeholder="Password"
            />
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="signup-container">
          <h3>Not a Member? Sign Up today</h3>
          <form onSubmit={this.props.handleSignUpSubmit}>
            <input
              onChange={this.props.handleName}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              onChange={this.props.handleEmail}
              name="email"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={this.props.handlePassword}
              name="password"
              type="text"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
