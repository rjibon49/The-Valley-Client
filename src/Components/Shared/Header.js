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
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const {user, lockDown} = useAuth();
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
              className="mx-auto my-2 my-lg-0 fs-4"
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
              {/* <Nav.Link className="ms-2 text-white" as={Link} to="/dashboard">
              Dashboard
              </Nav.Link> */}
              
              {
                user.email ? 
                <p></p>
                :
                <Nav.Link className="ms-2 text-white" as={Link} to="/signup">
              SignIn
              </Nav.Link>
              }
              
              <NavDropdown className="ms-2" title="user" id="navbarScrollingDropdown">
                {
                  user.email ? <small className="m-auto text-center" >{user.displayName}</small> :
                        <h5 className="m-auto">{user.email}</h5>
                }
                <NavDropdown.Divider />
                <NavDropdown.Item className="fs-5 text-center mb-2" as={Link} to="/mybooking">My Booking</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={lockDown} className="fs-4 text-center mb-2">LogOut</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className="ms-2" title="Dashboard" id="navbarScrollingDropdown">
                <NavDropdown.Item className="fs-5 text-center mb-3" as={Link} to="/addservice">Add Service</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="fs-4 text-center mb-3" as={Link} to="/allservice">All Service</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="fs-4 text-center mb-3" as={Link} to="/allbooking">All Booking</NavDropdown.Item>
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
