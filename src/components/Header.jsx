import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Demo E-commerce</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  </header>
);

export default Header;
