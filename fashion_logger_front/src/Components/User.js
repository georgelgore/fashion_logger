import React, { Component } from "react";
import TopicLister from "./TopicLister";
import { Header, Container, Image } from "semantic-ui-react";

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
    return (
      <Container>
        <Header>Welcome, {this.props.info.username}!</Header>
        {this.props.info.topics ? (
          <TopicLister
            topics={this.props.info.topics}
            images={this.props.info.images}
            imgClickHandler={this.imgClickHandler}
            clicked={this.props.clicked}
          />
        ) : null}
      </Container>
    );
  }
}

export default User;
