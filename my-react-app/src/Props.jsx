import React from "react";
import { getImageUrl } from "./utilee";

export default function Props() {
  return (
    <div>
      <Avatar size={100} person={{ name: "sruthi", imageId: "YfeOqp2" }} />
      <Avatar size={80} person={{ name: "vijay", imageId: "OKS67lh" }} />
    </div>
  );
}
function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      height={size}
      width={size}
    />
  );
}
