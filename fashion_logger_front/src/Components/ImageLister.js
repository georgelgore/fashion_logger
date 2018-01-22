import React from "react";
import Image from "./Image";
import { Card } from "semantic-ui-react";

const ImageLister = props => {
  console.log("ImageLister,", props);
  return (
    <Card.Group centered itemsPerRow={2}>
      {props.images.map(img => (
        <Image key={img.id} image={img} id={props.id} topicId={props.topicId} />
      ))}
    </Card.Group>
  );
};

export default ImageLister;
