import React, { Component } from "react";
import "./App.css";
import FashionLogger from "./Components/FashionLogger";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";

class App extends Component {
  state = { auth: { currentUser: {} } };

  handleLogin = user => {
    const currentUser = { currentUser: user };
    this.setState({ auth: currentUser });
  };
  handleLogout = () => {
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
              render={args => {
                return <FashionLogger args={args} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
