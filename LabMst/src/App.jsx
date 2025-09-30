import React from "react";
import OnlineStoreOrders from "./components/online_store_orders";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",      
        height: "100vh",           
      }}
    >
      <div
        style={{
          border: "2px solid black",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <OnlineStoreOrders />
      </div>
    </div>
  );
}

export default App;
