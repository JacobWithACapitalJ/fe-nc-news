import React, { Component } from "react";
import { getTopics } from "../utils/api";
import Card from "./Card";
import { Link } from "@reach/router";
class Nav extends Component {
  state = { topics: null };
  render() {
    return (
      <div className="Nav">
        topics:
        <ul>
          <li className="navLinks" key="HOME">
            <Link to="/articles">HOME</Link>
          </li>
          {this.state.topics === null
            ? "loading"
            : this.state.topics.map(topic => {
                return (
                  <li className="navLinks" key={topic.slug}>
                    <Link to={`/articles/topics/:${topic.slug}`}>
                      {topic.slug}
                    </Link>
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
  componentWillMount = async () => {
    return await this.fetchTopics();
  };

  fetchTopics = async () => {
    const topics = await getTopics();
    console.log(topics);
    return this.setState({ topics });
  };
}

export default Nav;
