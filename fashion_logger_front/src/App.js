import React, { Component } from "react";
import "./App.css";
import FashionLogger from "./Components/FashionLogger";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";

class App extends Component {
  state = { auth: { currentUser: {} } };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/api/v1/current_user", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token
        }
      })
        .then(resp => resp.json())
        .then(user => {
          const currentUser = { currentUser: user };
          this.setState({ auth: currentUser });
        });
    }
  }

  handleLogin = user => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.id);
    this.setState({ auth: currentUser });
  };
  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };
  render() {
    return (
      <div>
        <Navbar
          currentUser={this.state.auth.currentUser}
          handleLogout={this.handleLogout}
        />
        <div>
          <Switch>
            <Route
              path="/login"
              render={routerProps => {
                return (
                  <Login
                    history={routerProps.history}
                    handleLogin={this.handleLogin}
                  />
                );
              }}
            />
            <Route exact path="/" component={Home} />
            <Route
              path="/topics"
              render={props => {
                return <FashionLogger {...props} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
