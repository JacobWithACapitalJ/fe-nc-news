import React from "react";
import "antd/dist/antd.css";
// import "./styles/my-theme.less";
import { Router } from "@reach/router";
// import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Login from "./components/Login";
import { Layout, Typography, Icon } from "antd";

const { Content, Footer, Sider } = Layout;

function App() {
  return (
    // <div className="bg">
    //   <div className="App">
    <Layout>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          theme="light"
        >
          <Nav />
        </Sider>
        <Layout>
          <Layout.Header style={{ background: "#fff", padding: 0 }}>
            <Typography.Title style={{ textAlign: "center" }}>
              NC News
            </Typography.Title>
          </Layout.Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Router>
                <Articles path="/articles" />
                <Article path="/articles/:article_id" />
                <Articles path="articles/topic/:topic" />
                <Login path="/login" />
              </Router>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Please hire me!</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
