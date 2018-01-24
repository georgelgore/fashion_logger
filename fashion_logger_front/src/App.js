import React, { Component } from "react";
import "./App.css";
import FashionLogger from "./Components/FashionLogger";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import NewUser from "./Components/NewUser";

class App extends Component {
  state = {
    auth: { currentUser: {} },
    newUser: {
      username: "",
      email: "",
      password: ""
    }
  };

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
    console.log("HELLO");
  };

  handleNewUser = e => {
    let value = e.target.value;
    let name = e.target.name;
    switch (name) {
      case "username":
        this.setState({
          newUser: { ...this.state.newUser, username: value }
        });
        break;
      case "email":
        this.setState({
          newUser: { ...this.state.newUser, email: value }
        });
        break;
      case "password":
        this.setState({
          newUser: { ...this.state.newUser, password: value }
        });
        break;
      default:
        break;
    }
  };

  addUser = newUserData => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: newUserData.username,
          email: newUserData.email,
          password: newUserData.password
        }
      })
    }).then(resp => this.props.history.push("/login"));
  };

  newUserSubmitHandler = e => {
    e.preventDefault();
    this.addUser(this.state.newUser);
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
                return (
                  <FashionLogger
                    {...props}
                    currentUser={this.state.auth.currentUser}
                  />
                );
              }}
            />
            <Route
              path="/users/new"
              render={props => {
                return (
                  <NewUser
                    newUserInfo={this.state.newUser}
                    handleNewUser={this.handleNewUser}
                    submitHandler={this.newUserSubmitHandler}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
