import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Youngistaan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Community-Services</Nav.Link>
            <NavDropdown title="Volunteer" id="basic-nav-dropdown">
              <NavDropdown.Item href="/leaderboard">Check My rank</NavDropdown.Item>
              <NavDropdown.Item href="">
                Status
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/basictable">Approval</Nav.Link>
          </Nav>
         
          <div>
            <Link
              className="btn btn-primary nav-link text-white"
              to="/Register"
              value="Register"
            >
              Register
            </Link>
          </div>
          <div>
            <Link
              className="btn btn-primary nav-link text-white"
              to="/SignIn"
              value="SignIn"
            >
              Sign In
            </Link>
          </div>
          <div>
            <Link
              className="btn btn-success nav-link text-white"
              to="/info"
              value="Data"
            >
              Data
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
