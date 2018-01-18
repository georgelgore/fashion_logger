import React from "react";
import Image from "./Image";

const ImageLister = props => {
  console.log("ImageLister,", props);
  return (
    <div>
      <h3>ImageLister</h3>
      {props.images.map(img => <Image key={img.id} image={img} />)}
    </div>
  );
};

export default ImageLister;
