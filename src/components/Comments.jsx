import React, { Component } from "react";
import { getComments, checkAuth } from "../utils/api";
import cookie from "react-cookies";
import { Comment, Avatar, Divider } from "antd";
import Votes from "./Votes";
import NewComment from "./NewComment";

class Comments extends Component {
  state = {
    comments: [],
    username: ""
  };
  render() {
    return (
      <div key="articleComments">
        <NewComment
          author={this.state.username}
          article_id={this.props.article_id}
          ket="newComment"
        />
        {this.state.comments.length === 0
          ? "loading..."
          : this.state.comments.map(comment => {
              return (
                <span>
                  <Divider dashed />
                  <Comment
                    key={comment.comment_id}
                    actions={[]}
                    author={comment.author}
                    avatar={
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon="user"
                      />
                    }
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    actions={[
                      <Votes
                        votes={comment.votes}
                        id={comment.comment_id}
                        section="comments"
                      />
                    ]}
                    content={comment.body}
                    datetime={comment.created_at}
                  />
                </span>
              );
            })}
      </div>
    );
  }

  componentWillMount = async props => {
    return (
      await this.fetchComments(this.props.article_id), await this.checkUser()
    );
  };

  fetchComments = async props => {
    const comments = await getComments(this.props.article_id);
    console.log(comments);
    return this.setState({ comments });
  };

  checkUser = async () => {
    const { token } = cookie.select(/token/);
    try {
      const res = await checkAuth(token);
      console.log("logged in");
      this.setState({ username: res.data.username });
    } catch (error) {
      console.log(error, "not logged in");
    }
  };
}

export default Comments;
