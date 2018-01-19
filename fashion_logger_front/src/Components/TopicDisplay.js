import React from "react";
import ImageLister from "./ImageLister";
import { Link } from "react-router-dom";

const TopicDisplay = props => {
  // let images = props.info.images.length ? (
  //   props.info.images.filter(img => {
  //     return img.topic_id === parseInt(props.id);
  //   })
  // ) : (
  //   {}
  // );

  const images = props.info.images ? props.info.images : [];

  const filteredImages = images.filter(img => {
    return img.topic_id === parseInt(props.id, 10);
  });
  return (
    <div>
      <Link to={`/topics/${props.id}/new`}>
        <button>Add Picture</button>
      </Link>
      <ImageLister images={filteredImages} />
    </div>
  );
};
export default TopicDisplay;
