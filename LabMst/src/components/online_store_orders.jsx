import React, { useState } from "react";

function OnlineStoreOrders() {
  const [orders, setOrders] = useState([
    { id: 1, product: "Laptop", status: "Shipped" },
    { id: 2, product: "Phone", status: "Processing" },
  ]);

  const [id, setId] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("");

  const addOrder = (e) => {
    e.preventDefault();
    if (!id || !product || !status) {
      alert("Please fill all fields!");
      return;
    }
    setOrders([...orders, { id: Number(id), product, status }]);
    setId("");
    setProduct("");
    setStatus("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px" }}> Online Store Orders</h2>

      <ul style={{ marginBottom: "20px" }}>
        {orders.map((order) => (
          <li key={order.id}>
            ID: {order.id}, Product: {order.product}, Status: {order.status}
          </li>
        ))}
      </ul>

      <form onSubmit={addOrder} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Order ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default OnlineStoreOrders;
