import React, { Component } from "react";
import { getArticles } from "../utils/api";
import { Router, Link } from "@reach/router";
import Votes from "./Votes";

class Articles extends Component {
  state = { articles: null };
  render() {
    return (
      <ul className="Articles">
        {this.state.articles
          ? this.state.articles.map(article => {
              return (
                <div className="articleContainer">
                  <Votes
                    votes={article.votes}
                    id={article.article_id}
                    section="articles"
                    className="votes"
                  />
                  <Link to={`./${article.article_id}`}>
                    <li className="articlePreview" key={article.article_id}>
                      {article.title}
                      <br />
                      comments: {article.comments_count}
                    </li>
                  </Link>
                </div>
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
