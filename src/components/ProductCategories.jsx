import { useState } from "react";
// import { fetchProducts } from "../services/api";
import { Link } from "react-router-dom";
import ProductCategorie from "../ProductCategorie.json";
import { Container, Form, ListGroup } from "react-bootstrap";

const ProductCategories = () => {
  // const [productCategories, setProductCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getProductCategories = async () => {
  //     try {
  //       const result = await fetchProducts();
  //       console.log("Fetched result:", result);
  //       if (result && result.status === "OK") {
  //         setProductCategories(result.data);
  //       } else {
  //         throw new Error("Failed to fetch product categories");
  //       }
  //     } catch (error) {
  //       setError(error);
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
  //   return <div>Error: {error.message}</div>;
  // }

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      const filtered = ProductCategorie.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase().trim())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Product Categories</h1>
      <Form.Control
        type="text"
        placeholder="Search products by categories"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredProducts.length > 0 && (
        <ListGroup>
          {filteredProducts.map((product) => (
            <ListGroup.Item key={product.id} as="div">
              <Link
                to={`/product`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {product.name.trim()}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default ProductCategories;
