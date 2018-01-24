import React from "react";
import { Image, Header, Segment } from "semantic-ui-react";

const Home = props => {
  return (
    <Segment inverted style={{ marginTop: "5.50em" }}>
      <Header textAlign="center" as="h1">
        Welcome to Fashion Logger
      </Header>
      <Image
        centered
        style={{ maxHeight: 500 }}
        src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/15/04/54c039d272b0b_-_hbz-april-2014-solange-knowles-5-xl-promo.jpg"
      />
    </Segment>
  );
};
export default Home;
