import React from "react";
import { Segment, Form, Image } from "semantic-ui-react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      images: []
    };
  }

  updateSearchTerm = event => {
    this.setState(
      { searchTerm: event.target.value },
      console.log(this.state.searchTerm)
    );
  };

  render() {
    return (
      <Segment inverted style={{ marginTop: "5.25em" }}>
        <h1>Search Categories</h1>
        <Form inverted>
          <Form.Input
            fluid
            label="Topic Name"
            icon="tag"
            placeholder="Topic Name"
            name="name"
            onChange={this.updateSearchTerm}
            value={this.state.searchTerm}
          />
        </Form>
      </Segment>
    );
  }
}

export default Search;
