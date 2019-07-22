import React, { Component } from "react";
import { getTopics } from "../utils/api";
import { Link } from "@reach/router";
import { Menu } from "antd";
class Nav extends Component {
  state = { topics: null };
  render() {
    return (
      <Menu theme="light" mode="inline">
        <Menu.Item>
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.SubMenu title="Topics">
          <Menu.Item>
            <Link to="/articles">all articles</Link>
          </Menu.Item>
          {this.state.topics === null
            ? "loading"
            : this.state.topics.map(topic => {
                return (
                  <Menu.Item>
                    <Link to={`/articles/topic/${topic.slug}`}>
                      {topic.slug}
                    </Link>
                  </Menu.Item>
                );
              })}
        </Menu.SubMenu>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/login">LOGIN</Link>
        </Menu.Item>
      </Menu>
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
