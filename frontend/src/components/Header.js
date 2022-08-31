import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'

 const Header = () => {
  return (
    <header>
      <Navbar bg="dark"  variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">proShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav style={{marginLeft: 'auto'}}>
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart" aria-hidden="true" style={{margin:'0px 5px 0px 5px'}}></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user" aria-hidden="true" style={{margin:'0px 5px 0px 5px'}}></i>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
 }

 export default Header;