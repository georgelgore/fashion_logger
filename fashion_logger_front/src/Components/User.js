import React from "react";
import TopicLister from "./TopicLister";
import { Link } from "react-router-dom";

const User = props => {
  return (
    <div>
      <h2>Welcome, {props.info.username}!</h2>
      <Link to="/topics/new">
        <button>Create New Topic</button>
      </Link>
      {props.info.topics ? (
        <TopicLister
          topics={props.info.topics}
          images={props.info.images}
          clicked={props.clicked}
        />
      ) : null}
    </div>
  );
};

export default User;
