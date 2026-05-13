import React from "react";
import { getImageUrl } from "./utilee";
import { people } from "./Data";
export default function RenderingList() {
  const chemists = people.filter((person) => person.profession === "chemists");
  const ListofItems = chemists.map((person) => (
    <li key={person.id}>
      {getImageUrl(person)}
      {person.profession}
      {person.name}{" "}
    </li>
  ));
  return (
    <div>
      <ul>{ListofItems}</ul>
    </div>
  );
}
