import React from "react";
import "antd/dist/antd.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Login from "./components/Login";

function App() {
  return (
    <div className="bg">
      <div className="App">
        <Header />
        <Nav />
        <Router>
          <Articles path="/articles" />
          <Article path="articles/:article_id" />
          <Articles path="articles/topic/:topic" />
          <Login path="/login" />
        </Router>
      </div>
    </div>
  );
}

export default App;
