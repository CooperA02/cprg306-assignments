import React from "react";

function Item({ name, quantity, category }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", marginBottom: "10px" }}>
      <strong>{name}</strong> - Quantity: {quantity}, Category: {category}
    </div>
  );
}

export default Item;
