import React, { Component } from "react";
import TopicLister from "./TopicLister";
import Topic from "./Topic";
import { Route, Switch } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toRoute: null
    };
  }

  imgClickHandler = e => {
    let id = parseInt(e.target.id, 10);
    console.log("in click handler");
    this.setState({ toRoute: id }, console.log("user state:", this.state));
  };

  toRender = () => {
    debugger;
    this.props.topics.filter(top => top.id === this.state.toRoute);
  };

  render() {
    console.log("user:", this.props);
    return (
      <div>
        <h2>Welcome, {this.props.info.username}!</h2>
        {this.props.info.topics ? (
          <TopicLister
            topics={this.props.info.topics}
            images={this.props.info.images}
            imgClickHandler={this.imgClickHandler}
            clicked={this.props.clicked}
          />
        ) : null}
      </div>
    );
  }
}

export default User;
