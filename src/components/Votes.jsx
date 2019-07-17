import React, { Component } from "react";
import { incrementVote } from "../utils/api";
class Votes extends Component {
  state = { currentVotes: this.props.votes };
  render() {
    return (
      <div className={this.props.className}>
        <button
          onClick={event => this.handleVote(1, event)}
          className="plusVote"
        >
          +
        </button>
        <br />
        votes: {this.state.currentVotes}
        <br />
        <button
          onClick={event => this.handleVote(-1, event)}
          className="minusVote"
        >
          -
        </button>
      </div>
    );
  }

  handleVote = (inc_vote, event) => {
    event.preventDefault();
    incrementVote(inc_vote, this.props.id, this.props.section).catch(() => {
      this.setState({ currentVotes: this.state.currentVotes - inc_vote });
    });
    this.setState({ currentVotes: this.state.currentVotes + inc_vote });
  };
}

export default Votes;
