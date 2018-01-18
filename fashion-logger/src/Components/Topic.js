import React from "react";
import ImageLister from "./ImageLister";

const Topic = props => {
  console.log("topic", props);
  return (
    <div>
      <h4>Topic: {props.topic.name}</h4>
      <ImageLister images={props.images} />
    </div>
  );
};

export default Topic;
