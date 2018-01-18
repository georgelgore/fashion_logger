import React from "react";
import TopicLister from "./TopicLister";

const User = props => {
  console.log("user:", props.info);
  return (
    <div>
      <h2>Welcome, {props.info.username}!</h2>
      {props.info.topics ? (
        <TopicLister topics={props.info.topics} images={props.info.images} />
      ) : null}
    </div>
  );
};

export default User;
