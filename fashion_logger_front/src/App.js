import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FashionLogger from "./Components/FashionLogger";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <NavLink
      to="/"
      exact
      activeStyle={{
        color: "blue"
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      activeStyle={{
        color: "blue"
      }}
    >
      {"    "}
      Profile
    </NavLink>
    <NavLink
      to="/edit"
      exact
      activeStyle={{
        color: "blue"
      }}
    >
      {"    "}
      Edit Profile
    </NavLink>
  </div>
);

const Home = () => (
  <div>
    <h1>Welcome</h1>
    <div>
      <img src="https://i.pinimg.com/736x/e8/e8/5a/e8e85a0f3a35e5c3737287dc137b4ef3--flower-collage-collage-art.jpg" />
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" render={Home} />
          <Route exact path="/profile" component={FashionLogger} />
        </div>
      </Router>
    );
  }
}

export default App;
