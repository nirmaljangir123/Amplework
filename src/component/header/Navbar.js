import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import amplelogo from "../../assets/logo/amplworkLogo.png";
import "../header/Allcss.css";
const TopNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={amplelogo} width="230px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="ms-auto"></Nav>
          <Nav className="fw-semibold">
            <Nav.Link href="#action1">What we are</Nav.Link>
            <Nav.Link href="#action1">What we do</Nav.Link>
            <Nav.Link href="#action2">Our culture</Nav.Link>
            <Nav.Link href="#action1" className="">Work with us</Nav.Link>
            <Nav.Link href="#action2">Case studies</Nav.Link>
            <Nav.Link href="#action1">Blog</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <Button variant="outline-warning px-2 py-1 rounded-pill mx-2">
              INQUERY NOW
            </Button>
          </Nav>
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
