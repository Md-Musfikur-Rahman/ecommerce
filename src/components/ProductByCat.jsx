// import { useEffect, useState } from "react";
// import { fetchProductByCat } from "../services/api";
import { Link } from "react-router-dom";
import ProductByCata from "../ProductByCat.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductByCat = ({ addToCart }) => {
  // const [productCategories, setProductCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getProductCategories = async () => {
  //     try {
  //       const result = await fetchProductByCat();
  //       console.log("Fetched result:", result);
  //       if (result && result.status === "OK") {
  //         setProductCategories(result.data.products);
  //       } else {
  //         throw new Error("Failed to fetch product categories");
  //       }
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getProductCategories();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <Container>
      <h1>Product Categories</h1>
      {ProductByCata.length === 0 ? (
        <p>No products found</p>
      ) : (
        <Row>
          {ProductByCata.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={product.product_photo}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
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
                    <div>
                      <strong>Offers:</strong> {product.product_num_offers}
                    </div>
                    {product.is_best_seller && (
                      <div>
                        <strong>Best Seller</strong>
                      </div>
                    )}
                    {product.is_amazon_choice && (
                      <div>
                        <strong>Amazon's Choice</strong>
                      </div>
                    )}
                    {product.is_prime && (
                      <div>
                        <strong>Prime Eligible</strong>
                      </div>
                    )}
                    {product.climate_pledge_friendly && (
                      <div>
                        <strong>Climate Pledge Friendly</strong>
                      </div>
                    )}
                    <div>
                      <strong>Sales Volume:</strong> {product.sales_volume}
                    </div>
                    <div>
                      <strong>Delivery:</strong> {product.delivery}
                    </div>
                    {product.has_variations && (
                      <div>
                        <strong>Variations Available</strong>
                      </div>
                    )}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => addToCart(product)}
                    className="me-2"
                  >
                    Add to Cart
                  </Button>
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
      )}
    </Container>
  );
};

export default ProductByCat;
