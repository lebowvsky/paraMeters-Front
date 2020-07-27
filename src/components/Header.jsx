import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <header className="header">
      <h1>paraMeters</h1>
      {props.user.firstname && (
        <p className="nameTitle">{props.user.firstname}</p>
      )}
      <Link to="/">
      <FontAwesomeIcon
        className="pwrOff"
        icon={faPowerOff}
        size="2x"
      />
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
