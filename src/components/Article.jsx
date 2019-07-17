import React, { Component } from "react";
import { getArticles, getComments, postComment } from "../utils/api";
import cookie from "react-cookies";
class Article extends Component {
  state = {
    article: null,
    comments: null,
    body: "",
    author: ""
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
                    <h6>{comment.author}</h6>
                    <h4>{comment.body}</h4>
                  </li>
                );
              })}
        </ul>
        <form name="newComment">
          <input type="text" name="body" onChange={this.handleChange} />
          <select
            value={this.state.author}
            name="author"
            onChange={this.handleChange}
          >
            <option value="grumpy19">grumpy19</option>
            <option value="jessjelly">jessjelly</option>
          </select>
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
    console.log(article);

    return this.setState({ article });
  };
  fetchComments = async props => {
    const comments = await getComments(this.props.article_id);
    console.log(comments);
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
    console.log(token);
    const res = await postComment(
      this.state.article.article_id,
      { author: this.state.author, body: this.state.body },
      token
    );
    console.log(res);
  };
}

export default Article;
