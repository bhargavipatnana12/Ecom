import React from "react";

export default function Todo() {
  const person = {
    name: "MICHEL",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  return (
    <div style={person.theme}>
      <h1 style={{ fontSize: "30px" }}>{person.name}</h1>
      <img
        className="avatar"
        src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
        style={{}}
      />
      <ul>
        <li>HJFLKJFFEKF</li>
        <li>HJFLKJFFEKF</li>
        <li>HJFLKJFFEKF</li>
      </ul>
    </div>
  );
}
