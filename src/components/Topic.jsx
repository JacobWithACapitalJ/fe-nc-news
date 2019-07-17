import React, { Component } from "react";
import { getArticles } from "../utils/api";
import { Router, Link } from "@reach/router";
import Votes from "../components/Votes";
class topic extends Component {
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
                  <Link to={`../../${article.article_id}`}>
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
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.topic !== this.props.topic) {
      return await this.fetchArticles(null, this.props.topic);
    }
  };
  componentWillMount = async props => {
    return await this.fetchArticles(null, this.props.topic);
  };

  fetchArticles = async props => {
    const articles = await getArticles(null, this.props.topic);
    console.log(articles);

    return this.setState({ articles });
  };
}

export default topic;
