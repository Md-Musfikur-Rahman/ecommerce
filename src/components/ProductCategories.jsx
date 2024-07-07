// import { useEffect, useState } from "react";
// import { fetchProducts } from "../services/api";
import { Link } from "react-router-dom";
import ProductCategorie from "../ProductCategorie.json";

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

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {ProductCategorie.map((product) => (
          <Link to="/product">
            <li key={product.id}>{product.name.trim()}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
