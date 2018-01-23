import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const Navbar = props => {
  const loggedIn = !!props.currentUser.id;
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
      <Menu.Item active>
        <Link to="/topics/search">
          <Icon name="search" />Search Categories
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item active floated="true" right="true">
          {loggedIn ? (
            <div className="item">{`Welcome, ${
              props.currentUser.username
            }`}</div>
          ) : null}
          {loggedIn ? (
            <a>
              <Icon name="user" />Log Out
            </a>
          ) : (
            <Link to="/login">
              <Icon name="user" />Log In
            </Link>
          )}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
export default Navbar;
