import React, { Component } from "react";
import { getArticles } from "../utils/api";
import { Link } from "@reach/router";
import Votes from "./Votes";
import { Menu, Dropdown, Icon, Card, message } from "antd";

class Articles extends Component {
  state = { articles: [], filter: "" };

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={() => this.handleFilter("created_at")}>
          Date
        </Menu.Item>
        <Menu.Item key="1" onClick={() => this.handleFilter("comments_count")}>
          Comments
        </Menu.Item>
        <Menu.Item key="3" onClick={() => this.handleFilter("votes")}>
          Votes
        </Menu.Item>
      </Menu>
    );

    return (
      <ul className="ul">
        <Dropdown overlay={menu} trigger={["click"]}>
          <span className="ant-dropdown-link">
            {this.state.filter.length === 0
              ? "Sort by..."
              : `Sorting by ${this.state.filter}`}
            <Icon type="down" />
          </span>
        </Dropdown>
        {this.state.articles
          ? this.state.articles.map(article => {
              return (
                <Card
                  title={article.title}
                  bordered={true}
                  key={article.article_id}
                  // size="small"
                  style={{ marginBottom: "1em" }}
                  actions={[
                    <Votes
                      votes={article.votes}
                      id={article.article_id}
                      section="articles"
                    />,
                    <span>
                      <Icon type="message" />
                      &emsp; comments: {article.comments_count}
                    </span>,
                    <Link to={`/articles/${article.article_id}`}>
                      see more &emsp;
                      <Icon type="dash" />
                    </Link>
                  ]}
                >
                  {`${article.body.slice(0, 125)}...`}
                </Card>
              );
            })
          : "loading..."}
      </ul>
    );
  }
  componentWillMount = async () => {
    return await this.fetchArticles();
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.topic !== this.props.topic) {
      return await this.fetchArticles(null, this.props.topic);
    }
  };
  fetchArticles = async () => {
    const articles = await getArticles(this.props.topic);
    return this.setState({ articles });
  };
  handleFilter = async filter => {
    message.info(`sorting by ${filter}`);
    const articles = await getArticles(this.props.topic, filter);
    return this.setState({ articles, filter });
  };
}

export default Articles;
