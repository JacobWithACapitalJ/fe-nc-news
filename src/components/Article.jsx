import React, { Component } from "react";
import { getArticle, getComments, postComment, checkAuth } from "../utils/api";
import cookie from "react-cookies";

class Article extends Component {
  state = {
    article: null,
    comments: null,
    body: "",
    author: "",
    valid: null,
    username: null
  };
  render() {
    return (
      //___________________comments____________________
      <div>
        <h1>
          {this.state.article === null
            ? "loading..."
            : this.state.article.title}
        </h1>
        <p>
          {this.state.article === null ? "loading..." : this.state.article.body}
        </p>
        <ul>
          {this.state.comments === null
            ? "loading..."
            : this.state.comments.map(comment => {
                return (
                  <li key={comment.comment_id}>
                    <h6>{comment.author}</h6>
                    <h4>{comment.body}</h4>
                    {this.state.username === comment.author ? (
                      <button onClick={this.deleteUser}>DELETE COMMENT</button>
                    ) : null}
                  </li>
                );
              })}
        </ul>

        {this.state.valid === false ? (
          <p style={{ color: "red" }}>You need to be logged in to do that!</p>
        ) : this.state.valid === true ? (
          <p style={{ color: "greenyellow" }}>Comment posted!</p>
        ) : null}

        <form name="newComment">
          <input
            type="text"
            name="body"
            onChange={this.handleChange}
            placeholder="new comment"
            alt="new comment"
          />
          {/* <select
            value={this.state.author}
            name="author"
            onChange={this.handleChange}
          >
            <option value="grumpy19">grumpy19</option>
            <option value="jessjelly">jessjelly</option>
          </select> */}
          <button type="submit" name="submit" onClick={this.handleSubmit}>
            submit
          </button>
        </form>
      </div>
    );
  }
  componentWillMount = async props => {
    return (
      await this.fetchArticles(this.props.article_id),
      await this.fetchComments(this.props.article_id),
      await this.checkUser()
    );
  };

  fetchArticles = async props => {
    const article = await getArticle(this.props.article_id);

    return this.setState({ article });
  };
  fetchComments = async props => {
    const comments = await getComments(this.props.article_id);

    return this.setState({ comments });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { token } = cookie.select(/token/);

    const res = await postComment(
      this.state.article.article_id,
      { author: this.state.author, body: this.state.body },
      token
    ).then(res => {
      if (res.status !== 201) {
        this.setState({ author: "", body: "", valid: false });
      } else {
        this.setState({ valid: true });
      }
    });
  };

  checkUser = async () => {
    const { token } = cookie.select(/token/);
    try {
      const res = await checkAuth(token);
      this.setState({ username: res.data.username });
    } catch (error) {
      console.log(error);
    }
    // return res.data.username;
  };
}

export default Article;
