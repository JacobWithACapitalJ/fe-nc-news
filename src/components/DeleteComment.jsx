import { Button } from "antd";
import React, { Component } from "react";
import { removeComment } from "../utils/api";
import cookie from "react-cookies";
class DeleteComment extends Component {
  state = { deleted: false };
  render() {
    return (
      <div>
        &emsp;
        {this.state.deleted ? null : (
          <Button size="small" onClick={this.handleDelete}>
            Delete
          </Button>
        )}
      </div>
    );
  }
  handleDelete = async event => {
    let { id, parentState, comments } = this.props;
    const { token } = cookie.select(/token/);
    try {
      const res = await removeComment(id, token);
      this.setState({ deleted: true });
      comments = comments.filter(comment => {
        return comment.comment_id !== id;
      });

      parentState({ comments });
      return res.status;
    } catch (error) {
      console.log(error, "<<< handle delete error");
    }
  };
}

export default DeleteComment;
