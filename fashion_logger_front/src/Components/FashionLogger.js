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
      user: [],
      newPicInfo: {
        title: "",
        url: "",
        tag: "",
        topicId: ""
      },
      newTopicInfo: {}
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

  newPicSubmitHandler = e => {
    e.preventDefault();
    let topicId = e.target.id;
    this.setState({
      newPicInfo: { ...this.state.newPicInfo, topicId: topicId }
    });
  };

  newPicChangeHandler = e => {
    console.log(e.target);
    let value = e.target.value;
    let name = e.target.name;
    let userId = this.state.user.id;
    switch (name) {
      case "title":
        this.setState({
          newPicInfo: { ...this.state.newPicInfo, title: value }
        });
        break;
      case "url":
        this.setState({
          newPicInfo: { ...this.state.newPicInfo, url: value }
        });
        break;
      case "tag":
        this.setState({
          newPicInfo: { ...this.state.newPicInfo, tag: value }
        });
        break;
      case "tag":
        this.setState({
          newPicInfo: { ...this.state.newPicInfo, userId: userId }
        });
        break;
    }
  };

  render() {
    console.log("render", this.state.newPicInfo);
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
                <NewPic
                  info={this.state.user}
                  topicId={match.params.id}
                  newPicSubmitHandler={this.newPicSubmitHandler}
                  newPicChangeHandler={this.newPicChangeHandler}
                  newPicTitle={this.state.newPicInfo.title}
                  newPicUrl={this.state.newPicInfo.url}
                  newPicTag={this.state.newPicInfo.tag}
                />
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
