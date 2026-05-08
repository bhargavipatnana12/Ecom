import React from "react";
const items = [
  {
    id: 1,
    name: "pen",
    isAvailable: true,
    cost: 8,
  },
  { id: 2, name: "pencil", isAvailable: true, cost: 5 },
  { id: 3, name: "chutney", isAvailable: false, cost: 5 },
];

export default function ShoppingList() {
  function handleclick() {
    alert("you just clicked");
  }

  const listofItems = items.map((item) => (
    <li
      key={item.id}
      style={{ color: item.isAvailable ? "darkblue" : "orange" }}
    >
      {item.name}
    </li>
  ));
  return (
    <div>
      <ul>{listofItems}</ul>
      <button onClick={handleclick}>CLICK</button>
    </div>
  );
}
