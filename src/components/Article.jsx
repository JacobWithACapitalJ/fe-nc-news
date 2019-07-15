import React, { Component } from "react";
import { getArticles, getComments } from "../utils/api";
class Article extends Component {
  state = { article: null, comments: null };
  render() {
    return (
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
                  <li>
                    <h6>{comment.author}</h6>
                    <h4>{comment.body}</h4>
                  </li>
                );
              })}
        </ul>
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
}

export default Article;
