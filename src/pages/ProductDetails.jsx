import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductByCata from "../ProductByCat.json";
import { fetchProductDetails } from '../services/api';
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const fallbackProduct = ProductByCata.find((p) => p.asin === id);
        setProduct(fallbackProduct);
      } catch (error) {
        console.error("API call failed, using fallback JSON data", error);
        const fetchedProduct = await fetchProductDetails(id);
        setProduct(fetchedProduct);
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className="container" style={{ padding: "20px" }}>
      <Row>
        <Col xs={12} md={6}>
          <Image
            src={product.product_photo}
            alt={product.product_title}
            style={{ maxHeight: "400px", marginBottom: "20px", mx: "auto" }}
          />
        </Col>
        <Col xs={12} md={6}>
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
            {product.product_star_rating} ({product.product_num_ratings}{" "}
            ratings)
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
          <Link to="/checkout">
            <Button
              variant="primary"
              style={{ marginTop: "20px" }}
              onClick={() => addToCart(product)}
            >
              Buy Now
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
