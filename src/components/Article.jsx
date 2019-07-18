import React, { Component } from "react";
import { getArticles, getComments, postComment } from "../utils/api";
import cookie from "react-cookies";
import Person from "material-design-icons";
class Article extends Component {
  state = {
    article: null,
    comments: null,
    body: "",
    author: "",
    valid: null
  };
  render() {
    return (
      <div className="fullArticle">
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
                    <h6 style={{ marginLeft: "1em" }}>{comment.author}</h6>
                    <h4>{comment.body}</h4>
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
      await this.fetchComments(this.props.article_id)
    );
  };

  fetchArticles = async props => {
    const article = await getArticles(this.props.article_id);

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
}

export default Article;
