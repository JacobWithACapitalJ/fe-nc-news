import React, { Component } from "react";

class Header extends Component {
  state = { height: 100, user: null };
  render() {
    return (
      <div>
        <h1>{"< NC - NEWS />"}</h1>
      </div>
    );
  }
  componentDidMount() {
    window.addEventListener("scroll", this.collapse);
    // window.addEventListener("mousemove", event => {
    //   console.log(event.pageX);
    // });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.collapse);
  }
  collapse = () => {
    if (window.pageYOffset == 0) {
      this.setState({
        height: 100
      });
    } else {
      this.setState({
        height: 100 - (window.pageYOffset < 50 ? window.pageYOffset : 50)
      });
    }
  };
}

export default Header;
