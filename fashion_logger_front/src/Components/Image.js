import React from "react";

const Image = props => {
  console.log("image:", props);
  return (
    <div>
      <img height="200" src={props.image.url} alt={props.image.title} />
    </div>
  );
};

export default Image;
