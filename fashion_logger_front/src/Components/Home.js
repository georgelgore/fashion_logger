import React from "react";
import { Image, Header, Segment, Container } from "semantic-ui-react";

const Home = props => {
  return (
    <div style={{ marginTop: "6.00em" }}>
      <Header textAlign="center" as="h1">
        Welcome to Fashion Logger
      </Header>
      <Image
        centered
        style={{ maxHeight: 500 }}
        src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/15/04/54c039d272b0b_-_hbz-april-2014-solange-knowles-5-xl-promo.jpg"
        // src="https://media.giphy.com/media/li0a9ltRF07Sw/giphy.gif"
      />
    </div>
  );
};
export default Home;
