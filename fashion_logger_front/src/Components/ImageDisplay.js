import React from "react";

const ImageDisplay = props => {
  return (
    <div id={props.image.topic_id}>
      <img
        height="200"
        src={props.image.url}
        alt={props.image.title}
        id={props.id}
      />
    </div>
  );
};

export default ImageDisplay;
