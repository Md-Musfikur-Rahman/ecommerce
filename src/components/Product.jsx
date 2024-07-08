import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductByCata from "../ProductByCat.json";
import { fetchDealProducts } from "../services/api";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchDealProducts();
        if (fetchedProducts.length > 0) {
          setProducts(fetchedProducts.slice(0, 12));
        } else {
          setProducts(ProductByCata.slice(0, 12));
        }
      } catch (error) {
        console.error("API call failed, using fallback JSON data", error);
        setProducts(ProductByCata.slice(0, 12));
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="my-4">
      <h2 className="my-4">Popular Products</h2>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4 product-card">
              <Card.Img
                variant="top"
                src={product.product_photo}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="product-details">
                <Card.Title>{product.product_title}</Card.Title>
                <Card.Text>
                  <div>
                    <strong>Price:</strong> {product.product_price}
                    {product.product_original_price && (
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "#999",
                          marginLeft: "10px",
                        }}
                      >
                        {product.product_original_price}
                      </span>
                    )}
                  </div>
                  <div>
                    <strong>Rating:</strong> {product.product_star_rating} (
                    {product.product_num_ratings} ratings)
                  </div>
                </Card.Text>
                <Button
                  variant="primary"
                  as={Link}
                  to={`/product/${product.asin}`}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
