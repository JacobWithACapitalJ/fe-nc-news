import "./Card.css";
import React, { Component } from "react";

class Card extends Component {
  state = { open: false };
  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <h2>{this.props.children.title}</h2>
        <p style={this.handleStyle()}>{this.props.children.body}</p>
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState !== this.state) {
      this.handleStyle();
    }
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleStyle = () => {
    if (!this.state.open) {
      return {
        visibility: "hidden",
        height: "0",
        "margin-bottom": "1em"
      };
    } else {
      return {
        visibility: "visible",
        "margin-bottom": "1em"
      };
    }
  };
}
export default Card;
