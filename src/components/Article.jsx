import React, { Component } from "react";
import { getArticles } from "../utils/api";
class Article extends Component {
  state = { article: null };
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
      </div>
    );
  }
  componentWillMount = async props => {
    return await this.fetchArticles(this.props.article_id);
  };

  fetchArticles = async props => {
    const article = await getArticles(this.props.article_id);
    console.log(article);

    return this.setState({ article });
  };
}

export default Article;
