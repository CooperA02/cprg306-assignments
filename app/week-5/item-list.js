'use client';
import React, { useState } from "react";
import items from './items.json';

const Item = ({ item }) => (
  <div>
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
);

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const [bgColor, setBgColor] = useState("#006400");

  const handleSortChange = (value) => {
    setSortBy(value);

    if (value === "name") {
      setBgColor("#006400");
    } else if (value === "category") {
      setBgColor("#00008b");
    }
  };

  return (
    <div style={{ textAlign: 'left', backgroundColor: bgColor, minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ color: '#ffffff' }}>Item List</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <div>
          <label style={{ color: '#ffffff' }}>
            Sort by:
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              style={{
                marginLeft: '5px',
                padding: '5px',
                cursor: 'pointer',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: '1px solid #ccc',
              }}
            >
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
          </label>
        </div>

        <div>
          <button
            onClick={() => handleSortChange("name")}
            style={{
              backgroundColor: sortBy === "name" ? "#006400" : "#ffffff",
              color: sortBy === "name" ? "#ffffff" : "#000000",
              padding: '8px 15px',
              marginRight: '5px',
              cursor: 'pointer',
              border: '1px solid #ccc',
            }}
          >
            Name
          </button>
          <button
            onClick={() => handleSortChange("category")}
            style={{
              backgroundColor: sortBy === "category" ? "#00008b" : "#ffffff",
              color: sortBy === "category" ? "#ffffff" : "#000000",
              padding: '8px 15px',
              cursor: 'pointer',
              border: '1px solid #ccc',
            }}
          >
            Category
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'left', alignItems: 'left' }}>
        {items
          .slice()
          .sort((a, b) => {
            if (sortBy === "name") {
              return a.name.localeCompare(b.name);
            } else if (sortBy === "category") {
              return a.category.localeCompare(b.category);
            }
            return 0;
          })
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
