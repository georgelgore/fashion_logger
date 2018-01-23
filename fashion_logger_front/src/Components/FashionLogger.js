import React, { Component } from "react";
import User from "./User";
import TopicDisplay from "./TopicDisplay";
import { Switch, Route } from "react-router-dom";
import { Header } from "semantic-ui-react";
import NewTopic from "./NewTopic";
import NewPic from "./NewPic";
import Search from "./Search";

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
    fetch("http://localhost:3000/api/v1/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: newTopicData.title,
        url: newTopicData.url,
        tag: newTopicData.tag,
        topic_id: newTopicData.topicId
      })
    }).then(resp => {
      return fetch("http://localhost:3000/api/v1/users")
        .then(resp => resp.json())
        .then(arr =>
          this.setState({
            user: arr
          })
        );
    });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:3000/api/v1/users/${token}`)
        .then(resp => resp.json())
        .then(arr => {
          debugger;
          this.setState({
            user: arr
          });
        });
    } else {
      this.props.history.push("/login");
    }
  }
  newPicSubmitHandler = e => {
    e.preventDefault();
    let topicId = e.target.id;
    this.setState(
      {
        newPicInfo: { ...this.state.newPicInfo, topicId: parseInt(topicId, 10) }
      },
      () => this.addPic(this.state.newPicInfo)
    );
  };

  newPicChangeHandler = e => {
    console.log(this.state.users);
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
      default:
        break;
    }
  };

  render() {
    return (
      <div id="background-holder">
        <Switch>
          <Route
            path="/topics/new"
            render={args => {
              return <NewTopic />;
            }}
          />
          <Route
            path="/topics/search"
            render={() => {
              return (
                <div style={{ marginTop: "2.55em" }}>
                  <Search user={this.state.user} />;
                </div>
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
          <Route
            path="/topics"
            render={() => {
              return (
                <div clearing="true" style={{ marginTop: "5.25em" }}>
                  <div secondary="true">
                    <Header as="h1" textAlign="center">
                      Your Topics
                    </Header>
                    <User info={this.state.user} clicked={this.state.clicked} />
                  </div>
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
