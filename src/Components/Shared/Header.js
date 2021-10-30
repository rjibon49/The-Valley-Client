import React from "react";
import logo from "../../Images/logo.png";
import { Link, NavLink } from "react-router-dom";
import '../Style/globalStyle.css'
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar  expand="md" className="header-nav">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 fs-4"
              style={{  }}
              navbarScroll
            >
              <Nav.Link className="ms-2 text-white" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="ms-2 text-white" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="ms-2 text-white" as={Link} to="/destinations">
              Destinations
              </Nav.Link>
              <Nav.Link className="ms-2 text-white" as={Link} to="/dashboard">
              Dashboard
              </Nav.Link>
              <Nav.Link className="ms-2 text-white" as={Link} to="/signup">
              SignIn
              </Nav.Link>
              <NavDropdown className="ms-2" title="Dashboard" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/addservice">Add Service</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
