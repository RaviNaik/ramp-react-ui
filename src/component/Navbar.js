import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const img = require("../component/utils/images/logo192.png");

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src={img}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Ramp Event
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navbar;
