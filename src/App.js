import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Topic from "./components/Topic";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Articles path="/articles" />
        <Article path="articles/:article_id" />
        <Topic path="articles/topics/:topic" />
      </Router>
    </div>
  );
}

export default App;
