import React from "react";
import { Form, Segment, Button, Image } from "semantic-ui-react";

const NewTopic = props => {
  return (
    <div id="bg2">
      <Segment inverted style={{ marginTop: "4.70em" }}>
        <h1>New Topic</h1>
        <Form inverted onSubmit={props.newTopicSubmitHandler}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Topic Name"
              icon="idea"
              placeholder="Topic Name"
              name="name"
              value={props.newTopicName}
              onChange={props.newTopicChangeHandler}
            />
            <Form.Input
              icon="tag"
              fluid
              label="Tag Category"
              placeholder="Tag Category"
              name="category"
              value={props.newTopicCategory}
              onChange={props.newTopicChangeHandler}
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
    </div>
  );
};
export default NewTopic;
