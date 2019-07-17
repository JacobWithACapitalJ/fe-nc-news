import React, { Component } from "react";
import { authLogin } from "../utils/api";
import cookie from "react-cookies";
class Login extends Component {
  state = { username: null, password: null };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">username: </label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="username"
          />
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="password"
          />
          <br />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    authLogin(this.state.username, this.state.password)
      .then(res => {
        cookie.save("token", res.data.token);
      })
      .catch(console.log);
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
}

export default Login;
