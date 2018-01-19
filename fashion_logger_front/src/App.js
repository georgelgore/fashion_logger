import React, { Component } from "react";
import "./App.css";
import FashionLogger from "./Components/FashionLogger";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import User from "./Components/User";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FashionLogger />;
      </div>
    );
  }
}

export default App;
