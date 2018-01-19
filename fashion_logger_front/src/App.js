import React, { Component } from "react";
import "./App.css";
import FashionLogger from "./Components/FashionLogger";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import Topic from "./Components/Topic";

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

class App extends Component {
  imgClickHandler = e => {
    let id = parseInt(e.target.id, 10);
    window.history.pushState("Topic", "", `/profile/1`);
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={FashionLogger} />
          <Route exact path="/edit" component={Edit} />
          <Route
            exact
            path="/profile/1"
            render={routerProps => {
              return <Topic {...routerProps} onClick={this.imgClickHandler} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
