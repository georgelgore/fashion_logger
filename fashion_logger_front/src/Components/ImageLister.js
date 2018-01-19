import React from "react";
import Image from "./Image";

const ImageLister = props => {
  console.log("ImageLister,", props);
  return (
    <div>
      {props.images.map(img => (
        <Image key={img.id} image={img} id={props.id} topicId={props.topicId} />
      ))}
    </div>
  );
};

export default ImageLister;
