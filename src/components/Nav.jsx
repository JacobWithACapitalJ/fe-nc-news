import React, { Component } from "react";
import { getTopics } from "../utils/api";
import { Link } from "@reach/router";
class Nav extends Component {
  state = { topics: null };
  render() {
    return (
      <div>
        topics:
        <ul>
          <li key="HOME">
            <Link to="/articles">HOME</Link>
          </li>
          {this.state.topics === null
            ? "loading"
            : this.state.topics.map(topic => {
                return (
                  <li key={topic.slug}>
                    <Link to={`/articles/topic/${topic.slug}`}>
                      {topic.slug}
                    </Link>
                  </li>
                );
              })}
          <li key="login">
            <Link to="/login">LOGIN</Link>
          </li>
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
