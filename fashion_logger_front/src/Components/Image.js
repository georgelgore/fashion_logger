import React from "react";
import { Image, Card, Icon, Popup } from "semantic-ui-react";

const Image2 = props => {
  return (
    <Card centered className="image content" id={props.topicId}>
      <Image
        centered
        className="image"
        size="huge"
        src={props.image.url}
        alt={props.image.title}
        id={props.id}
      />
      <Card.Meta>
        <Popup trigger={<Icon name="tag" />} content={props.image.url} />
        {props.image.tag}
      </Card.Meta>
    </Card>
  );
};

export default Image2;
