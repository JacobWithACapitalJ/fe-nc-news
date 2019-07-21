import { Comment, Avatar, Form, Button, Input, Divider } from "antd";
import React, { Component } from "react";
import { postComment } from "../utils/api";
import cookie from "react-cookies";
const { TextArea } = Input;
class NewComment extends Component {
  state = {
    body: "",
    username: this.props.author,
    submitted: false,
    submittedComment: {}
  };
  render() {
    return (
      <span>
        {this.state.submitted ? (
          <span>
            <Divider dashed />
            <Comment
              actions={[]}
              author={this.props.author}
              avatar={
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
              }
              content={this.state.submittedComment.body}
              datetime={this.state.submittedComment.created_at}
            />
          </span>
        ) : (
          <span>
            <Divider dashed />
            <Comment
              actions={[]}
              author={
                this.props.author ? this.props.author : "You're not logged in!"
              }
              avatar={
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
              }
              // eslint-disable-next-line react/jsx-no-duplicate-props
              actions={[
                <Button
                  type="primary"
                  onClick={this.handleSubmit}
                  disabled={this.props.author ? false : true}
                >
                  New Comment
                </Button>
              ]}
              content={
                <Form>
                  <div style={{ margin: "24px 0" }} />
                  <TextArea
                    placeholder="New comment!"
                    autosize={{ minRows: 2, maxRows: 6 }}
                    onChange={this.handleChange}
                    value={this.state.body}
                    disabled={this.props.author ? false : true}
                  />
                </Form>
              }
            />
          </span>
        )}
      </span>
    );
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { token } = cookie.select(/token/);

    const res = await postComment(
      this.props.article_id,
      { author: this.state.username, body: this.state.body },
      token
    ).then(res => {
      if (res.status !== 201) {
        this.setState({ author: "", body: "", submitted: false });
      } else {
        this.setState({
          author: "",
          body: "",
          submitted: true,
          submittedComment: res.data[0]
        });
      }
    });
  };

  handleChange = e => {
    this.setState({
      body: e.target.value
    });
  };
}

export default NewComment;
