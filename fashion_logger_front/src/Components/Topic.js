import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

const Topic = props => {
  return (
    <Card
      size="medium"
      color="teal"
      id={props.topic.id}
      onClick={props.imgClickHandler}
    >
      <Link to={`/topics/${props.topic.id}`}>
        <Image
          centered
          style={{ maxHeight: 350, minHeight: 350 }}
          src={
            props.images[0]
              ? props.images[0].url
              : "https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/15/04/54c039d272b0b_-_hbz-april-2014-solange-knowles-5-xl-promo.jpg"
          }
        />
        <Card.Content>
          <Card.Header as="h2" textAlign="center" id={props.topic.id}>
            {props.topic.name}
          </Card.Header>
          <Card.Meta>
            <Icon name="tag" />
            {props.topic.category}
          </Card.Meta>
        </Card.Content>
      </Link>
    </Card>
  );
};
export default Topic;
