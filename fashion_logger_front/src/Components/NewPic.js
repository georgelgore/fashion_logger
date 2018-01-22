import React from "react";
import {
  Form,
  Container,
  Segment,
  Button,
  Header,
  Image
} from "semantic-ui-react";

const NewPic = props => {
  return (
    <Container style={{ marginTop: "5.00em" }}>
      <Segment inverted>
        <Header>Add Picture to Topic</Header>
        <Form onSubmit={props.newPicSubmitHandler} id={props.topicId} inverted>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Image Title"
              icon="image"
              value={props.newPicTitle}
              placeholder="Image Title"
              name="title"
              onChange={props.newPicChangeHandler}
            />
            <Form.Input
              fluid
              label="Image Tag"
              icon="tag"
              value={props.newPicTag}
              placeholder="Image Tag"
              name="tag"
              onChange={props.newPicChangeHandler}
            />
            <Form.Input
              fluid
              label="Image Url"
              icon="unlinkify"
              value={props.newPicUrl}
              placeholder="Image Url"
              name="url"
              onChange={props.newPicChangeHandler}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <Image
          centered
          size="large"
          src="https://media.giphy.com/media/7AK5VpRJ4l1hC/giphy.gif"
        />
      </Segment>
    </Container>
  );
};
export default NewPic;
