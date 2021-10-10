import { Col, Row } from 'antd';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const HeaderNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><span style={{fontWeight: 800, fontSize: "1.3rem"}}>LCC JSSSTU</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Nav.Link class="nav-link" >Events</Nav.Link>
        <Nav.Link class="nav-link">Hackathons</Nav.Link>
        <Nav.Link class="nav-link">Blogs</Nav.Link>
        <Nav.Link class="nav-link">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default HeaderNav;
