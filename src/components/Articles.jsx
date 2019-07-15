import React, { Component } from "react";
import { getArticles } from "../utils/api";
import { Router, Link } from "@reach/router";

class Articles extends Component {
  state = { articles: null };
  render() {
    return (
      <ul className="Articles">
        {this.state.articles
          ? this.state.articles.map(article => {
              return (
                <Link to={`./${article.article_id}`}>
                  <li className="articlePreview" key={article.article_id}>
                    {article.title}
                    <br />
                    comments: {article.comments_count}
                  </li>
                </Link>
              );
            })
          : "loading..."}
      </ul>
    );
  }
  componentWillMount = async () => {
    return await this.fetchArticles();
  };

  fetchArticles = async () => {
    const articles = await getArticles();

    return this.setState({ articles });
  };
}

export default Articles;
