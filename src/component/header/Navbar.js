import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import amplelogo from "../../assets/logo/amplworkLogo.png";
import "../header/Allcss.css";

// react offcanvas bar
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const TopNavbar = (props) => {
  const naviagte = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="">
      <Container fluid>
        <Navbar.Brand onClick={() => naviagte("/elevate")}>
          <img src={amplelogo} width="230px" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className=""
          onClick={handleShow}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          {/* <Offcanvas className="bg-info" show={show} onHide={handleClose} placement="end" >
            <Offcanvas.Header closeButton /> */}
          <Nav className="navbarhover fw-semibold ms-auto ">
            <NavLink to="/elevate" className="px-2">
              What we are
            </NavLink>
            <NavLink to="/elevate" className="px-2">
              What we do
            </NavLink>
            <NavLink to="/elevate" className="px-2">
              Our culture
            </NavLink>
            <NavLink to="/elevate" className="px-2">
              Work with us
            </NavLink>
            <NavLink to="/elevate " className="px-2">
              {" "}
              Case studies
            </NavLink>
            <NavLink to="/elevate" className="px-2">
              Blog
            </NavLink>
            <NavLink to="/elevate" className="px-2">
              Contact Us
            </NavLink>
            <Button variant="outline-warning px-4 rounded-pill fw-semibold">
              INQUERY NOW
            </Button>
          </Nav>
          {/* </Offcanvas> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;

{
  /* <Navbar expand="lg" className="bg-info" style={{background:'transparent'}}>
<Container fluid className="">
  <Navbar.Brand href="#" className="col-2  ">
    <img src={amplelogo} width="230px" />{" "}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse
    id="navbarScroll"
    className="col-7"
  >
    <Nav>
      <Nav.Link href="#action1">What we do</Nav.Link>
      <Nav.Link href="#action2">Our culture</Nav.Link>
      <Nav.Link href="#action1">Work with us</Nav.Link>
      <Nav.Link href="#action2">Case studies</Nav.Link>
      <Nav.Link href="#action1">Blog</Nav.Link>
      <Nav.Link href="#action2">Contact Us</Nav.Link>
      <Button variant="outline-warning px-4 py-1 rounded-pill fe-bold">
        INQUERY NOW
      </Button>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */
}
