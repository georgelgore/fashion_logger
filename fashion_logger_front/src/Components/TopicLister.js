import React from "react";
import Topic from "./Topic";
import { Card, Container } from "semantic-ui-react";

const TopicLister = props => {
  return (
    <Container>
      <Card.Group centered itemsPerRow={3}>
        {props.topics.map(top => {
          let images = props.images.filter(img => img.topic_id === top.id);
          return (
            <Topic
              key={top.id}
              id={top.id}
              topic={top}
              images={images}
              imgClickHandler={props.imgClickHandler}
              state={props.state}
            />
          );
        })}
      </Card.Group>
    </Container>
  );
};

export default TopicLister;
