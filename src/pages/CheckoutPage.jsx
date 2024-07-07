import React from "react";

const CheckoutPage = ({ cartItems }) => {
  const calculateTotalPrice = (price, quantity) => {
    const numericPrice = parseFloat(price.replace("$", ""));
    return numericPrice * quantity;
  };

  const grandTotal = cartItems.reduce(
    (total, item) =>
      total + calculateTotalPrice(item.product_price, item.quantity),
    0
  );
  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Keep Shoping for checkout</p>
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
                  {item.quantity}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  $
                  {calculateTotalPrice(
                    item.product_price,
                    item.quantity
                  ).toFixed(2)}
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

export default CheckoutPage;
