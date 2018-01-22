import React from "react";
import { Image } from "semantic-ui-react";

const ImageDisplay = props => {
  return (
    <Image
      style={{ maxHeight: 250 }}
      centered
      id={props.image.topic_id}
      src={props.image.url}
      alt={props.image.title}
    />
  );
};

export default ImageDisplay;
