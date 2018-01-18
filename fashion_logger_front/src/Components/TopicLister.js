import React from "react";
import Topic from "./Topic";

const TopicLister = props => {
  return (
    <div>
      {props.topics.map(top => {
        let images = props.images.map(img => {
          return img.topic_id === top.id ? img : null;
        });
        return <Topic key={top.id} topic={top} images={images} />;
      })}
    </div>
  );
};

export default TopicLister;
