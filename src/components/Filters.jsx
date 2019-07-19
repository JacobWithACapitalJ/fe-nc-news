import React, { Component } from "react";
import { Button } from "antd";
class Filters extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.click}>{filter}</Button>;
      </div>
    );
  }
}

export default Filters;
