import React from "react";
import ImageDisplay from "./ImageDisplay";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const Topic = props => {
  return (
    <Link to={`/topics/${props.topic.id}`}>
      <Card id={props.topic.id}>
        <h4 className="content" id={props.topic.id}>
          Topic: {props.topic.name}
        </h4>
        <ImageDisplay image={props.images[0]} />
      </Card>
    </Link>
  );
};
export default Topic;
