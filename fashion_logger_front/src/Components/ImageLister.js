import React from "react";
import Image from "./Image";
import { Card, Segment } from "semantic-ui-react";

const ImageLister = props => {
  return (
    <Segment>
      <Card.Group centered itemsPerRow={4}>
        {props.images.map(img => (
          <Image
            key={img.id}
            image={img}
            id={props.id}
            topicId={props.topicId}
          />
        ))}
      </Card.Group>
    </Segment>
  );
};

export default ImageLister;
