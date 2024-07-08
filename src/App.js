import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.asin === product.asin);
      if (existingItem) {
        return prevItems.map((item) =>
          item.asin === product.asin
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/categoty/:id"
          element={<ProductPage addToCart={handleAddToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={handleAddToCart} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
