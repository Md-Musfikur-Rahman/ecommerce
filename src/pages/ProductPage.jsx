import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductByCata from "../ProductByCat.json";
import ProductByCataTwo from "../ProductByCatTwo.json";
import ProductByCataThree from "../ProductByCatThree.json";
import ProductByCataFour from "../ProductByCatFour.json";
import ProductByCataFive from "../ProductByCatFive.json";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 40; // Products per page for pagination
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let allProducts = [];
        switch (id) {
          case "2478868010":
            allProducts = [
              ...ProductByCata,
              ...ProductByCataTwo,
              ...ProductByCataThree,
              ...ProductByCataFour,
              ...ProductByCataFive,
            ];
            break;
          case "2478868011":
            allProducts = ProductByCata.slice(0, 24);
            break;
          case "2478868012":
            allProducts = ProductByCata.slice(24);
            break;
          case "2478868013":
            allProducts = ProductByCataTwo.slice(0, 24);
            break;
          case "2478868014":
            allProducts = ProductByCataTwo.slice(24);
            break;
          case "2478868015":
            allProducts = ProductByCataThree.slice(0, 24);
            break;
          case "2478868016":
            allProducts = ProductByCataThree.slice(24);
            break;
          case "2478868017":
            allProducts = ProductByCataFour.slice(0, 24);
            break;
          case "2478868018":
            allProducts = ProductByCataFour.slice(24);
            break;
          case "2478868019":
            allProducts = ProductByCataFive.slice(0, 24);
            break;
          case "2478868020":
            allProducts = ProductByCataFive.slice(24);
            break;
          default:
            allProducts = ProductByCata; // Default case
            break;
        }
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [id]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <Container>
      <h1 className="my-4">All Products</h1>
      <Row>
        {currentProducts.map((product, index) => (
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
      {id === "2478868010" && (
        <Pagination className="my-4">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(
            (number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      )}
    </Container>
  );
};

export default ProductPage;
