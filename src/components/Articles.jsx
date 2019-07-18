import React, { Component } from "react";
import { getArticles } from "../utils/api";
import { Router, Link } from "@reach/router";
import Votes from "./Votes";

class Articles extends Component {
  state = { articles: null, filter: null };
  render() {
    return (
      <ul className="Articles">
        <span>
          <img
            src={`https://picsum.photos/${Math.floor(
              (16 * window.innerHeight) / 25
            )}/${9 * Math.floor(window.innerHeight / 25)}`}
            alt="splash"
          />
        </span>
        <br />
        <span className="filters">
          sort articles by:{" "}
          <button onClick={() => this.handleFilter("created_at")}>date</button>
          <button onClick={() => this.handleFilter("comments_count")}>
            comments
          </button>
          <button onClick={() => this.handleFilter("votes")}>votes</button>
        </span>
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
  handleFilter = async filter => {
    console.log(filter);
    const articles = await getArticles(null, null, filter);
    return this.setState({ articles });
  };
}

export default Articles;
