import React, { Component } from "react";
import { incrementVote } from "../utils/api";
import { Button, Icon } from "antd";
import cookie from "react-cookies";
class Votes extends Component {
  state = { currentVotes: this.props.votes, voted: false };
  render() {
    const ButtonGroup = Button.Group;
    return (
      <div>
        <ButtonGroup>
          <Button
            size="small"
            onClick={event => this.handleVote(1, event)}
            disabled={this.state.voted}
          >
            <Icon type="up" />
          </Button>
          <Button
            size="small"
            onClick={event => this.handleVote(-1, event)}
            disabled={this.state.voted}
          >
            <Icon type="down" />
          </Button>
        </ButtonGroup>
        &emsp; votes: {this.state.currentVotes}
      </div>
    );
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.id !== this.props.id)
      this.setState({ currentVotes: this.props.votes });
  };

  handleVote = (inc_vote, event) => {
    const { token } = cookie.select(/token/);
    event.preventDefault();
    incrementVote(inc_vote, this.props.id, this.props.section, token).catch(
      () => {
        this.setState({
          currentVotes: this.state.currentVotes - inc_vote,
          voted: false
        });
      }
    );
    this.setState({
      currentVotes: this.state.currentVotes + inc_vote,
      voted: true
    });
  };
}

export default Votes;
