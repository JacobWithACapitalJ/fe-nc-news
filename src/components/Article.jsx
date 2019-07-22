import React, { Component } from "react";
import { getArticle, getComments, checkAuth } from "../utils/api";
import cookie from "react-cookies";
import Comments from "./Comments";
import { Card } from "antd";
class Article extends Component {
  state = {
    article: null,
    comments: null,
    body: "",
    author: "",
    valid: null,
    username: null
  };
  render() {
    return (
      <div>
        <Card
          title={
            this.state.article === null
              ? "loading..."
              : this.state.article.title
          }
          bordered={true}
          style={{
            margin: "1em",
            boxShadow: " 5px 5px 5px rgba(0,0,0,5%)"
          }}
        >
          {this.state.article === null ? "loading..." : this.state.article.body}

          <Comments article_id={this.props.article_id} />
        </Card>
        {}
        <ul />
      </div>
    );
  }
  componentWillMount = async props => {
    return (
      await this.fetchArticles(this.props.article_id),
      await this.fetchComments(this.props.article_id),
      await this.checkUser()
    );
  };

  fetchArticles = async props => {
    const article = await getArticle(this.props.article_id);

    return this.setState({ article });
  };
  fetchComments = async props => {
    const comments = await getComments(this.props.article_id);

    return this.setState({ comments });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  checkUser = async () => {
    const { token } = cookie.select(/token/);
    try {
      const res = await checkAuth(token);
      this.setState({ username: res.data.username });
    } catch (error) {
      console.log("not logged in");
    }
  };
}

export default Article;
