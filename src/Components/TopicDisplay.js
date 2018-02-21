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
    <div id="bg2">
      <Container style={{ marginTop: "5.50em" }}>
        <Segment float="true" tertiary>
          <Segment>
            <Header as="h1">{nameToDisplay}</Header>
          </Segment>
          <ImageLister images={filteredImages} />
        </Segment>
        <Link to={`/topics/${props.id}/new`}>
          <Button fluid>
            <Icon name="photo" />Add Picture
          </Button>
        </Link>
      </Container>
    </div>
  );
};
export default TopicDisplay;
