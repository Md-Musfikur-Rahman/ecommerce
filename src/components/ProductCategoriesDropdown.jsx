import React from "react";
import { Link } from "react-router-dom";
import ProductCategorie from "../ProductCategorie.json";
import { Dropdown } from "react-bootstrap";

const ProductCategoriesDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {ProductCategorie.map((product) => (
          <Dropdown.Item key={product.id}>
            <Link to={`/categoty/${product.id}`} 
            style={{ textDecoration: "none", color: "Black" }}>
              {product.name.trim()}
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProductCategoriesDropdown;
