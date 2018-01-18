import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FashionLogger from "./Components/FashionLogger";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to FashionLogger</h1>
        </header>
        <p className="App-intro" />
        <FashionLogger />
      </div>
    );
  }
}

export default App;
