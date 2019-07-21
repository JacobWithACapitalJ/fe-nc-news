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
          <Link to="/articles">HOME</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.SubMenu title="Topics">
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
{
  /* <div>
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
</div> */
}
