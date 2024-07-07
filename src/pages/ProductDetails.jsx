import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductByCata from "../ProductByCat.json";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = ProductByCata.find((p) => p.asin === id);
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.product_photo}
        alt={product.product_title}
        style={{ maxWidth: "400px", marginBottom: "20px" }}
      />
      <h1>{product.product_title}</h1>
      <p>
        <strong>Price: </strong>
        {product.product_price}{" "}
        {product.product_original_price && (
          <span style={{ textDecoration: "line-through", color: "#999" }}>
            {product.product_original_price}
          </span>
        )}
      </p>
      <p>
        <strong>Rating: </strong>
        {product.product_star_rating} ({product.product_num_ratings} ratings)
      </p>
      <p>
        <strong>Offers: </strong>
        {product.product_num_offers}
      </p>
      {product.is_best_seller && (
        <p>
          <strong>Best Seller</strong>
        </p>
      )}
      {product.is_amazon_choice && (
        <p>
          <strong>Amazon's Choice</strong>
        </p>
      )}
      {product.is_prime && (
        <p>
          <strong>Prime Eligible</strong>
        </p>
      )}
      {product.climate_pledge_friendly && (
        <p>
          <strong>Climate Pledge Friendly</strong>
        </p>
      )}
      <p>
        <strong>Sales Volume: </strong>
        {product.sales_volume}
      </p>
      <p>
        <strong>Delivery: </strong>
        {product.delivery}
      </p>
      {product.has_variations && (
        <p>
          <strong>Variations Available</strong>
        </p>
      )}
      <button
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
        onClick={() => addToCart(product)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetails;
