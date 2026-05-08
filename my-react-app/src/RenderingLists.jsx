import React from "react";

const products = [
  { title: "MNV", id: 1 },
  { title: "MKU", id: 2 },
  { title: "BMH", id: 3 },
];
export default function RenderingLists() {
  const listItems = products.map((product) => (
    <li key={product.id} style={{ color: "black" }}>
      {product.title}
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
