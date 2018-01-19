import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/topics">
        {"    "}
        Topics
      </Link>
      <Link to="/edit">
        {"    "}
        Edit
      </Link>
    </div>
  );
};
export default Navbar;
