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
      current_user1: "",
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
      default:
        break;
    }
  };

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
    }).then(resp => this.props.history.push(`/topics/${newPicData.topicId}`));
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
        user_id: this.props.currentUser.id,
        category: newTopicData.category
      })
    }).then(resp => this.props.history.push("/topics"));
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:3000/api/v1/users/${token}`)
        .then(resp => resp.json())
        .then(arr => {
          this.setState({
            user: arr
          });
        });
    } else {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:3000/api/v1/users/${token}`)
        .then(resp => resp.json())
        .then(obj => {
          this.setState({
            user: obj,
            newPicInfo: {
              title: "",
              url: "",
              tag: "",
              topicId: ""
            }
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

  newTopicSubmitHandler = e => {
    console.log("in Submit Handler");
    e.preventDefault();
    this.addTopic(this.state.newTopicInfo);
    this.setState({
      newTopicInfo: {
        name: "",
        user_id: "",
        category: ""
      }
    });
  };

  render() {
    return (
      <div id="background-holder">
        <Switch>
          <Route
            path="/topics/new"
            exact
            render={args => {
              return (
                <NewTopic
                  userId={this.props.currentUser.id}
                  newTopicChangeHandler={this.newTopicChangeHandler}
                  newTopicSubmitHandler={this.newTopicSubmitHandler}
                  newTopicName={this.state.newTopicInfo.name}
                  newTopicCategory={this.state.newTopicInfo.category}
                />
              );
            }}
          />

          <Route
            path="/topics/search"
            render={() => {
              return (
                <div style={{ marginTop: "1em" }}>
                  <Search user={this.state.user} />
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
                <div clearing="true" style={{ marginTop: "5.35em" }}>
                  <div secondary="true" id="bg2">
                    <Header as="h1" inverted textAlign="center">
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
