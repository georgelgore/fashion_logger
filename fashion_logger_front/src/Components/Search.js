import React from "react";
import ImageLister from "./ImageLister";
import { Segment, Form } from "semantic-ui-react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      images: [],
      toDisplay: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/images")
      .then(resp => resp.json())
      .then(arr => {
        this.setState({
          images: arr
        });
      });
  }

  updateSearchTerm = event => {
    let toShow = this.state.images.filter(img =>
      img.tag.includes(event.target.value)
    );
    this.setState({ searchTerm: event.target.value, toDisplay: toShow });
  };

  render() {
    console.log("inside", this.props.user.images);
    console.log("state", this.state);
    return (
      <div id="bg3">
        <Segment inverted>
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
          <ImageLister images={this.state.toDisplay} />
        </Segment>
      </div>
    );
  }
}

export default Search;
