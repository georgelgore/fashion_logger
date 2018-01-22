import React from "react";
import ImageLister from "./ImageLister";
import { Link } from "react-router-dom";
import { Container, Button, Segment, Icon, Header } from "semantic-ui-react";

const TopicDisplay = props => {
  const images = props.info.images ? props.info.images : [];
  const topics = props.info.topics ? props.info.topics : [];
  const filteredImages = images.filter(img => {
    return img.topic_id === parseInt(props.id, 10);
  });
  const filteredTopic = topics.filter(top => {
    return top.id === parseInt(props.id, 10);
  });
  const nameToDisplay = filteredTopic[0] ? filteredTopic[0].name : "loading";

  return (
    <Container style={{ marginTop: "5.25em" }}>
      <Segment float tertiary>
        <Segment>
          <Header as="h1">{nameToDisplay}</Header>
        </Segment>
        <ImageLister images={filteredImages} />
      </Segment>
      <Button float="right">
        <Link to={`/topics/${props.id}/new`}>
          <Icon name="photo" />Add Picture
        </Link>
      </Button>
    </Container>
  );
};
export default TopicDisplay;
