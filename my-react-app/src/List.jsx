import React from "react";
import { people } from "./data";
import getImageUrl from "./utils";
export default function List() {
  const listofData = people.map((person) => (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        style={{ borderRadius: "50px" }}
      />
      <p>
        <b style={{ color: "darkorange" }}>{person.name}:</b>
        <div style={{ color: "black" }}>
          {" "}
          {person.accomplishment}
          {person.profession}
        </div>
      </p>
    </li>
  ));
  return (
    <articl>
      <h1>Scientists</h1>
      <ul style={{ listStyle: "none" }}>{listofData}</ul>
    </articl>
  );
}
