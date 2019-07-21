import React, { Component } from "react";
import { authLogin } from "../utils/api";
import { Form, Icon, Result, Input, Button, Checkbox } from "antd";
import cookie from "react-cookies";
class Login extends Component {
  state = { username: null, password: null, login: null };
  render() {
    return (
      <div>
        {this.state.login === true ? (
          <Result
            status="success"
            title="Successfully Logged In!"
            subTitle={`You are currently logged in as: ${this.state.username}`}
          />
        ) : (
          <Form>
            <Form.Item
              label="username"
              validateStatus={
                this.state.login === null
                  ? null
                  : this.state.login === true
                  ? "success"
                  : "error"
              }
            >
              <Input
                type="text"
                name="username"
                onChange={this.handleChange}
                placeholder="username"
              />
            </Form.Item>
            <Form.Item
              label="password"
              validateStatus={
                this.state.login === null
                  ? null
                  : this.state.login === true
                  ? "success"
                  : "error"
              }
            >
              <Input
                type="password"
                name="password"
                onChange={this.handleChange}
                placeholder="password"
              />
            </Form.Item>
            <Button type="primary" onClick={this.handleSubmit}>
              Log in
            </Button>
          </Form>
        )}
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    authLogin(this.state.username, this.state.password)
      .then(res => {
        cookie.save("token", res.data.token);
        this.setState({ login: true });
      })
      .catch(err => {
        this.setState({ password: null, login: false });
      });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
}

export default Login;
