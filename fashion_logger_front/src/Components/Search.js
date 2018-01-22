import React from "react";
import ImageLister from "./ImageLister";
import { Segment, Form, Image } from "semantic-ui-react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      images: [],
      toDisplay: []
    };
  }

  updateSearchTerm = event => {
    let toShow = this.state.images.filter(img =>
      img.tag.includes(event.target.value)
    );
    this.setState({ searchTerm: event.target.value, toDisplay: toShow });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ images: nextProps.user.images });
  }

  render() {
    console.log("inside", this.props.user.images);
    console.log("state", this.state);
    return (
      <Segment>
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
        <ImageLister images={this.state.toDisplay} />
      </Segment>
    );
  }
}

export default Search;
