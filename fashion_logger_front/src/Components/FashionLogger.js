import React, { Component } from "react";
import User from "./User";
import TopicDisplay from "./TopicDisplay";
import { Switch, Route, withRouter } from "react-router-dom";
import { Header, Segment, Container } from "semantic-ui-react";
import NewTopic from "./NewTopic";
import NewPic from "./NewPic";

class FashionLogger extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      current_user: "",
      newPicInfo: {
        title: "",
        url: "",
        tag: "",
        topicId: ""
      },
      newTopicInfo: {
        name: "",
        user_id: "",
        category: ""
      }
    };
  }

  addPic = newPicData => {
    fetch("http://localhost:3000/api/v1/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: newPicData.title,
        url: newPicData.url,
        tag: newPicData.tag,
        topic_id: newPicData.topicId
      })
    }).then(resp => {
      return fetch("http://localhost:3000/api/v1/users")
        .then(resp => resp.json())
        .then(arr =>
          this.setState({
            user: arr[0]
          })
        );
    });
  };

  addTopic = newTopicData => {
    fetch("http://localhost:3000/api/v1/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: newTopicData.name,
        user_id: newTopicData.user_id,
        category: newTopicData.category
      })
    })
      .then(resp => {
        return fetch("http://localhost:3000/api/v1/users")
          .then(resp => resp.json())
          .then(arr =>
            this.setState({
              user: arr[0]
            })
          );
      })
      .then(resp => this.props.history.push("/topics"));
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
      .then(arr =>
        this.setState({
          user: arr[0],
          current_user: arr[0].id
        })
      );
  }
  newPicSubmitHandler = e => {
    e.preventDefault();
    let topicId = e.target.id;
    this.setState(
      {
        newPicInfo: { ...this.state.newPicInfo, topicId: parseInt(topicId) }
      },
      () => this.addPic(this.state.newPicInfo)
    );
  };

  newTopicSubmitHandler = e => {
    console.log("in Submit Handler");
    e.preventDefault();
    this.addTopic(this.state.newTopicInfo);
  };

  newPicChangeHandler = e => {
    console.log(e.target);
    let value = e.target.value;
    let name = e.target.name;
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
    }
  };

  newTopicChangeHandler = e => {
    let value = e.target.value;
    let name = e.target.name;
    console.log(e.target);
    console.log(name);
    switch (name) {
      case "name":
        this.setState({
          newTopicInfo: {
            ...this.state.newTopicInfo,
            name: value,
            user_id: this.state.current_user
          }
        });
        break;
      case "category":
        this.setState({
          newTopicInfo: {
            ...this.state.newTopicInfo,
            category: value,
            user_id: this.state.current_user
          }
        });
        break;
    }
  };

  render() {
    console.log("render from FLogger");
    return (
      <div id="background-holder">
        <Switch>
          <Route
            path="/topics"
            exact
            render={() => {
              return (
                <div clearing style={{ marginTop: "5.25em" }}>
                  <div secondary>
                    <Header as="h1" textAlign="center">
                      Your Topics
                    </Header>
                    <User info={this.state.user} clicked={this.state.clicked} />
                  </div>
                </div>
              );
            }}
          />
          <Route
            path="/topics/new"
            exact
            render={args => {
              return (
                <NewTopic
                  userId={this.state.current_user}
                  newTopicChangeHandler={this.newTopicChangeHandler}
                  newTopicSubmitHandler={this.newTopicSubmitHandler}
                  newTopicName={this.state.newTopicInfo.name}
                  newTopicCategory={this.state.newTopicInfo.category}
                  newTopicSubmitHandler={this.newTopicSubmitHandler}
                />
              );
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
        </Switch>
      </div>
    );
  }
}

export default withRouter(FashionLogger);
