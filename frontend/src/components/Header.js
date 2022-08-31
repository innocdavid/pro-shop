import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from "react";

 const Header = () => {
  return (
    <header>
      <Navbar bg="dark"  variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>proShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav style={{marginLeft: 'auto'}}>
              <LinkContainer to='/cart'>
                <Nav.Link ><i className="fas fa-shopping-cart" aria-hidden="true" style={{margin:'0px 5px 0px 5px'}}></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-user" aria-hidden="true" style={{margin:'0px 5px 0px 5px'}}></i>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
 }

 export default Header;