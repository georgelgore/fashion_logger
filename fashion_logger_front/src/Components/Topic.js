import React from "react";
import ImageLister from "./ImageLister";
import ImageDisplay from "./ImageDisplay";
import { Card } from "semantic-ui-react";

const Topic = props => {
  console.log("topic", props.clicked);
  return (
    <Card id={props.topic.id} onClick={props.imgClickHandler}>
      <h4 className="content" id={props.topic.id}>
        Topic: {props.topic.name}
      </h4>
      {props.clicked[0] === props.id ? (
        <ImageLister images={props.images} topicId={props.id} />
      ) : (
        <ImageDisplay image={props.images[0]} />
      )}
    </Card>
  );
};

export default Topic;
