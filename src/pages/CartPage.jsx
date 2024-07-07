import React from "react";

const CartPage = ({ cartItems, setCartItems }) => {
  const calculateTotalPrice = (price, quantity) => {
    const numericPrice = parseFloat(price.replace("$", ""));
    return numericPrice * quantity;
  };

  const handleQuantityChange = (asin, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.asin === asin ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const handleRemoveItem = (asin) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.asin !== asin));
  };

  const grandTotal = cartItems.reduce(
    (total, item) =>
      total + calculateTotalPrice(item.product_price, item.quantity),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Product Image
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Product Name
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Price
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Quantity
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Total Price
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.asin}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <img
                    src={item.product_photo}
                    alt={item.product_title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.product_title}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.product_price}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.asin, e.target.value)
                    }
                    style={{ width: "50px" }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  $
                  {calculateTotalPrice(
                    item.product_price,
                    item.quantity
                  ).toFixed(2)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button
                    onClick={() => handleRemoveItem(item.asin)}
                    style={{
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      borderRadius: "3px",
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td
                colSpan="4"
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "right",
                }}
              >
                <strong>Grand Total</strong>
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <strong>${grandTotal.toFixed(2)}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartPage;
