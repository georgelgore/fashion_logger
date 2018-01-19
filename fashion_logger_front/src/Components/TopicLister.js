import React from "react";
import Topic from "./Topic";
import { Link } from "react-router-dom";

const TopicLister = props => {
  return (
    <div>
      {props.topics.map(top => {
        let images = props.images.filter(img => img.topic_id === top.id);
        return (
          <Link to={`/topics/${top.id}`}>
            <Topic
              key={top.id}
              id={top.id}
              topic={top}
              images={images}
              imgClickHandler={props.imgClickHandler}
              clicked={props.clicked}
              state={props.state}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default TopicLister;
