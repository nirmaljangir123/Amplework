import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import amplelogo from "../../assets/logo/amplworkLogo.png";
import '../header/Allcss.css'
const TopNavbar = (props) => {
  return (
    <Navbar expand="lg" className="bgopicity">
      <Container fluid>
        <Navbar.Brand href="#" className="col-2  ">
          <img src={amplelogo} width="230px" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="col-7 offset-lg-3 fw-bold"
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
    </Navbar>
  );
};

export default TopNavbar;

{
  /* <Nav>
<Nav.Link href="#action1">What we do</Nav.Link>
<Nav.Link href="#action2">Our culture</Nav.Link>
<Nav.Link href="#action1">Work with us</Nav.Link>
<Nav.Link href="#action2">Case studies</Nav.Link>
<Nav.Link href="#action1">Blog</Nav.Link>
<Nav.Link href="#action2">Contact Us</Nav.Link>
<Button variant="outline-success">Search</Button>
</Nav> */
}
