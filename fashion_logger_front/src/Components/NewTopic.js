import React from "react";
import { Form, Segment, Button, Image } from "semantic-ui-react";

const NewTopic = () => {
  console.log("in new topic");
  return (
    <Segment inverted style={{ marginTop: "5.25em" }}>
      <h1>New Topic</h1>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Topic Name"
            icon="idea"
            placeholder="Topic Name"
            name="name"
          />
          <Form.Input
            icon="tag"
            fluid
            label="Tag Category"
            placeholder="Tag Category"
            name="tag"
          />
          <Form.Input
            icon="image"
            fluid
            label="Starter Image URL"
            placeholder="Starter Image URL"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <Image
        style={{ maxHeight: 400 }}
        centered
        src="https://www.manrepeller.com/wp-content/uploads/2016/10/rei-kawakubo-met-comme-des-garcons-man-repeller-getty-images.jpg"
        alt="CDG"
      />
    </Segment>
  );
};
export default NewTopic;
