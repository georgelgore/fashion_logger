import React, { Component } from "react";
import User from "./User";
import TopicDisplay from "./TopicDisplay";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";

class FashionLogger extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
      .then(arr =>
        this.setState({
          user: arr[0]
        })
      );
  }

  render() {
    console.log("render", this.state);
    return (
      <div>
        <h1> Welcome to the Body of Fashion Logger</h1>
        <User info={this.state.user} clicked={this.state.clicked} />
        <Switch>
          <Route
            path="/topics/:id"
            render={({ match }) => {
              return (
                <TopicDisplay info={this.state.user} id={match.params.id} />
              );
            }}
          />

          <Route path="/edit" component={Edit} />
        </Switch>
      </div>
    );
  }
}

export default FashionLogger;
