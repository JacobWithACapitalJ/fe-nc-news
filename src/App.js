import React, { Component } from "react";
import { Router } from "@reach/router";
import Error from "./components/Errors";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Login from "./components/Login";
import { Layout } from "antd";
import Splash from "./components/Splash";
import Home from "./components/Home";

const { Content, Footer, Sider } = Layout;

class App extends Component {
  state = { collapsed: false };
  render() {
    return (
      <Layout>
        <Layout.Header
          style={{
            backgroundColor: "darkgrey"
          }}
        >
          <img
            src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png"
            alt="northcoders logo"
            style={{ height: "4em" }}
          />
          <text style={{ color: "white", fontWeight: "bold" }}>News</text>
        </Layout.Header>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              this.setState({ collapsed: broken });
              console.log(broken);
            }}
            theme="light"
            style={{
              boxShadow: "5px 0px 5px rgba(0,0,0,20%)"
            }}
          >
            <Nav />
            <Splash height="4em">NC NEWS</Splash>
          </Sider>
          <Layout>
            <Content>
              <div
                style={{
                  padding: 24,
                  minHeight: "86vh"
                }}
              >
                <Router>
                  <Home path="/" />
                  <Articles path="/articles" collapsed={this.state.collapsed} />
                  <Article path="/articles/:article_id" />
                  <Articles
                    path="articles/topic/:topic"
                    collapsed={this.state.collapsed}
                  />
                  <Login path="/login" />
                  <Error default />
                </Router>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Contact me on Linkdin:{" "}
              <a href="www.linkedin.com/in/jacob-ashe">
                www.linkedin.com/in/jacob-ashe
              </a>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
