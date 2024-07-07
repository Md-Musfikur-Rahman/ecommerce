import React from "react";
import Cart from "../components/Cart";

const CheckoutPage = ({ cartItems }) => (
  <div>
    <Cart cartItems={cartItems} />
  </div>
);

export default CheckoutPage;
