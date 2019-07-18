import React, { Component } from "react";

class Header extends Component {
  state = { height: 100, user: null };
  render() {
    return (
      <div className="Header">
        <h1
          style={{
            position: "fixed",
            width: "100%",
            fontSize: this.state.height,
            height: this.state.height,
            backgroundColor: "#ff9f1c"
          }}
        >
          {"< NC - NEWS />"}
        </h1>
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
