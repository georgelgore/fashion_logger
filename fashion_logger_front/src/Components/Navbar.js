import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu fixed="top" inverted size="large">
      <Menu.Item active>
        <Link to="/">
          <Icon name="home" />
        </Link>
      </Menu.Item>
      <Menu.Item active>
        <Link to="/topics">
          <Icon name="bars" />
          Topics
        </Link>
      </Menu.Item>
      <Menu.Item active>
        <Link to="/topics/new">
          <Icon name="plus" />Add New Topic
        </Link>
      </Menu.Item>
    </Menu>
  );
};
export default Navbar;
