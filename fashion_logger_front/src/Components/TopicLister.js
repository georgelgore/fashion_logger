import React from "react";
import Topic from "./Topic";

const TopicLister = props => {
  return (
    <div>
      {props.topics.map(top => {
        let images = props.images.filter(img => img.topic_id === top.id);
        return (
          <Topic
            key={top.id}
            id={top.id}
            topic={top}
            images={images}
            imgClickHandler={props.imgClickHandler}
            clicked={props.clicked}
            state={props.state}
          />
        );
      })}
    </div>
  );
};

export default TopicLister;
