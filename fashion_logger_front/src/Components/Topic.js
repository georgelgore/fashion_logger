import React from "react";
import ImageLister from "./ImageLister";
import { Card } from "semantic-ui-react";

const Topic = props => {
  console.log("topic", props);
  return (
    <Card>
      <h4 className="content">Topic: {props.topic.name}</h4>
      <ImageLister images={props.images} />
    </Card>
  );
};

export default Topic;
