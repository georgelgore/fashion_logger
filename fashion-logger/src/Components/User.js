import React from "react";
import TopicLister from "./TopicLister";

const User = props => {
  // console.log(props.info.topics);
  return (
    <div>
      <h2>Welcome, {props.info.username}!</h2>
      <TopicLister topics={props.info.topics} />
    </div>
  );
};

export default User;
