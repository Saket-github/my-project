import React from "react";

function ProductCard({ name, price, status }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "15px",
        width: "180px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProductCard;
