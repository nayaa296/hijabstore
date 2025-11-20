import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" style={{ background: 'linear-gradient(to right, #fce4ec, #e0f7fa)' }}>
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{ fontFamily: 'Segoe Script, cursive', fontSize: '1.8rem', color: '#6a1b9a' }}
        >
          Aura Hijab
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/produk" style={{ color: '#4e342e', fontWeight: '500', marginLeft: '15px' }}>Produk</Nav.Link>
            <Nav.Link as={Link} to="/keranjang" style={{ color: '#4e342e', fontWeight: '500', marginLeft: '15px' }}>Keranjang</Nav.Link>
            <Nav.Link as={Link} to="/checkout" style={{ color: '#4e342e', fontWeight: '500', marginLeft: '15px' }}>Checkout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;