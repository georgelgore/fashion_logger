import React from "react";
import ImageLister from "./ImageLister";
import ImageDisplay from "./ImageDisplay";
const topic = { id: 1, name: "Hypebeast", user_id: 1, category: "Streetwear" };
const TopicDisplay = props => {
  console.log("topic disp id:", props.info.id);
  console.log("topic display:", props.info.images);
  // let images = props.info.images.length ? (
  //   props.info.images.filter(img => {
  //     return img.topic_id === parseInt(props.id);
  //   })
  // ) : (
  //   {}
  // );

  const images = props.info.images ? props.info.images : [];

  const filteredImages = images.filter(img => {
    return img.topic_id === parseInt(props.id);
  });
  return (
    <div>
      {console.log("images", images)}
      <ImageLister images={filteredImages} />
    </div>
  );
};
export default TopicDisplay;
