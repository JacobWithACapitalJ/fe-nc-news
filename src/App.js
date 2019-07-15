import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Articles />
    </div>
  );
}

export default App;
