import React, { Component } from "react";

class Header extends Component {
  state = { height: 100 };
  render() {
    return (
      <div className="Header">
        <h1
          style={{
            position: "fixed",
            textAlign: "center",
            margin: -10,
            padding: 0,
            border: "dashed 2px darkslateblue",
            width: "100vw",
            height: this.state.height,
            // fontSize: this.state.height,
            scale: this.state.height,
            // textSizeAdjust: "auto",
            backgroundColor: "#ff9f1c",
            transition: "0.2s"
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
        height:
          100 - (window.pageYOffset / 2 < 50 ? window.pageYOffset / 2 : 50)
      });
    }
  };
}

export default Header;
