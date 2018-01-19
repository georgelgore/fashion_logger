import React, { Component } from "react";
import User from "./User";
import TopicDisplay from "./TopicDisplay";
import { Switch, Route } from "react-router-dom";
import NewTopic from "./NewTopic";
import NewPic from "./NewPic";

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
    return (
      <div>
        <Switch>
          <Route
            path="/topics/new"
            render={args => {
              return <NewTopic />;
            }}
          />
          <Route
            path="/topics/:id/new"
            render={({ match }) => {
              return (
                <NewPic info={this.state.user} topicId={match.params.id} />
              );
            }}
          />
          <Route
            path="/topics/:id"
            render={({ match }) => {
              return (
                <TopicDisplay info={this.state.user} id={match.params.id} />
              );
            }}
          />
          <Route
            path="/topics"
            render={() => {
              return (
                <div>
                  <h1> Welcome to the Body of Fashion Logger</h1>
                  <User info={this.state.user} clicked={this.state.clicked} />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default FashionLogger;
