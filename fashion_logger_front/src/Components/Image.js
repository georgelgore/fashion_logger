import React from "react";

const Image = props => {
  return (
    <div className="image content" id={props.topicId}>
      <img
        className="image"
        height="200"
        src={props.image.url}
        alt={props.image.title}
        id={props.id}
      />
    </div>
  );
};

export default Image;
