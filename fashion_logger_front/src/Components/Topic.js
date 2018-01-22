import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

const Topic = props => {
  console.log("topic:", props);
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
          src={props.images[0] ? props.images[0].url : "https://goo.gl/8nV5Fe"}
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
