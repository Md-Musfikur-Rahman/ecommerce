import React from "react";
import ProductCategories from "../components/ProductCategories";
import Product from "../components/Product";

const HomePage = () => (
  <div className="container">
    <ProductCategories />
    <Product />
  </div>
);

export default HomePage;
