import React, { Component } from "react";
import { getArticles } from "../utils/api";
import Card from "./Card";
class Articles extends Component {
  state = { articles: null };
  render() {
    return (
      <ul className="Articles">
        {this.state.articles
          ? this.state.articles.map(article => {
              return (
                <li
                  className="articlePreview"
                  key={article.article_id}
                  style={{ overflowClipBox: true }}
                >
                  {article.title}
                  <br />
                  comments: {article.comments_count}
                </li>
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
