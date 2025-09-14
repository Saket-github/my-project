import React from "react";
import ProductCard from "./Components/ProductCard";

function App() {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",   // horizontal center
        alignItems: "center",       // vertical center
        height: "100vh",            // full viewport height
      }}
    >
      <div
        style={{
          border: "2px solid black",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Products List</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // center cards
            gap: "20px",               // spacing between cards
          }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              status={product.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
