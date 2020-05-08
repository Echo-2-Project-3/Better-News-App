import React from "react";
import { Navbar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "./Avatar.js";
import sprout from "../images/sprout.png";
import "../styles/nav.css";
import "../animation/logoanimation.css";

function Navybar(props) {
  return (
    <Navbar>
      <Col xs={2}>
        <Link to="/">
          <div>
            <div className="air">
              <img className="movement" src={sprout} />
            </div>
            <div className="shadow"></div>
          </div>
        </Link>
      </Col>
      <Col xs={1}>
        <Link to="/challenges">Challenges</Link>
      </Col>
      <Col xs={2}>
        <Link to="/profilepage">Profile Page</Link>
      </Col>
      <Col xs={6}></Col>
      <Col xs={1}>
        {" "}
        <div className="avatarbox">
          <Avatar />
        </div>
        <Link onClick={props.logoutUser}>Sign Out</Link>
      </Col>
    </Navbar>
  );
}

export default Navybar;
