import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container fluid className="footer py-4 bg-dark text-white ">
      <Row className="justify-content-around">
        <Col md={3} className="mb-3">
          <h5>Contact Us</h5>
          <p>
            <strong>Email:</strong> support@demo.com
            <br />
            <strong>Phone:</strong> +123 456 7890
            <br />
            <strong>Address:</strong> 123 Demo Street, City, Country
          </p>
        </Col>
        <Col md={2} className="mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/checkout" className="text-white">
                Checkout
              </a>
            </li>
            <li>
              <a href="/cart" className="text-white">
                Cart
              </a>
            </li>
          </ul>
        </Col>
        <Col md={2} className="mb-3">
          <h5>Follow Us</h5>
          <a href="https://www.facebook.com" className="text-white mx-2">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <br />
          <a href="https://www.twitter.com" className="text-white mx-2">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          <br />
          <a href="https://www.instagram.com" className="text-white mx-2">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Demo E-commerce. All rights
            reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
