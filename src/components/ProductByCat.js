// import { useEffect, useState } from "react";
// import { fetchProductByCat } from "../services/api";
import ProductByCata from "../ProductByCat.json";

const ProductByCat = () => {
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
    <div>
      <h1>Product Categories</h1>
      {ProductByCata.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {ProductByCata.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                overflow: "hidden",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={product.product_photo}
                style={{
                  width: "auto",
                  height: "200px",
                  display: "block",
                }}
                alt={product.product_title}
              />
              <div style={{ padding: "10px" }}>
                <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>
                  {product.product_title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <strong>Price:</strong>
                  <span style={{ marginLeft: "5px" }}>
                    {product.product_price}
                  </span>
                  {product.product_original_price && (
                    <span
                      style={{
                        marginLeft: "10px",
                        textDecoration: "line-through",
                        color: "#999",
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
                <button
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductByCat;
