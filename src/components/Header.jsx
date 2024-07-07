import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartItems }) => {
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="py-2 d-flex justify-content-between">
        <div>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg"
              alt="Logo"
              className="d-inline-block align-top mx-1"
              width="30"
              height="30"
            />
            Demo E-commerce
          </Navbar.Brand>
        </div>

        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/checkout" className="nav-link-custom">
                Checkout
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                as={Link}
                to="/cart"
                className="nav-link-custom d-flex align-items-center"
              >
                <FaShoppingCart size={20} className="me-2" />
                <span>{cartItemCount}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
