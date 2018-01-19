import React from "react";
import ImageLister from "./ImageLister";
import ImageDisplay from "./ImageDisplay";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const Topic = props => {
  console.log("topic:", props);
  return (
    <Link to="/profile/1">
      <Card id={props.topic.id} onClick={props.imgClickHandler}>
        <h4 className="content" id={props.topic.id}>
          Topic: {props.topic.name}
        </h4>
        <ImageDisplay image={props.images[0]} />
      </Card>
    </Link>
  );
};
export default Topic;
